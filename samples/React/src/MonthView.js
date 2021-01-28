import React, { Component } from 'react';
import { Info, Foot } from './Info';
import { ReactCalendar } from './Calendar';
import p from 'scheduler-library';
import './themes/blue.css';

class MonthView extends Component {
    constructor(props) {
        super(props);

        this.calProps = {
            theme: "blue",
            currentView: p.CalendarView.SingleMonth,
            monthRangeSettings:
            {
                numberOfMonths: 4,
                monthsPerRow: 2,
                visibleRows: 2
            },
            monthSettings: {
                weekHeaderStyle: p.VerticalHeaderStyle.Left,
                dayNamesHeaderStyle: p.HorizontalHeaderStyle.Top,
                showPaddingDays: true,
                showPaddingItems: true
            }
        }
        this.state = {
            currentView: 1,
        };
    }

    onViewChanged(e) {
        this.reactCalendar.setState({ currentView: +e.target.value });
        this.setState({ currentView: +e.target.value });
    }

    onHeaderStyleChanged(e) {
        this.reactCalendar.setState({ monthSettings: { headerStyle: +e.target.value }, monthRangeSettings: { headerStyle: +e.target.value } });
    }

    onNumberOfMonthsChanged(e) {
        this.reactCalendar.setState({ monthRangeSettings: { numberOfMonths: +e.target.value } });
    }

    onMonthsPerRowChanged(e) {
        this.reactCalendar.setState({ monthRangeSettings: { monthsPerRow: +e.target.value } });
    }

    onVisibleRowsChanged(e) {
        this.reactCalendar.setState({ monthRangeSettings: { visibleRows: +e.target.value } });
    }

    onWeekHeaderStyleChanged(e) {
        this.reactCalendar.setState({ monthSettings: { weekHeaderStyle: +e.target.checked } });
    }

    onDayNamesHeaderStyleChanged(e) {
        this.reactCalendar.setState({ monthSettings: { dayNamesHeaderStyle: +e.target.checked } });
    }

    onShowPaddingDaysChanged(e) {
        this.reactCalendar.setState({ monthSettings: { showPaddingDays: +e.target.checked } });
    }

    onShowPaddingItemsChanged(e) {
        this.reactCalendar.setState({ monthSettings: { showPaddingItems: +e.target.checked } });
    }

    onExpandDayHeadersChanged(e) {
        this.reactCalendar.setState({ monthSettings: { expandDayHeaders: +e.target.checked } });
    }
    componentDidMount() {

    }

    render() {
        return (

            <div className="App">

                <div className="header">

                    View<select id="view" onChange={this.onViewChanged.bind(this)} defaultValue="1">
                        <option value="0">MonthRange</option>
                        <option value="1">SingleMonth</option>
                    </select>
                    Header style<select id="headerStyle" onChange={this.onHeaderStyleChanged.bind(this)} defaultValue="3">
                        <option value="0">None</option>
                        <option value="1">Title only</option>
                        <option value="3">Title and buttons</option>
                    </select>
                    <div id="rangeSettings" style={this.state.currentView === 0 ? { display: 'inline' } : { display: 'none' }}>
                        Total months<input id="numberOfMonths" maxLength="2" size="2" defaultValue={this.calProps.monthRangeSettings.numberOfMonths} onBlur={this.onNumberOfMonthsChanged.bind(this)} />
                        Months per row<input id="monthsPerRow" maxLength="2" size="2" defaultValue={this.calProps.monthRangeSettings.monthsPerRow} onBlur={this.onMonthsPerRowChanged.bind(this)} />
                        Visible rows<input id="visibleRows" maxLength="2" size="2" defaultValue={this.calProps.monthRangeSettings.visibleRows} onBlur={this.onVisibleRowsChanged.bind(this)} />
                    </div>
                    <div id="singleSettings" style={{ display: "inline" }}>
                        Week header
					<input type="checkbox" id="weekHeaderStyle" defaultChecked={this.calProps.monthSettings.weekHeaderStyle} onChange={this.onWeekHeaderStyleChanged.bind(this)} />
                        Day names header
					<input type="checkbox" id="dayNamesHeaderStyle" defaultChecked={this.calProps.monthSettings.dayNamesHeaderStyle} onChange={this.onDayNamesHeaderStyleChanged.bind(this)} />
                        Show padding days
					<input type="checkbox" id="showPaddingDays" defaultChecked={this.calProps.monthSettings.showPaddingDays} onChange={this.onShowPaddingDaysChanged.bind(this)} />
                        Show padding items
					<input type="checkbox" id="showPaddingItems" defaultChecked={this.calProps.monthSettings.showPaddingItems} onChange={this.onShowPaddingItemsChanged.bind(this)} />
                        Expand day headers
					<input type="checkbox" id="expandDayHeaders" defaultChecked={this.calProps.monthSettings.expandDayHeaders} onChange={this.onExpandDayHeadersChanged.bind(this)} />
                    </div>
                </div>

                <div className="container">
                    <div className="main">
                        <ReactCalendar {...this.calProps} ref={(ref) => this.reactCalendar = ref} />
                    </div>
                    <div className="sidebar">
                        <h1>About this sample</h1>
                        <p>This sample shows the capabilities of the Month views.</p>
                        <p>The SingleMonth view displays one month at a time and lets the user scroll to the
                        previous or next month or the previous or next year by using the navigation buttons
                        optionally displayed in the view header. The month is represented by a grid of day cells,
                        which display the day number and the schedule events set to occur on the specific
                        date.</p>
                        <p>The MonthRange view displays an arbitrary long sequence of months arranged in rows
                        and columns. The months in the view can be scrolled back or forth in time by using
                        the navigation buttons in the view header.</p>
                        <p>Use the MonthSettings and MonthRangeSettings properties of the Calendar class to
				set the appearance of these views.</p>
                        <Info />
                    </div>
                </div>
                <Foot />
            </div>
        );
    }
}


export default MonthView;
