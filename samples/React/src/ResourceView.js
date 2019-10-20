import React, { Component } from 'react';
import { ReactCalendar } from './Calendar';
import p from 'scheduler-library';
import './themes/green.css';


class ResourceView extends Component {
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
            theme: "green",
            schedule:
                {
                    contacts: contacts,
                    locations: locations
                },
            contacts: contacts,
            groupType: p.GroupType.GroupByContacts,
            currentView: p.CalendarView.ResourceView,
            resourceViewSettings:
                {
                    timelines: 3,
                    visibleCells: 14,
                    topTimelineSettings: {
                        unit: p.TimeUnit.Year,
                        unitCount: 1
                    },
                    middleTimelineSettings: {
                        unit: p.TimeUnit.Month,
                        unitCount: 1
                    },
                    bottomTimelineSettings: {
                        unit: p.TimeUnit.Day,
                        unitCount: 1
                    }
                },
            contactNameFormat: "L"
        }
    }

    onTimelinesChanged(e) {
        this.reactCalendar.setState({ resourceViewSettings: { timelines: +e.target.value } });
    }

    onVisibleCellsChanged(e) {
        this.reactCalendar.setState({ resourceViewSettings: { visibleCells: +e.target.value } });
    }


    onTTUnitChanged(e) {
        this.reactCalendar.setState({ resourceViewSettings: { topTimelineSettings: { unit: +e.target.value } } });
    }

    onTTCountChanged(e) {
        this.reactCalendar.setState({ resourceViewSettings: { topTimelineSettings: { unitCount: +e.target.value } } });
    }

    onMTUnitChanged(e) {
        this.reactCalendar.setState({ resourceViewSettings: { middleTimelineSettings: { unit: +e.target.value } } });
    }

    onMTCountChanged(e) {
        this.reactCalendar.setState({ resourceViewSettings: { middleTimelineSettings: { unitCount: +e.target.value } } });
    }

    onBTUnitChanged(e) {
        this.reactCalendar.setState({ resourceViewSettings: { bottomTimelineSettings: { unit: +e.target.value } } });
    }

    onBTCountChanged(e) {
        this.reactCalendar.setState({ resourceViewSettings: { bottomTimelineSettings: { unitCount: +e.target.value } } });
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

                    Timelines&nbsp;<select id="timelines" onChange={this.onTimelinesChanged.bind(this)} defaultValue="3">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    Visible cells&nbsp;<input id="visibleRows" maxLength="2" size="2" defaultValue={this.calProps.resourceViewSettings.visibleCells} onBlur={this.onVisibleCellsChanged.bind(this)} />

                    Top timeline : unit&nbsp;<select id="ttunit" onChange={this.onTTUnitChanged.bind(this)} defaultValue="6">
                        <option value="2">Hour</option>
                        <option value="3">Day</option>
                        <option value="4">Week</option>
                        <option value="5">Month</option>
                        <option value="6">Year</option>
                    </select>
                    count&nbsp;<input id="ttcount" maxLength="2" size="2" defaultValue={this.calProps.resourceViewSettings.topTimelineSettings.unitCount} onBlur={this.onTTCountChanged.bind(this)} />

                    Middle timeline : unit&nbsp;<select id="mtunit" onChange={this.onMTUnitChanged.bind(this)} defaultValue="5">
                        <option value="2">Hour</option>
                        <option value="3">Day</option>
                        <option value="4">Week</option>
                        <option value="5">Month</option>
                        <option value="6">Year</option>
                    </select>
                    count&nbsp;<input id="mtcount" maxLength="2" size="2" defaultValue={this.calProps.resourceViewSettings.middleTimelineSettings.unitCount} onBlur={this.onMTCountChanged.bind(this)} />


                    Bottom timeline : unit&nbsp;<select id="btunit" onChange={this.onBTUnitChanged.bind(this)} defaultValue="3">
                        <option value="2">Hour</option>
                        <option value="3">Day</option>
                        <option value="4">Week</option>
                        <option value="5">Month</option>
                        <option value="6">Year</option>
                    </select>
                    count&nbsp;<input id="btcount" maxLength="2" size="2" defaultValue={this.calProps.resourceViewSettings.bottomTimelineSettings.unitCount} onBlur={this.onBTCountChanged.bind(this)} />

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
                        <p>This sample shows the capabilities of the Resource view.</p>
                        <p>This view displays the distribution of items over a period of time for a particular contacts, locations, tasks or resources.
                        The view displays a single row for each individual contact, location, task or resource and up to three timelines.
                        In order to view associated items in this view, the GroupType property of the Calendar must be set to GroupByContacts,
                        GroupByLocations, GroupByTasks or GroupByResources.</p>
                        <p>Use the ResourceViewSettings property of the Calendar class to
				set the appearance of the resource view.</p>
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


export default ResourceView;
