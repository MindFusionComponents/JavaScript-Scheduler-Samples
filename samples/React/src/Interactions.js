import React, { Component } from 'react';
import { Info, Foot } from './Info';
import { ReactCalendar } from './Calendar';
import p from 'scheduler-library';
import './themes/peach.css';
import './Interactions.css';

class Interactions extends Component {
  constructor(props) {
    super(props);

    var items = new p.ObservableCollection();

    var date = p.DateTime.today();
    var subjects = ["Solve Fermi paradox", "Stretch", "Find size of universe", "Gaze into space", "Google adorable baby animal photos"];
    var item;

    // add some items to the schedule items collection
    for (var i = 0; i < 5; i++) {
      item = new p.Item();
      item.subject = subjects[i];
      item.startTime = date.clone().addDays(Math.floor(Math.random() * 30));
      item.endTime = item.startTime.clone().addDays(1);
      items.add(item);
    }

    this.calProps = {
      currentView: p.CalendarView.WeekRange,
      theme: "peach",
      cssClass: "interactions",
      useForms: false,
      itemSettings: {
        size: 64,
        showCues: false
      },
      schedule:
      {
        items: items
      }
    }
  }

  inplaceEdited(e) {
    if (e.target.innerText === "OK") {
      this.item.subject = e.target.parentNode.childNodes[0].value;
      this.calendar.repaint(true);
    }
    var m = document.querySelector(".modal");
    m.parentNode.removeChild(m);
  }

  handleKeyPress(e) {
    var m = document.querySelector(".modal");
    if (m) return;

    // get the selected range
    var selRange = this.reactCalendar.calendar.selection.getRange();
    if (selRange) {
      m = document.querySelector(".inplace-create");
      if (!m) {
        var cell = this.reactCalendar.calendar.getTimeCell(selRange.start).bgCell;
        var rect = cell.getBoundingClientRect();

        // create the input for the item subject
        var input = document.createElement("textarea");
        input.style.left = rect.left + "px";
        input.style.top = rect.top + "px";
        input.style.width = rect.width + "px";
        input.style.height = rect.height + "px";

        input.className = "inplace-create";

        document.body.appendChild(input);
        input.focus();

        document.addEventListener('mousedown', this.inplaceCreatedHandler);
      }
    }
  }

  inplaceCreated() {
    var m = document.querySelector(".inplace-create");
    m.parentNode.removeChild(m);

    var selRange = this.reactCalendar.calendar.selection.getRange();

    // create the new item
    var item = new p.Item();
    item.startTime = selRange.start;
    item.endTime = selRange.end;
    item.subject = m.value;

    this.reactCalendar.calendar.schedule.items.add(item);
    this.reactCalendar.calendar.repaint();

    document.removeEventListener('mousedown', this.inplaceCreatedHandler);
  }


  handleItemModifying(sender, args) {
    var elements;
    var cells;
    // handle drag interaction
    if (args.action === p.ItemModifyAction.Drag) {
      // start of drag interaction - no changes made yet
      if (args.changes == null) {
        // hide item elements
        elements = sender.getItemDom(args.item);
        elements.forEach(
          function (element) { element.style.visibility = 'hidden'; })
      }
      else {
        // clear drag indicator styling
        sender.cells.forEach(
          function (cell) { cell.bgCell.classList.remove("indicator-drag"); })

        // create drag indicator styling
        cells = sender.getTimeCells(args.changes.startTime, args.changes.endTime, true);
        cells.forEach(
          function (cell) { cell.bgCell.classList.add("indicator-drag") });
      }
    }

    // handle resize interaction
    if (args.action === p.ItemModifyAction.Resize) {
      // start of resize interaction - no changes made yet
      if (args.changes == null) {
        // hide item elements
        elements = sender.getItemDom(args.item);
        elements.forEach(
          function (element) { element.style.visibility = 'hidden'; })
      }
      else {
        // clear resize indicator styling
        sender.cells.forEach(
          function (cell) { cell.bgCell.classList.remove("indicator-resize"); })

        // create resize indicator styling
        cells = sender.getTimeCells(args.changes.startTime, args.changes.endTime, true);
        cells.forEach(
          function (cell) { cell.bgCell.classList.add("indicator-resize") });
      }
    }

    // handle inplace edit interaction
    if (args.action === p.ItemModifyAction.InplaceEdit) {
      // start of inplace edit interaction - no changes made
      if (args.changes == null) {
        // create and show the custom popup
        var m = document.createElement("div");
        m.className = "modal";

        var div = document.createElement("div");
        div.className = "inplace";
        m.appendChild(div);

        var input = document.createElement("textarea");
        input.value = args.item.subject;
        div.appendChild(input);

        var button = document.createElement("button");
        button.innerText = "OK";
        button.addEventListener('click', this.inplaceEdited.bind({ calendar: this.reactCalendar.calendar, item: args.item }));
        div.appendChild(button);

        button = document.createElement("button");
        button.innerText = "Cancel";
        button.addEventListener('click', this.inplaceEdited.bind({ calendar: this.reactCalendar.calendar, item: args.item }));
        div.appendChild(button);

        sender.element.parentNode.appendChild(m);
        input.focus();

        // cancel the default behavior
        args.cancel = true;
      }
    }
  }

  handleItemModified(sender, args) {
    // clear drag and resize indicator styling
    sender.cells.forEach(
      function (cell) { cell.bgCell.classList.remove("indicator-drag"); })
    sender.cells.forEach(
      function (cell) { cell.bgCell.classList.remove("indicator-resize"); })
  }

  handleSelectionStart(sender, args) {
    var m = document.querySelector(".inplace-create");
    if (m)
      args.cancel = true;
  }


  componentDidMount() {
    // attach handlers
    this.reactCalendar.calendar.itemModifying.addEventListener((sender, args) => this.handleItemModifying(sender, args));
    this.reactCalendar.calendar.itemModified.addEventListener((sender, args) => this.handleItemModified(sender, args));
    this.reactCalendar.calendar.selectionStart.addEventListener((sender, args) => this.handleSelectionStart(sender, args));

    this.inplaceCreatedHandler = this.inplaceCreated.bind(this);
    this.keyPressHandler = this.handleKeyPress.bind(this);
    document.addEventListener("keypress", this.keyPressHandler);
  }

  componentWillUnmount() {
    document.removeEventListener("keypress", this.keyPressHandler);
  }

  render() {
    return (

      <div className="App">

        <div className="header">
        </div>

        <div className="container">
          <div className="main">
            <ReactCalendar {...this.calProps} ref={(ref) => this.reactCalendar = ref} />
          </div>
          <div className="sidebar">
            <h1>About this sample</h1>
            <p>
              This sample shows how the calendar control's response to different user interactions can be customized.
				<br />
              To create a new item select some cells in the calendar and start typing. An input box will appear in
              the first selected cell. After typing the new item's subject in, click anywhere on the document surface to create the item.
				<br />
              Items are hidden during drag and resize modifications and underlying calendar cells are styled to indicate the interaction.
				<br />
              Items' default inplace edit behavior is replaced by a custom popup.
            </p>
            <Info />
          </div>
        </div>

        <Foot />

      </div>
    );
  }
}


export default Interactions;
