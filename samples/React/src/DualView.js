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

        var dates = new p.ObservableCollection();
        var date = p.DateTime.today();
        var day = date.__getDay() || 7;
        if (day !== 1)
            date.__setHours(-24 * (day - 1));

        for (var i = 0; i < 7; i++) {
            dates.add(p.DateTime.addDays(date, i).clone());
        }

        this.calProps1 = {
            theme: "light",
            currentView: p.CalendarView.Timetable,
            contacts: new p.ObservableCollection([contacts.items()[0]]),
            schedule:
                {
                    contacts: contacts
                },
            timetableSettings: {
                dates: dates,
                orientation: p.Orientation.Horizontal,
                startTime: 480,
                endTime: 1080,
                scrollStep: 7,
                showDayHeader: false
            },
            groupType: p.GroupType.FilterByContacts
        }

        this.calProps2 = {
            theme: "light",
            currentView: p.CalendarView.WeekRange,
            schedule: this.calProps1.schedule,
            weekRangeSettings: {
                headerStyle: p.MainHeaderStyle.Title,
                visibleRows: 5
            },
            useForms: false,
        }

        this.contactsData = [];
        for (i = 0; i < contacts.count(); i++) {
            resource = contacts.items()[i];
            this.contactsData.push({ key: i, value: resource.firstName[0] + "." + resource.lastName });
        }
    }

    componentDidMount() {
        this.reactCalendar1.calendar.itemModified.addEventListener((sender) => { this.repaint(sender); });
        this.reactCalendar2.calendar.itemModified.addEventListener((sender) => { this.repaint(sender); });

        this.reactCalendar2.calendar.schedule = this.reactCalendar1.calendar.schedule;
    }

    filter() {
        var contact = document.getElementById("contacts").selectedIndex;
        // add the contact by which to filter to the calendar.contacts collection
        var contacts = new p.ObservableCollection();
        contacts.add(this.reactCalendar1.props.schedule.contacts.items()[contact]);
        this.reactCalendar1.setState({ contacts: contacts });
    }

    repaint(sender) {
        // trigger full repaint on the calendar control not sending the event in order to recreate all of its item visuals
        if (sender === this.reactCalendar1.calendar)
            this.reactCalendar2.calendar.repaint(true);
        else
            this.reactCalendar1.calendar.repaint(true);
    }

    render() {
        return (

            <div className="App">

                <div className="header">
                    Timetable filtered for contact&nbsp;<select id="contacts" onChange={this.filter.bind(this)}>
                        {this.contactsData.map(x => <option key={x.key} value={x.key}>{x.value}</option>)}
                    </select>
                </div>

                <div className="container">
                    <div className="main" style={{ display: "flex" }}>
                        <div style={{ width: "50%" }} >
                            <ReactCalendar {...this.calProps1} ref={(ref) => this.reactCalendar1 = ref} />
                        </div>
                        <div style={{ width: "50%" }} >
                            <ReactCalendar {...this.calProps2} ref={(ref) => this.reactCalendar2 = ref} />
                        </div>
                    </div>
                    <div className="sidebar">
                        <h1>About this sample</h1>
                        <p> This sample shows how to present a single schedule instance in two different calendar
                        controls.</p>
                        <p>
                            Create items in the timetable to the left, and they will appear in the other calendar
                        simultaneously. The timetable is filtered and displays only items for a specified contact
                        and the week view displays all items in the schedule.
                        Items longer than one day will be shown only in the week calendar.
                        Items can be modified interactively by dragging and resizing in both calendar controls, while the built-in
                        forms can be used only in the timetable.</p>
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
