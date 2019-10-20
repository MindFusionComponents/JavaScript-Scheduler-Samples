import React, { Component } from 'react';
import jsplanner from "scheduler-library";


export class ReactCalendar extends Component {
    constructor(props) {
        super(props);
        jsplanner.Calendar.autoRepaint = false;

        this.calendar = new jsplanner.Calendar();
        this.calendar.copyFrom(this.props);

        if (this.props.totalDays)
        {
            var startDate = jsplanner.DateTime.getWeekFirstDate(this.calendar.date, this.calendar.formatInfo);
            this.calendar.endDate = jsplanner.DateTime.addDays(startDate, this.props.totalDays-1);
        }
        if (this.props.loadEvent)
            this.calendar.calendarLoad.addEventListener(this.props.loadEvent);
            
    }

    componentDidMount() {
        this.calendar.attach();
        this.calendar.visibleDateChanged.addEventListener((sender, args) => { this.handleDateChanged(sender, args); });
    }

    componentWillUpdate(nextProps, nextState)
    {
        this.calendar.copyFrom(nextState);
        if (nextState && nextState.totalDays)
        {
            var startDate = jsplanner.DateTime.getWeekFirstDate(this.calendar.date, this.calendar.formatInfo);
            this.calendar.endDate = jsplanner.DateTime.addDays(startDate, nextState.totalDays-1);
        }
        this.calendar.detach();
    }

    componentDidUpdate(prevProps, prevState) {
        this.calendar.attach();
    }

    componentWillUnmount(){
        this.calendar.detach();
    }

    handleDateChanged(sender, args) {
        var timetableDates = sender.timetableSettings.dates.clone();
        this.setState({ date: args.newDate, timetableSettings: {dates : timetableDates} });
    }

    render() {
        var element = this.calendar.draw();
        var html = { __html: element.outerHTML };
        return <div dangerouslySetInnerHTML={html} style={{ width: '100%', height: '100%' }} />;
    }
}