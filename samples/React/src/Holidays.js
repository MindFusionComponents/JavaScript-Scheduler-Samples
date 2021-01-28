import React, { Component } from 'react';
import { Info, Foot } from './Info';
import { ReactCalendar } from './Calendar';
import p from 'scheduler-library';
import './CustomTheme.css';
import './Holidays.css';
import { CustomForm } from './CustomForm';

class Holidays extends Component {
    constructor(props) {
        super(props);

        this.calProps = {
            theme: "custom",
            currentView: p.CalendarView.SingleMonth,
            useForms: false,
            itemSettings: { size: 22 },
            itemTooltipFormat: "%s[d MMMM] - %h",
            monthSettings: { weekHeaderStyle: p.VerticalHeaderStyle.None }
        }
    }

    componentDidMount() {
        this.reactCalendar.calendar.visibleDateChanged.addEventListener(() => { this.getData(); });
        this.reactCalendar.calendar.itemDoubleClick.addEventListener((sender, args) => { this.handleItemDoubleClick(sender, args); });
        this.reactCalendar.calendar.selectionEnd.addEventListener((sender, args) => { this.handleSelectionEnd(sender, args); });

        this.getData();
    }

    getData() {
        var url = 'http://calapi.inadiutorium.cz/api/v0/en/calendars/default/' + this.reactCalendar.calendar.date.year + '/' + (+this.reactCalendar.calendar.date.month + 1);

        fetch(url)
            .then(response => response.json())
            .then((data) => {
                this.loadCalendar(data)
            })
            .catch(err => { throw err });
    }

    loadCalendar(data) {
        var items = new p.ObservableCollection();
        var locations = new p.ObservableCollection();

        // traverse the json object returned by the api and create corresponding items in the calendar schedule
        for (var i = 0; i < data.length; i++) {
            var date = p.DateTime.fromDateString(data[i].date);
            date = p.DateTime.fromDateParts(date.year, date.month, date.day, 0, 0, 0);

            var celebrations = data[i].celebrations;

            for (var k = 0; k < celebrations.length; k++) {
                var item = new p.Item();

                item.subject = celebrations[k].title;

                item.startTime = date;
                item.endTime = p.DateTime.addDays(date.clone(), 1);
                item.allDayEvent = true;

                // lock the item to disable interactive drag and resize
                item.locked = true;

                item.cssClass = celebrations[k].colour;

                var location = locations.items().find(l => l.name === celebrations[k].rank);

                // create a new location object and add it to the schedule's location collection
                if (!location) {
                    location = new p.Location();
                    location.name = celebrations[k].rank;
                    locations.add(location);
                }

                item.location = location;
                items.add(item);
            }
        }

        this.reactCalendar.setState({ schedule: { items: items, locations: locations } });
    }

    handleItemDoubleClick(sender, args) {
        // create and show the custom form
        var form = new CustomForm(sender, args.item, "edit");
        form.showForm();
    }

    handleSelectionEnd(sender, args) {
        // create a new item with the start and end time of the selection
        var item = new p.Item();
        item.startTime = args.startTime;
        item.endTime = args.endTime;
        item.cssClass = "white";

        // create and show the custom form
        var form = new CustomForm(sender, item, "new");
        form.showForm();
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
                        <p>In this sample schedule data is fetched from a public api, which exposes Roman Catholic liturgical calendar celebrations for a specified month.
                It shows how to set-up and use a custom form to create and edit schedule items. The calendar is styled by a custom user-defined theme. </p>
                        <Info />
                    </div>
                </div>
                <Foot />
            </div>
        );
    }
}


export default Holidays;
