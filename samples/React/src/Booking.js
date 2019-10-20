import React, { Component } from 'react';
import { ReactCalendar } from './Calendar';
import p from 'scheduler-library';
import './themes/light.css';
import './Booking.css';
import { AppForm } from './AppForm';

class Booking extends Component {
  constructor(props) {
    super(props);

    var locations = new p.ObservableCollection();
    // Add some rooms to the schedule.locations collection.
    for (var i = 1; i < 5; i++) {
      var resource = new p.Location();
      resource.name = "Room " + i.toString();
      locations.add(resource);
    }
    var filteredLocations = new p.ObservableCollection();
    filteredLocations.add(locations.items()[0]);

    this.locationsData = [];
    for (i = 0; i < locations.count(); i++) {
      resource = locations.items()[i];
      this.locationsData.push({ key: i, value: resource.name });
    }

    this.calProps = {
      currentView: p.CalendarView.MonthRange,
      theme: "light",
      cssClass: "booking",
      useForms: false,
      monthSettings: {
        dayOfWeekFormat: p.DayOfWeekFormat.SingleLetter,
        weekHeaderStyle: p.VerticalHeaderStyle.None,
        firstDayOfMonthFormat: "d",
        expandDayHeaders: true
      },
      monthRangeSettings: {
        headerStyle: p.MainHeaderStyle.Buttons,
        numberOfMonths: 2,
        visibleRows: 1
      },
      itemSettings: {
        showItems: false
      },
      schedule:
      {
        locations: locations
      },
      locations: filteredLocations,
      groupType: p.GroupType.FilterByLocations
    }
  }

  handleLoad(sender) {

    sender.cells.items().forEach(cell => {
      if (cell.bgCell) {
        cell.bgCell.classList.toggle("cellClass0", false);
        cell.bgCell.classList.toggle("cellClass1", false);
        cell.bgCell.classList.toggle("cellClass2", false);
      }
    });

    var items = sender.schedule.items.items();

    for (var i = 0; i < items.length; i++) {
      var cells = sender.getItemCells(items[i]);

      // style the calendar cells which contain items
      for (var k = 0; k < cells.length; k++) {
        if (cells[k].bgCell) {
          cells[k].bgCell.classList.add("cellClass" + items[i].tag);
        }
      }
    }
  }

  handleSelectionEnd(sender, args) {
    if (!this.isAvailable(args.startTime, args.endTime)) {
      alert("The selected dates are already booked for this room.");
      return;
    }

    // create a new item with the start and end time of the selection
    var item = new p.Item();
    item.startTime = args.startTime;
    item.endTime = args.endTime;
    item.location = sender.locations.items()[0];
    item.tag = 0;

    // create and show the custom form
    var form = new AppForm(sender, item, "new");
    form.showForm();
  }

  isAvailable(startTime, endTime) {
    var items = this.reactCalendar.calendar.schedule.getAllItems(startTime, endTime, this.reactCalendar.calendar.locations.items()[0]);
    return items.count() === 0;
  }


  handleCueClick(sender, args) {
    var item = sender.schedule.getAllItems(args.cell.startTime, args.cell.endTime, sender.locations.items()[0]).first();

    // create and show the custom form
    var form = new AppForm(sender, item, "edit");
    form.showForm();
  }

  onRoomChanged(e) {
    var location = document.getElementById("locations").selectedIndex;
    // add the location by which to filter to the calendar.locations collection
    var locations = new p.ObservableCollection();
    locations.add(this.reactCalendar.props.schedule.locations.items()[location]);
    this.reactCalendar.setState({ locations: locations });
  }

  componentDidMount() {
    // attach handlers
    this.reactCalendar.calendar.selectionEnd.addEventListener((sender, args) => this.handleSelectionEnd(sender, args));
    this.reactCalendar.calendar.cueClick.addEventListener((sender, args) => this.handleCueClick(sender, args));
    this.reactCalendar.calendar.calendarLoad.addEventListener((sender) => this.handleLoad(sender));
    this.reactCalendar.calendar.scheduleChanged.addEventListener((sender, args) => this.handleLoad(sender, args));
  }


  render() {
    return (

      <div className="App">

        <div className="header">
          Rooms&nbsp;<select id="locations" onChange={this.onRoomChanged.bind(this)}>{this.locationsData.map(x => <option key={x.key} value={x.key}>{x.value}</option>)}
          </select>
        </div>

        <div className="container">
          <div className="main">
            <ReactCalendar {...this.calProps} ref={(ref) => this.reactCalendar = ref} />
          </div>
          <div className="sidebar">
            <h1>About this sample</h1>
            <p>
              Create and edit reservations for the four rooms defined as locations for the schedule.
				<br />
              This sample presents a filtered MonthRange view. Only one appointment can be created
              for a day period and location.
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


export default Booking;
