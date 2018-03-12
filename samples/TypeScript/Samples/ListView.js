// <reference path="jsplanner.d.ts" />
var ListView;
(function (ListView) {
    var p = MindFusion.Scheduling;
    // create a new instance of the calendar 
    var calendar = new p.Calendar(document.getElementById("calendar"));
    // set the view to List
    calendar.currentView = p.CalendarView.List;
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
    var orientation = document.getElementById("orientation");
    orientation.value = calendar.listSettings.orientation.toString();
    orientation.onchange = function () {
        calendar.listSettings.orientation = +orientation.value;
        orientation.value = calendar.listSettings.orientation.toString();
    };
    var cellUnits = document.getElementById("cellUnits");
    cellUnits.value = calendar.listSettings.cellUnits.toString();
    cellUnits.onchange = function () {
        calendar.listSettings.cellUnits = +cellUnits.value;
        cellUnits.value = calendar.listSettings.cellUnits.toString();
    };
    var totalCells = document.getElementById("totalCells");
    totalCells.value = calendar.listSettings.numberOfCells.toString();
    totalCells.onchange = function () {
        calendar.listSettings.numberOfCells = +totalCells.value || 14;
        totalCells.value = calendar.listSettings.numberOfCells.toString();
    };
    var visibleCells = document.getElementById("visibleCells");
    visibleCells.value = calendar.listSettings.visibleCells.toString();
    visibleCells.onchange = function () {
        calendar.listSettings.visibleCells = +visibleCells.value || 7;
        visibleCells.value = calendar.listSettings.visibleCells.toString();
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
    ListView.group = group;
})(ListView || (ListView = {}));
//# sourceMappingURL=ListView.js.map