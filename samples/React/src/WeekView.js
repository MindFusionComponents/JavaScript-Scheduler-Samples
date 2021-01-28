import React, { Component } from 'react';
import { Info, Foot } from './Info';
import { ReactCalendar } from './Calendar';
import p from 'scheduler-library';
import './themes/business.css';


class WeekView extends Component {
    constructor(props) {
        super(props);

        var startDate = p.DateTime.getWeekFirstDate(new p.DateTime(), { firstDayOfWeek: 0 });

        this.calProps = {
            theme: "business",
            currentView: p.CalendarView.WeekRange,
            weekRangeSettings:
            {
                headerStyle: p.MainHeaderStyle.Title,
                visibleRows: 4
            },
            totalDays: 14,
            date: startDate
        }

        this.calProps.endDate = this.calcEndDate(14);
    }

    calcEndDate(days) {
        return p.DateTime.addDays(this.calProps.date, days - 1);
    }

    onViewChanged(e) {
        this.reactCalendar.setState({ weekRangeSettings: { viewStyle: +e.target.value } });
    }

    onHeaderStyleChanged(e) {
        this.reactCalendar.setState({ weekRangeSettings: { headerStyle: +e.target.value } });
    }

    onTotalDaysChanged(e) {
        this.reactCalendar.setState({ endDate: this.calcEndDate(+e.target.value) });
    }

    onVisibleRowsChanged(e) {
        this.reactCalendar.setState({ weekRangeSettings: { visibleRows: +e.target.value } });
    }

    render() {
        return (

            <div className="App">

                <div className="header">

                    View style<select id="view" onChange={this.onViewChanged.bind(this)} defaultValue="0">
                        <option value="0">WeekPerRow</option>
                        <option value="1">SingleWeek</option>
                    </select>
                    Header style<select id="headerStyle" onChange={this.onHeaderStyleChanged.bind(this)} defaultValue="1">
                        <option value="0">None</option>
                        <option value="1">Title</option>
                    </select>
                    Total days<input id="totalDays" maxLength="2" size="2" defaultValue={this.calProps.totalDays} onBlur={this.onTotalDaysChanged.bind(this)} />
                    Visible rows<input id="visibleRows" maxLength="2" size="2" defaultValue={this.calProps.weekRangeSettings.visibleRows} onBlur={this.onVisibleRowsChanged.bind(this)} />
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
                        <Info />
                    </div>
                </div>
                <Foot />
            </div>
        );
    }
}


export default WeekView;
