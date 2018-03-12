// <reference path="jsplanner.d.ts" />
var ResourceView;
(function (ResourceView) {
    var p = MindFusion.Scheduling;
    // create a new instance of the calendar 
    var calendar = new p.Calendar(document.getElementById("calendar"));
    // set the view to ResourceView, which displays the distribution of resources over a period of time
    calendar.currentView = p.CalendarView.ResourceView;
    calendar.theme = "light";
    calendar.contactNameFormat = "L";
    var resource;
    // Add some contacts to the schedule.contacts collection.
    resource = new p.Contact();
    resource.firstName = "Emmy";
    resource.lastName = "Noether";
    calendar.schedule.contacts.add(resource);
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
    // Add some locations to the schedule.locations collection.
    resource = new p.Location();
    resource.name = "Oxford";
    calendar.schedule.locations.add(resource);
    resource = new p.Location();
    resource.name = "Harvard";
    calendar.schedule.locations.add(resource);
    resource = new p.Location();
    resource.name = "Tokyo";
    calendar.schedule.locations.add(resource);
    resource = new p.Location();
    resource.name = "Paris";
    calendar.schedule.locations.add(resource);
    // group the calendar
    group(p.GroupType.GroupByContacts);
    // render the calendar control
    calendar.render();
    var timelines = document.getElementById("timelines");
    timelines.value = calendar.resourceViewSettings.timelines.toString();
    timelines.onchange = function () {
        calendar.resourceViewSettings.timelines = +timelines.value || 3;
        timelines.value = calendar.resourceViewSettings.timelines.toString();
    };
    var cells = document.getElementById("cells");
    cells.value = calendar.resourceViewSettings.visibleCells.toString();
    cells.onchange = function () {
        calendar.resourceViewSettings.visibleCells = +cells.value || 14;
        cells.value = calendar.resourceViewSettings.visibleCells.toString();
    };
    var ttunit = document.getElementById("ttunit");
    ttunit.value = calendar.resourceViewSettings.topTimelineSettings.unit.toString();
    ttunit.onchange = function () {
        calendar.resourceViewSettings.topTimelineSettings.unit = +ttunit.value || p.TimeUnit.Year;
        ttunit.value = calendar.resourceViewSettings.topTimelineSettings.unit.toString();
    };
    var ttcount = document.getElementById("ttcount");
    ttcount.value = calendar.resourceViewSettings.topTimelineSettings.unitCount.toString();
    ttcount.onchange = function () {
        calendar.resourceViewSettings.topTimelineSettings.unitCount = +ttcount.value || 1;
        ttcount.value = calendar.resourceViewSettings.topTimelineSettings.unitCount.toString();
    };
    var mtunit = document.getElementById("mtunit");
    mtunit.value = calendar.resourceViewSettings.middleTimelineSettings.unit.toString();
    mtunit.onchange = function () {
        calendar.resourceViewSettings.middleTimelineSettings.unit = +mtunit.value || p.TimeUnit.Month;
        mtunit.value = calendar.resourceViewSettings.middleTimelineSettings.unit.toString();
    };
    var mtcount = document.getElementById("mtcount");
    mtcount.value = calendar.resourceViewSettings.middleTimelineSettings.unitCount.toString();
    mtcount.onchange = function () {
        calendar.resourceViewSettings.middleTimelineSettings.unitCount = +mtcount.value || 1;
        mtcount.value = calendar.resourceViewSettings.middleTimelineSettings.unitCount.toString();
    };
    var btunit = document.getElementById("btunit");
    btunit.value = calendar.resourceViewSettings.bottomTimelineSettings.unit.toString();
    btunit.onchange = function () {
        calendar.resourceViewSettings.bottomTimelineSettings.unit = +btunit.value || p.TimeUnit.Day;
        btunit.value = calendar.resourceViewSettings.bottomTimelineSettings.unit.toString();
    };
    var btcount = document.getElementById("btcount");
    btcount.value = calendar.resourceViewSettings.bottomTimelineSettings.unitCount.toString();
    btcount.onchange = function () {
        calendar.resourceViewSettings.bottomTimelineSettings.unitCount = +btcount.value || 1;
        btcount.value = calendar.resourceViewSettings.bottomTimelineSettings.unitCount.toString();
    };
    function group(value) {
        calendar.contacts.clear();
        if (value == p.GroupType.GroupByContacts) {
            // add the contacts by which to group to the calendar.contacts collection
            calendar.contacts.addRange(calendar.schedule.contacts.items());
        }
        calendar.locations.clear();
        if (value == p.GroupType.GroupByLocations) {
            // add the locations by which to group to the calendar.locations collection
            calendar.locations.addRange(calendar.schedule.locations.items());
        }
        calendar.groupType = value;
    }
    ResourceView.group = group;
})(ResourceView || (ResourceView = {}));
//# sourceMappingURL=ResourceView.js.map