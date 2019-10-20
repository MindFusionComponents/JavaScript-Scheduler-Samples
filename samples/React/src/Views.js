import React, { Component } from 'react';
import { ReactCalendar } from './Calendar';
import p from 'scheduler-library';
import './themes/blue.css';


class Views extends Component {
    constructor(props) {
        super(props);

        this.calProps = {
            theme: "blue",
            currentView: p.CalendarView.MonthRange,
            monthSettings:
                { headerStyle: p.MainHeaderStyle.Title,
                expandDayHeaders: true },
            timetableSettings:
                { headerStyle: p.MainHeaderStyle.Title },
            itemSettings:
                { showItems: false, showCues: false }
        }
    }
    
    handleSelectionEnd(sender, args) {
        // cancel the default behavior if the current view is MonthRange or SingleMonth.
        if (sender.currentView < 2) {
            args.cancel = true;

            var startDate = args.startTime;
            var endDate = args.endTime;

            // show the selected date range in the timetable
            var dates = new p.ObservableCollection();
            while (startDate < endDate) {
                dates.add(startDate);
                startDate = p.DateTime.addDays(startDate, 1);
            }

            this.reactCalendar.setState({ currentView: p.CalendarView.Timetable, timetableSettings: { dates: dates }, itemSettings: { showItems: true } });
        }
    }

    handleHeaderClick(sender, args) {
        if (sender.currentView === p.CalendarView.SingleMonth) {
            this.reactCalendar.setState({ currentView: p.CalendarView.MonthRange, itemSettings: { showItems: false } });
        }
        else if (sender.currentView === p.CalendarView.Timetable) {
            this.reactCalendar.setState({ currentView: p.CalendarView.SingleMonth, date : sender.timetableSettings.dates.items()[0],  itemSettings: { showItems: false } });
        }
    }

    handleLoad(sender) {
        if (sender.currentView < 2) {
            var items = sender.schedule.items.items();

            for (var i = 0; i < items.length; i++) {
                var start = items[i].startTime;
                var end = items[i].endTime;

                var cells = sender.getTimeCells(start, end, true);

                // style the headers of the calendar cells which contain items
                for (var k = 0; k < cells.length; k++) {
                    if (cells[k].title) {
                        cells[k].title.style.color = 'red';
                    }
                }
            }
        }
    }

    componentDidMount() {
        // attach handlers
        this.reactCalendar.calendar.selectionEnd.addEventListener((sender, args) => this.handleSelectionEnd(sender, args));
        this.reactCalendar.calendar.headerClick.addEventListener((sender, args) => this.handleHeaderClick(sender, args));
        this.reactCalendar.calendar.calendarLoad.addEventListener((sender) => this.handleLoad(sender));
    }

    render() {
        return (

            <div className="App">

                <div className="container">
                    <div className="main">
                        <ReactCalendar {...this.calProps} ref={(ref) => this.reactCalendar = ref} />
                    </div>
                    <div className="sidebar">
                        <h1>About this sample</h1>
                        <p>This sample shows how to use different calendar views to achieve different levels of detail in a single Calendar object.
                            You can drill down to a detailed view of a single month, by clicking the corresponding month header, or switch to a Timetable view,
                            by selecting one or more date cells in either MonthRange or SingleMonth views.
                            To drill back up, click the Timeline header to switch to SingleMonth, or the month header to display the MonthRange view. </p>
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


export default Views;
