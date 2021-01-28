import React, { Component } from 'react';
import { Info, Foot } from './Info';
import { ReactCalendar } from './Calendar';
import p from 'scheduler-library';
import './themes/gray.css';


class Timetable extends Component {
    constructor(props) {
        super(props);

        var resource;

        var contacts = new p.ObservableCollection();

        // Add some contacts to the schedule.contacts collection.
        resource = new p.Contact();
        resource.firstName = "Emmy";
        resource.lastName = "Noether";
        contacts.add(resource);

        resource = new p.Contact();
        resource.firstName = "Ernest";
        resource.lastName = "Henley";
        contacts.add(resource);

        resource = new p.Contact();
        resource.firstName = "Jeffrey";
        resource.lastName = "Goldstone";
        contacts.add(resource);

        resource = new p.Contact();
        resource.firstName = "Francesco";
        resource.lastName = "Iachello";
        contacts.add(resource);

        var locations = new p.ObservableCollection();

        // Add some locations to the schedule.locations collection.
        resource = new p.Location();
        resource.name = "Oxford";
        locations.add(resource);

        resource = new p.Location();
        resource.name = "Harvard";
        locations.add(resource);

        resource = new p.Location();
        resource.name = "Tokyo";
        locations.add(resource);

        resource = new p.Location();
        resource.name = "Paris";
        locations.add(resource);

        this.calProps = {
            theme: "gray",
            schedule:
            {
                contacts: contacts,
                locations: locations
            },
            currentView: p.CalendarView.Timetable,
            timetableSettings:
            {
                orientation: p.Orientation.Vertical,
                cellTime: p.TimeSpan.fromMinutes(30),
                cellSize: 25,
                dates: new p.ObservableCollection()
            },
            contactNameFormat: "L"
        }

        this.dtpProps = {
            currentView: p.CalendarView.List,
            theme: "light",
            listSettings: {
                visibleCells: 30,
                numberOfCells: 30,
                headerStyle: p.MainHeaderStyle.None
            },
            useForms: false
        }
    }

    componentDidMount() {
        // attach handlers
        this.datePicker.calendar.selectionEnd.addEventListener((sender, args) => this.handleSelectionEnd(sender, args));
    }

    handleSelectionEnd(sender, args) {
        var startDate = args.startTime;
        var endDate = args.endTime;

        // show the selected date range in the timetable
        var dates = new p.ObservableCollection();
        while (startDate < endDate) {
            dates.add(startDate);
            startDate = p.DateTime.addDays(startDate, 1);
        }
        this.reactCalendar.setState({ timetableSettings: { dates: dates } });
    }

    onOrientationChanged(e) {
        this.reactCalendar.setState({ timetableSettings: { orientation: +e.target.value } });
    }

    onCellSizeChanged(e) {
        this.reactCalendar.setState({ timetableSettings: { cellSize: +e.target.value } });
    }

    onCellTimeChanged(e) {
        this.reactCalendar.setState({ timetableSettings: { cellTime: p.TimeSpan.fromMinutes(+e.target.value) } });
    }

    group(value) {
        if (value === 0) {
            // clear grouping
            this.reactCalendar.setState({ contacts: new p.ObservableCollection(), locations: new p.ObservableCollection(), groupType: value });
        }
        else if (value === p.GroupType.GroupByContacts) {
            // add the contacts by which to group to the calendar.contacts collection
            this.reactCalendar.setState({ contacts: this.reactCalendar.props.schedule.contacts, groupType: value });
        }
        else if (value === p.GroupType.GroupByLocations) {
            // add the locations by which to group to the calendar.locations collection
            this.reactCalendar.setState({ locations: this.reactCalendar.props.schedule.locations, groupType: value });
        }
    }

    render() {
        return (

            <div className="App">
                <div id="datePicker" style={{ width: "100%", height: "20px", display: "inline-block" }} >
                    <ReactCalendar {...this.dtpProps} ref={(ref) => this.datePicker = ref} />
                </div>
                <div className="header">
                    Orientation<select id="orientation" onChange={this.onOrientationChanged.bind(this)} defaultValue="1">
                        <option value="0">Horizontal</option>
                        <option value="1">Vertical</option>
                    </select>
                    Cell size<input id="cellSize" maxLength="2" size="2" defaultValue={this.calProps.timetableSettings.cellSize} onBlur={this.onCellSizeChanged.bind(this)} />
                    Cell time<select id="cellTime" onChange={this.onCellTimeChanged.bind(this)} defaultValue="30">
                        <option value="10">10 minutes</option>
                        <option value="30">30 minutes</option>
                        <option value="60">1 hour</option>
                        <option value="90">1 hour 30 minutes</option>
                        <option value="180">3 hours</option>
                    </select>
                    <button onClick={(e) => this.group(1, e)}>
                        Group by contacts</button>
                    <button onClick={(e) => this.group(3, e)}>
                        Group by locations</button>
                    <button onClick={(e) => this.group(0, e)}>
                        Clear grouping</button>

                </div>

                <div className="container">
                    <div className="main">
                        <ReactCalendar {...this.calProps} ref={(ref) => this.reactCalendar = ref} />
                    </div>
                    <div className="sidebar">
                        <h1>About this sample</h1>
                        <p>This sample shows the capabilities of the Timetable view.</p>
                        <p>This view displays one or more days, divided in arbitrary time intervals.
                            Additionaly it can be grouped by location, task, contact or resource.
                            The vertical timetable displays one column for each date or resource, and the horizontal timetable displays a row for each.</p>
                        <p>Use the TimetableSettings property of the Calendar class to
				set the appearance of the timetable view.</p>
                        <Info />
                    </div>
                </div>
                <Foot />
            </div>
        );
    }
}


export default Timetable;
