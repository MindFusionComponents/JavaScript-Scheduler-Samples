import React, { Component } from 'react';
import { ReactCalendar } from './Calendar';
import p from 'scheduler-library';
import './themes/light.css';


class Resources extends Component {
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
            theme: "light",
            currentView: p.CalendarView.Timetable,
            schedule:
                {
                    contacts: contacts,
                    locations: locations
                }
        }

        this.contactsData = [];
        for (var i = 0; i < contacts.count(); i++) {
            resource = contacts.items()[i];
            this.contactsData.push({ key: i, value: resource.firstName[0] + "." + resource.lastName });
        }

        this.locationsData = [];
        for (i = 0; i < locations.count(); i++) {
            resource = locations.items()[i];
            this.locationsData.push({ key: i, value: resource.name });
        }
    }

    filter(value) {
        if (value === 0) {
            // clear filter
            this.reactCalendar.setState({ contacts: new p.ObservableCollection(), locations: new p.ObservableCollection(), groupType: value });
        }
        else if (value === p.GroupType.FilterByContacts) {
            var contact = document.getElementById("contacts").selectedIndex;
            // add the contact by which to filter to the calendar.contacts collection
            var contacts = new p.ObservableCollection();
            contacts.add(this.reactCalendar.props.schedule.contacts.items()[contact]);
            this.reactCalendar.setState({ contacts: contacts, groupType: value });
        }
        else if (value === p.GroupType.FilterByLocations) {
            var location = document.getElementById("locations").selectedIndex;
            // add the location by which to filter to the calendar.locations collection
            var locations = new p.ObservableCollection();
            locations.add(this.reactCalendar.props.schedule.locations.items()[location]);
            this.reactCalendar.setState({ locations: locations, groupType: value });
        }
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

    changeView(value) {
        if (value === -1) {
            this.reactCalendar.setState({ currentView: p.CalendarView.List, listSettings: { orientation: p.Orientation.Vertical } });
        }
        else {
            this.reactCalendar.setState({ currentView: value, listSettings: { orientation: p.Orientation.Horizontal } });
        }

    }

    render() {
        return (

            <div className="App">

                <div className="header">

                    <button onClick={(e) => this.changeView(3, e)}>Horizontal List</button>
                    <button onClick={(e) => this.changeView(-1, e)}>Vertical List</button>
                    <button onClick={(e) => this.changeView(4, e)}> Timetable</button>
                    <button onClick={(e) => this.changeView(5, e)}>Resource</button>
                    <button onClick={(e) => this.group(1, e)}>
                        Group by contacts</button>
                    <button onClick={(e) => this.group(3, e)}>
                        Group by locations</button>
                    <button onClick={(e) => this.group(0, e)}>
                        Clear grouping</button>
                    Contacts&nbsp;<select id="contacts"> {this.contactsData.map(x => <option key={x.key} value={x.key}>{x.value}</option>)}

                    </select>
                    <button onClick={(e) => this.filter(5, e)}>
                        Filter by contact</button>
                    Locations&nbsp;<select id="locations">{this.locationsData.map(x => <option key={x.key} value={x.key}>{x.value}</option>)}
                    </select>
                    <button onClick={(e) => this.filter(6, e)}>
                        Filter by location</button>
                    <button onClick={(e) => this.filter(0, e)}>
                        Clear filter</button>
                </div>

                <div className="container">
                    <div className="main">
                        <ReactCalendar {...this.calProps} ref={(ref) => this.reactCalendar = ref} />
                    </div>
                    <div className="sidebar">
                        <h1>About this sample</h1>
                        <p>This sample demonstrates the grouping and filtering capabilities of JsPlanner.</p>
                        <p>Filtering is used to display calendar items, associated with a selected resource and can be enabled by setting the GroupType property to one of
                the FilterBy* values. Select a contact or location from one of the drop-down lists below in order to display the matching appointments.</p>
                        <p>Grouping the calendar creates separate rows or columns for each resource and can be enabled by setting the GroupType property to one of the GroupBy* values.
                 Note that the Resource view is designed to only display content when grouping is enabled. </p>
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


export default Resources;
