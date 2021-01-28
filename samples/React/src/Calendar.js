import React, { Component } from 'react';
import jsplanner from "scheduler-library";


export class ReactCalendar extends Component {
    constructor(props) {
        super(props);
        jsplanner.Calendar.autoRepaint = false;

        this.element = React.createRef();

        this.calendar = new jsplanner.Calendar();
        this.state = { id: this.calendar._element.id };
        this.calendar.copyFrom(this.props);

        // add event listeners for handlers set in props
        for (var prop in this.props) {
            if (this.calendar[prop]) {
                if (this.calendar[prop].addEventListener) {
                    this.calendar[prop].addEventListener(this.props[prop]);
                }
            }
        }
    }

    componentDidMount() {
        this.calendar.draw(this.element.current);
        this.calendar.attach();
        this.calendar.visibleDateChanged.addEventListener((sender, args) => { this.handleDateChanged(sender, args); });
    }

    componentDidUpdate(prevProps, prevState) {
        this.calendar.copyFrom(this.state);
        this.calendar.render();
    }

    componentWillUnmount() {
        this.calendar.detach();
    }

    handleDateChanged(sender, args) {
        var timetableDates = sender.timetableSettings.dates.clone();
        this.setState({ date: args.newDate, timetableSettings: { dates: timetableDates } });
    }

    render() {
        return (
            <div ref={this.element} id={this.state.id} />
        );
    }
}