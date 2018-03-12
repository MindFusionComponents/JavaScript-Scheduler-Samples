// <reference path="jsplanner.d.ts" />
var WeekView;
(function (WeekView) {
    var p = MindFusion.Scheduling;
    // create a new instance of the calendar 
    var calendar = new p.Calendar(document.getElementById("calendar"));
    // set the view to WeekRange
    calendar.currentView = p.CalendarView.WeekRange;
    calendar.theme = "light";
    // render the calendar control
    calendar.render();
    var viewStyle = document.getElementById("viewStyle");
    viewStyle.value = calendar.weekRangeSettings.viewStyle.toString();
    viewStyle.onchange = function () {
        calendar.weekRangeSettings.viewStyle = +viewStyle.value;
        viewStyle.value = calendar.weekRangeSettings.viewStyle.toString();
    };
    var headerStyle = document.getElementById("headerStyle");
    headerStyle.onchange = function () {
        calendar.weekRangeSettings.headerStyle = +headerStyle.value;
        headerStyle.value = calendar.weekRangeSettings.headerStyle.toString();
    };
    var startDate = p.DateTime.getWeekFirstDate(calendar.date, calendar.formatInfo);
    var totalDays = document.getElementById("totalDays");
    totalDays.value = (p.DateTime.daysBetween(startDate, calendar.endDate) + 1).toString();
    totalDays.onchange = function () {
        var days = (+totalDays.value - 1) || 13;
        calendar.endDate = p.DateTime.addDays(startDate, days);
        totalDays.value = (p.DateTime.daysBetween(startDate, calendar.endDate) + 1).toString();
    };
    var visibleRows = document.getElementById("visibleRows");
    visibleRows.value = calendar.weekRangeSettings.visibleRows.toString();
    ;
    visibleRows.onchange = function () {
        calendar.weekRangeSettings.visibleRows = +visibleRows.value || 4;
        visibleRows.value = calendar.weekRangeSettings.visibleRows.toString();
        ;
    };
})(WeekView || (WeekView = {}));
//# sourceMappingURL=WeekView.js.map