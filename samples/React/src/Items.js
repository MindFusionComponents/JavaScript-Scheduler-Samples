import React, { Component } from 'react';
import { Info, Foot } from './Info';
import { ReactCalendar } from './Calendar';
import p from 'scheduler-library';
import './themes/light.css';
import './items.css'

class Items extends Component {
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

        var locations = new p.ObservableCollection();

        // Add some locations to the schedule.locations collection.
        resource = new p.Location();
        resource.name = "Oxford";
        locations.add(resource);

        resource = new p.Location();
        resource.name = "Harvard";
        locations.add(resource);

        var date = p.DateTime.today();
        var subjects = ["Solve Fermi paradox", "Stretch", "Find size of universe", "Gaze into space", "Google adorable baby animal photos"];
        var item;
        var items = new p.ObservableCollection();

        // add some items to the schedule items collection
        for (var i = 0; i < 15; i++) {
            item = new p.Item();
            item.subject = subjects[Math.floor(Math.random() * 4)];
            item.startTime = date.clone().addHours((Math.floor((Math.random() * 250) + 1) * (Math.random() * 2 === 1 ? 1 : -1)));
            item.endTime = item.startTime.clone().addHours(Math.floor(Math.random() * 2 + 1));
            // add a custom css class to some items
            if (i % 2 === 0) {
                item.cssClass = "myItemClass";
                item.details = "It is of utmost importance!"
            }
            items.add(item);
        }

        // add a recurrent item
        item = new p.Item();
        item.startTime = p.DateTime.fromDateParts(date.year, date.month, date.day, 14, 0, 0);
        item.endTime = p.DateTime.fromDateParts(date.year, date.month, date.day, 16, 0, 0);
        item.subject = "Take a power nap";
        item.details = "zzz";

        // setup the recurrence
        var recurrence = new p.Recurrence();
        recurrence.pattern = p.RecurrencePattern.Weekly;
        recurrence.daysOfWeek = p.DaysOfWeek.Wednesday;
        recurrence.startDate = date;
        recurrence.recurrenceEnd = p.RecurrenceEnd.Never;
        item.recurrence = recurrence;

        items.add(item);

        // add an item with reminder
        item = new p.Item();
        item.startTime = p.DateTime.addMinutes(date, 2);
        item.endTime = p.DateTime.addHours(item.startTime, 2);
        item.subject = "GYM";

        var reminder = new p.Reminder();
        reminder.message = "Speaking of the " + item.subject + ", go!!";
        reminder.type = p.ReminderType.Leading;
        reminder.timeInterval = p.TimeSpan.fromMinutes(1);
        item.reminder = reminder;

        items.add(item);

        this.calProps = {
            theme: "light",
            currentView: p.CalendarView.SingleMonth,
            schedule:
            {
                contacts: contacts,
                locations: locations,
                items: items
            },
            itemSettings:
            {
                size: 20,
                spacing: 2,
                titleFormat: "%s[hh:mm tt] %h",
                tooltipFormat: "%h %d"
            }
        }
        this.xmldoc = null;
    }

    clearItems() {
        this.reactCalendar.calendar.schedule.items.clear();
    }

    toXml() {
        this.xmldoc = this.reactCalendar.calendar.schedule.toXmlDocument();
    }

    fromXml() {
        if (this.xmldoc)
            this.reactCalendar.calendar.schedule.fromXmlDocument(this.xmldoc);
        else alert('Save a schedule to load.')
    }

    changeView(value) {
        this.reactCalendar.setState({ currentView: value });
    }

    onSizeChanged(e) {
        e.target.value = Math.max(+e.target.value, 1).toString();
        this.reactCalendar.setState({ itemSettings: { size: +e.target.value } });
    }

    onSpacingChanged(e) {
        e.target.value = Math.max(+e.target.value, 0).toString();
        this.reactCalendar.setState({ itemSettings: { spacing: +e.target.value } });
    }

    onClassChanged(e) {
        this.reactCalendar.setState({ itemSettings: { cssClass: e.target.value } });
    }

    handleLoad(sender) {
        var start = p.DateTime.today();
        var end = start.clone().addDays(1);
        var cells = sender.getTimeCells(start, end, true);
        for (var i = 0; i < cells.length; i++) {
            cells[i].bgCell.style.backgroundColor = "#ffeecc";
        }
    }

    handleItemModifying(sender, args) {
        args.cancel = (args.item.cssClass === "myItemClass");
    }

    handleItemModified(sender, args) {
        args.item.cssClass = "modItemClass";
    }

    componentDidMount() {
        // attach handlers
        this.reactCalendar.calendar.itemReminderTriggered.addEventListener(function (sender, args) { alert(args.item.reminder.message); });
        this.reactCalendar.calendar.itemModifying.addEventListener((sender, args) => this.handleItemModifying(sender, args));
        this.reactCalendar.calendar.itemModified.addEventListener((sender, args) => this.handleItemModified(sender, args));
    }

    render() {
        return (

            <div className="App">

                <div className="header">
                    <button onClick={(e) => this.changeView(1, e)}>
                        Single Month</button>
                    <button onClick={(e) => this.changeView(0, e)}>
                        MonthRange</button>
                    <button onClick={(e) => this.changeView(3, e)}>
                        List</button>
                    <button onClick={(e) => this.changeView(2, e)}>
                        Week Range</button>
                    <button onClick={(e) => this.changeView(4, e)}>
                        Timetable</button>
                    Items size<input id="size" maxLength="2" size="3" defaultValue={this.calProps.itemSettings.size} onBlur={this.onSizeChanged.bind(this)} />
                    Items spacing<input id="spacing" maxLength="2" size="3" defaultValue={this.calProps.itemSettings.spacing} onBlur={this.onSpacingChanged.bind(this)} />
                    <select id="itemClass" onChange={this.onClassChanged.bind(this)}>
                        <option></option>
                        <option>itemClass1</option>
                        <option>itemClass2</option>
                    </select>
                    <button onClick={(e) => this.clearItems(e)}>
                        Clear items</button>
                    <button onClick={(e) => this.toXml(e)}>
                        Save to Xml</button>
                    <button onClick={(e) => this.fromXml(e)}>
                        Load from Xml</button>
                </div>

                <div className="container">
                    <div className="main">
                        <ReactCalendar {...this.calProps} 
                        calendarLoad={this.handleLoad}
                        ref={(ref) => this.reactCalendar = ref} />
                    </div>
                    <div className="sidebar">
                        <h1>About this sample</h1>
                        <p>
                            This sample shows how to create calendar items.
                        </p><p>
                            Calendar items represent events scheduled to occur at an appointed time and are defined by instances of the Item class.
                        Items can have associated resources via the resources, contacts, location and task properties.
                        Items can recur in time, following a specific recurrence pattern.
                        The appearance of calendar items can be customized by using the calendar.itemSettings property or by specifying a css class
                        to individual items.
                        </p><p>
                            JSplanner offers out-of-the-box interactive creating, modifying and deleting of calendar items by using the built-in popup forms. </p>
                        <Info />
                    </div>
                </div>
                <Foot />
            </div>
        );
    }
}


export default Items;
