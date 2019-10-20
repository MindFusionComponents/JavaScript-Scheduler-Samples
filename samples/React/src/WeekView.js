import React, { Component } from 'react';
import { ReactCalendar } from './Calendar';
import p from 'scheduler-library';
import './themes/business.css';


class WeekView extends Component {
    constructor(props) {
        super(props);

        this.calProps = {
            theme: "business",
            currentView: p.CalendarView.WeekRange,
            weekRangeSettings:
                {
                    headerStyle: p.MainHeaderStyle.Title,
                    visibleRows: 4
                },
            totalDays: 14
        }
    }

    onViewChanged(e) {
        this.reactCalendar.setState({ weekRangeSettings: { viewStyle: +e.target.value }});
    }

    onHeaderStyleChanged(e) {
        this.reactCalendar.setState({ weekRangeSettings: { headerStyle: +e.target.value } });
    }

    onTotalDaysChanged(e) {
        this.reactCalendar.setState({ totalDays: +e.target.value });
    }

    onVisibleRowsChanged(e) {
        this.reactCalendar.setState({ weekRangeSettings: { visibleRows: +e.target.value } });
    }

    render() {
        return (

            <div className="App">

                <div className="header">

                    View style&nbsp;<select id="view" onChange={this.onViewChanged.bind(this)} defaultValue="0">
                        <option value="0">WeekPerRow</option>
                        <option value="1">SingleWeek</option>
                    </select>
                    Header style&nbsp;<select id="headerStyle" onChange={this.onHeaderStyleChanged.bind(this)} defaultValue="1">
                        <option value="0">None</option>
                        <option value="1">Title</option>
                    </select>
                    Total days&nbsp;<input id="totalDays" maxLength="2" size="2" defaultValue={this.calProps.totalDays} onBlur={this.onTotalDaysChanged.bind(this)} />
                    Visible rows&nbsp;<input id="visibleRows" maxLength="2" size="2" defaultValue={this.calProps.weekRangeSettings.visibleRows} onBlur={this.onVisibleRowsChanged.bind(this)} />
                </div>

                <div className="container">
                    <div className="main">
                        <ReactCalendar {...this.calProps} ref={(ref) => this.reactCalendar = ref} />
                    </div>
                    <div className="sidebar">
                        <h1>About this sample</h1>
                        <p>This sample shows the capabilities of the WeekRange view.</p>
                        <p>The WeekRange view displays a range of weeks. It supports two different layouts,
                        specified in the weekRangeSettings.viewStyle property of the Calendar class. WeekPerRow
                        is the default view, where each week occupies a whole row whose cells represent
                        days. SingleWeek view provides a more detailed look, where the days of the week
                        are divided into two columns and four rows.</p>
                        <p>Use the WeekRangeSettings property of the Calendar class to
				set the appearance of the week view.</p>
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


export default WeekView;
