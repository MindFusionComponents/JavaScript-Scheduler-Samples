import React, { Component } from 'react';
import { ReactCalendar } from './Calendar';
import p from 'scheduler-library';
import './themes/light.css';
import './GardenCalendar.css';

class GardenCalendar extends Component {
  constructor(props) {
    super(props);

    var resource;

    var resources = new p.ObservableCollection();

    // Add some resources to the schedule.resources collection.
    resource = new p.Resource();
    resource.name = "Tomatoes";
    resources.add(resource);

    resource = new p.Resource();
    resource.name = "Cucumbers";
    resources.add(resource);

    resource = new p.Resource();
    resource.name = "Bell Peppers";
    resources.add(resource);

    resource = new p.Resource();
    resource.name = "Eggplants";
    resources.add(resource);

    resource = new p.Resource();
    resource.name = "Beans";
    resources.add(resource);

    resource = new p.Resource();
    resource.name = "Potatoes";
    resources.add(resource);

    resource = new p.Resource();
    resource.name = "Carrots";
    resources.add(resource);

    this.cropsData = [];
    for (var i = 0; i < resources.count(); i++) {
      resource = resources.items()[i];
      this.cropsData.push({ key: i, value: resource.name });
    }

    var tasks = new p.ObservableCollection();
    // Add some tasks to the schedule.tasks collection.
    resource = new p.Task();
    resource.name = "Sow";
    tasks.add(resource);

    resource = new p.Task();
    resource.name = "Transplant";
    tasks.add(resource);

    resource = new p.Task();
    resource.name = "Harvest";
    tasks.add(resource);

    this.tasksData = [];
    for (i = 0; i < tasks.count(); i++) {
      resource = tasks.items()[i];
      this.tasksData.push({ key: i, value: resource.name });
    }

    this.calProps = {
      currentView: p.CalendarView.List,
      date: p.DateTime.fromDateParts(p.DateTime.today().year, 0),
      theme: "pastel",
      cssClass: "garden",
      useForms: false,
      allowInplaceEdit: false,
      loadEvent: this.handleLoad,
      listSettings: {
        cellUnits: p.TimeUnit.Month,
        numberOfCells: 12,
        visibleCells: 12,
        headerStyle: p.MainHeaderStyle.Title,
        titleFormat: "MMMM"
      },
      itemSettings: {
        size: 30,
        tooltipFormat: "%h (%s[MMMM] - %e[MMMM])"
      },
      schedule:
      {
        resources: resources,
        tasks: tasks
      },
      resources: resources,
      groupType: p.GroupType.GroupByResources
    }
  }

  handleLoad(sender) {
    for (var i = 0; i < sender.cells.count(); i++) {
      var month = sender.cells.items()[i].startTime.month;
      sender.cells.items()[i].bgCell.classList.add("cellClass" + Math.floor(month / 3));
    }
  }

  handleSelectionEnd(sender, args) {
    // create a new item with the start and end time of the selection
    var item = new p.Item();
    item.startTime = args.startTime;
    item.endTime = args.endTime;
    item.resources.add(args.resource);

    var taskIndex = document.getElementById("tasks").value;
    item.priority = 3 - +taskIndex;
    item.task = sender.schedule.tasks.items()[+taskIndex];
    item.subject = item.task.name;
    item.cssClass = "itemClass" + taskIndex;
    sender.schedule.items.add(item);
  }

  handleItemClick(sender, args) {
    if (args.rawEventArgs.target.className === "mfp-icons") {
      sender.schedule.items.remove(args.item);
    }
  }

  handleItemModified(sender, args) {
    if (args.action === p.ItemModifyAction.Drag) {
      var duration = p.DateTime.monthsBetween(args.oldItem.startTime, args.oldItem.endTime);
      args.item.endTime = args.item.startTime.clone().addMonths(duration);
    }

    if (args.item.endTime.valueOf() > sender.itemsEndTime.valueOf())
      args.item.endTime = sender.itemsEndTime.clone();
  }

  handleScheduleChanged(sender, args) {
    sender.groupType = (sender.schedule.resources.count() > 0) ? p.GroupType.GroupByResources : p.GroupType.None;
  }

  componentDidMount() {
    // attach handlers
    this.reactCalendar.calendar.selectionEnd.addEventListener((sender, args) => this.handleSelectionEnd(sender, args));
    this.reactCalendar.calendar.itemClick.addEventListener((sender, args) => this.handleItemClick(sender, args));
    this.reactCalendar.calendar.itemModified.addEventListener((sender, args) => this.handleItemModified(sender, args));
    this.reactCalendar.calendar.scheduleChanged.addEventListener((sender, args) => this.handleScheduleChanged(sender, args));
  }


  render() {
    return (

      <div className="App">

        <div className="header">
          Task&nbsp;<select id="tasks">{this.tasksData.map(x => <option key={x.key} value={x.key}>{x.value}</option>)}
          </select>
        </div>

        <div className="container">
          <div className="main">
            <ReactCalendar {...this.calProps} ref={(ref) => this.reactCalendar = ref} />
          </div>
          <div className="sidebar">
            <h1>About this sample</h1>
            <p>
              A 12-month garden calendar is presented in a horizontal list view, grouped by resources,
          where each resource represents a different crop. Schedule items are created automatically
          upon selection and are bound to the specified task.
				<br />
              The calendar's appearance is customized by setting various properties
              and additional css styles.
            </p>
            <h1>About JsPlanner</h1>
            <p>JsPlanner is fully interactive scheduling control for the web, that can be used to present calendars and timetables to users and
	let them edit the schedule information interactively. JsPlanner can display a schedule in several view types, such as:</p>
            <ul>
              <li>Single and multiple month views</li>
              <li>Single and multiple week views</li>
              <li>Horizontal and vertical lists of time intervals</li>
              <li>Horizontal and vertical timetables</li>
              <li>Resource view, displaying the distribution of resources over a period of time</li>
            </ul>
            <h2>Features</h2>
            <ul>
              <li>Several different view types</li>
              <li>Interactive item creation and modification</li>
              <li>Filtering and grouping</li>
              <li>Recurring events</li>
              <li>Localization support</li>
              <li>Themes</li>
              <li>XML and JSON schedule serialization</li>
            </ul>
            <p>JsPlanner is written 100% in JavaScript and can easily be integrated into any web application. It uses Flexible Box for layout.</p>
          </div>
        </div>

        <div className="footer">
          <p>Copyright 2017-2019 MindFusion LLC.</p>
        </div>

      </div>
    );
  }
}


export default GardenCalendar;
