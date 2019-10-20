// <reference path="jsplanner.d.ts" />
var DualView;
(function (DualView) {
    var p = MindFusion.Scheduling;
    // create a new instance of the calendar 
    var calendar = new p.Calendar(document.getElementById("calendar1"));
    // set the calendar view to Timetable, which displays the allotment of items to distinct hours of a day
    calendar.currentView = p.CalendarView.Timetable;
    // set the orientation of the timetable so each day is represented by a row of cells
    calendar.timetableSettings.orientation = p.Orientation.Horizontal;
    // set the start time to 8:00 AM
    calendar.timetableSettings.startTime = 480;
    // set the end time to 18:00 PM
    calendar.timetableSettings.endTime = 1080;
    // set the number of days to scroll with when a navigation button is clicked
    calendar.timetableSettings.scrollStep = 7;
    // disable drawing of the header containing all-day items
    calendar.timetableSettings.showDayHeader = false;
    // add some dates to the timetable view
    var date = p.DateTime.getWeekFirstDate(calendar.date);
    calendar.timetableSettings.dates.clear();
    for (var i = 0; i < 7; i++) {
        calendar.timetableSettings.dates.add(p.DateTime.addDays(date, i).clone());
    }
    calendar.theme = "light";
    // add some contacts to the schedule.contacts collection.
    var resource = new p.Contact();
    resource.firstName = "Emmy";
    resource.lastName = "Noether";
    calendar.schedule.contacts.add(resource);
    // add the resource to the calendar.contacts collection to use it for filtering
    calendar.contacts.add(resource);
    resource = new p.Contact();
    resource.firstName = "Ernest";
    resource.lastName = "Henley";
    calendar.schedule.contacts.add(resource);
    resource = new p.Contact();
    resource.firstName = "Jeffrey";
    resource.lastName = "Goldstone";
    calendar.schedule.contacts.add(resource);
    resource = new p.Contact();
    resource.firstName = "Francesco";
    resource.lastName = "Iachello";
    calendar.schedule.contacts.add(resource);
    // filter the calendar by the contact added to the calendar.contacts collection
    calendar.groupType = p.GroupType.FilterByContacts;
    // render the calendar control
    calendar.render();
    // create a new instance of the calendar 
    var calendar2 = new p.Calendar(document.getElementById("calendar2"));
    // set the calendar view to WeekRange, which displays one week per row
    calendar2.currentView = p.CalendarView.WeekRange;
    // disable navigation buttons
    calendar2.weekRangeSettings.headerStyle = p.MainHeaderStyle.Title;
    // set the number of week rows visible at a time
    calendar2.weekRangeSettings.visibleRows = 5;
    //disable default forms for item creation and modification 
    calendar2.useForms = false;
    // set the calendar theme
    calendar2.theme = "light";
    // attach the first calendar's schedule to the second calendar
    calendar2.schedule = calendar.schedule;
    // render the second calendar control
    calendar2.render();
    // handle itemModified event to repaint the calendars when an item is modified interactively
    calendar.itemModified.addEventListener(repaint);
    calendar2.itemModified.addEventListener(repaint);
    var option;
    for (var i = 0; i < calendar.schedule.contacts.count(); i++) {
        resource = calendar.schedule.contacts.items()[i];
        option = document.createElement("option");
        option.innerHTML = resource.firstName[0] + "." + resource.lastName;
        option.value = i;
        document.getElementById("contacts").appendChild(option);
    }
    function repaint(sender) {
        // trigger full repaint on the calendar control not sending the event in order to recreate all of its item visuals
        if (sender == calendar)
            calendar2.repaint(true);
        else
            calendar.repaint(true);
    }
    DualView.repaint = repaint;
    function filter() {
        calendar.contacts.clear();
        var c = document.getElementById("contacts");
        var resource = calendar.schedule.contacts.items()[c.value];
        // add the contact by which to filter to the calendar.contacts collection
        calendar.contacts.add(resource);
    }
    DualView.filter = filter;
})(DualView || (DualView = {}));
//# sourceMappingURL=DualView.js.map