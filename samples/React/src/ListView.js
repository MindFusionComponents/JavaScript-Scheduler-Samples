import React, { Component } from 'react';
import { ReactCalendar } from './Calendar';
import p from 'scheduler-library';
import './themes/earth.css';

class ListView extends Component {
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
            theme: "earth",
            schedule:
                {
                    contacts: contacts,
                    locations: locations
                },
            currentView: p.CalendarView.List,
            listSettings:
                {
                    orientation: p.Orientation.Horizontal,
                    numberOfCells: 14,
                    visibleCells: 7
                },
            contactNameFormat: "L"
        }
    }

    onOrientationChanged(e) {
        this.reactCalendar.setState({ listSettings: { orientation: +e.target.value } });
    }

    onCellUnitsChanged(e) {
        this.reactCalendar.setState({ listSettings: { cellUnits: +e.target.value } });
    }

    onTotalCellsChanged(e) {
        this.reactCalendar.setState({ listSettings: { numberOfCells: +e.target.value } });
    }

    onVisibleCellsChanged(e) {
        this.reactCalendar.setState({ listSettings: { visibleCells: +e.target.value } });
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

                <div className="header">

                    Orientation&nbsp;<select id="view" onChange={this.onOrientationChanged.bind(this)} defaultValue="0">
                        <option value="0">Horizontal</option>
                        <option value="1">Vertical</option>
                    </select>
                    Cell units&nbsp;<select id="headerStyle" onChange={this.onCellUnitsChanged.bind(this)} defaultValue="3">
                        <option value="0">Second</option>
                        <option value="1">Minute</option>
                        <option value="2">Hour</option>
                        <option value="3">Day</option>
                        <option value="4">Week</option>
                        <option value="5">Month</option>
                        <option value="6">Year</option>
                    </select>
                    Total cells&nbsp;<input id="totalCells" maxLength="2" size="2" defaultValue={this.calProps.listSettings.numberOfCells} onBlur={this.onTotalCellsChanged.bind(this)} />
                    Visible cells&nbsp;<input id="visibleRows" maxLength="2" size="2" defaultValue={this.calProps.listSettings.visibleCells} onBlur={this.onVisibleCellsChanged.bind(this)} />
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
                            <p>This sample shows the capabilities of the List view.</p>
                            <p>This view displays a number of cells, representing a single second, minute, hour,
                        day, week, month or year time interval. The horizontal layout displays the time
                        cells as columns, and the vertical layout - as rows. Additionaly it can be grouped
                        by location, task, contact or resource.</p>
                            <p>Use the ListViewSettings property of the Calendar class to
				set the appearance of the list view.</p>
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


export default ListView;
