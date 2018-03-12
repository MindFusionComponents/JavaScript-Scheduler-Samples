// <reference path="jsplanner.d.ts" />
var MonthView;
(function (MonthView) {
    var p = MindFusion.Scheduling;
    // create a new instance of the calendar 
    var calendar = new p.Calendar(document.getElementById("calendar"));
    // set the view to SingleMonth
    calendar.currentView = p.CalendarView.SingleMonth;
    var settings = calendar.monthSettings;
    calendar.theme = "light";
    // render the calendar control
    calendar.render();
    document.getElementById("rangeSettings").style.display = "none";
    document.getElementById("singleSettings").style.display = "inline";
    var view = document.getElementById("view");
    view.value = calendar.currentView.toString();
    view.onchange = function () {
        calendar.currentView = +view.value;
        view.value = calendar.currentView.toString();
        settings = (calendar.currentView == p.CalendarView.MonthRange) ? calendar.monthRangeSettings : calendar.monthSettings;
        document.getElementById("rangeSettings").style.display = (calendar.currentView == p.CalendarView.MonthRange) ? "inline" : "none";
    };
    var headerStyle = document.getElementById("headerStyle");
    headerStyle.value = settings.headerStyle.toString();
    headerStyle.onchange = function () {
        settings.headerStyle = +headerStyle.value;
        headerStyle.value = settings.headerStyle.toString();
    };
    var numberOfMonths = document.getElementById("numberOfMonths");
    numberOfMonths.value = calendar.monthRangeSettings.numberOfMonths.toString();
    numberOfMonths.onchange = function () {
        calendar.monthRangeSettings.numberOfMonths = +numberOfMonths.value || 4;
        numberOfMonths.value = calendar.monthRangeSettings.numberOfMonths.toString();
    };
    var monthsPerRow = document.getElementById("monthsPerRow");
    monthsPerRow.value = calendar.monthRangeSettings.monthsPerRow.toString();
    monthsPerRow.onchange = function () {
        calendar.monthRangeSettings.monthsPerRow = +monthsPerRow.value || 2;
        monthsPerRow.value = calendar.monthRangeSettings.monthsPerRow.toString();
    };
    var visibleRows = document.getElementById("visibleRows");
    visibleRows.value = calendar.monthRangeSettings.visibleRows.toString();
    visibleRows.onchange = function () {
        calendar.monthRangeSettings.visibleRows = +visibleRows.value || 2;
        visibleRows.value = calendar.monthRangeSettings.visibleRows.toString();
    };
    // Single month
    var weekHeaderStyle = document.getElementById("weekHeaderStyle");
    weekHeaderStyle.checked = calendar.monthSettings.weekHeaderStyle == p.VerticalHeaderStyle.Left;
    weekHeaderStyle.onchange = function () {
        calendar.monthSettings.weekHeaderStyle = +weekHeaderStyle.checked;
        weekHeaderStyle.checked = calendar.monthSettings.weekHeaderStyle == p.VerticalHeaderStyle.Left;
    };
    var dayNamesHeaderStyle = document.getElementById("dayNamesHeaderStyle");
    dayNamesHeaderStyle.checked = calendar.monthSettings.dayNamesHeaderStyle == p.HorizontalHeaderStyle.Top;
    dayNamesHeaderStyle.onchange = function () {
        calendar.monthSettings.dayNamesHeaderStyle = +dayNamesHeaderStyle.checked;
        dayNamesHeaderStyle.checked = calendar.monthSettings.dayNamesHeaderStyle == p.HorizontalHeaderStyle.Top;
    };
    var showPaddingDays = document.getElementById("showPaddingDays");
    showPaddingDays.checked = calendar.monthSettings.showPaddingDays;
    showPaddingDays.onchange = function () {
        calendar.monthSettings.showPaddingDays = showPaddingDays.checked;
        showPaddingDays.checked = calendar.monthSettings.showPaddingDays;
    };
    var showPaddingItems = document.getElementById("showPaddingItems");
    showPaddingItems.checked = calendar.monthSettings.showPaddingItems;
    showPaddingItems.onchange = function () {
        calendar.monthSettings.showPaddingItems = showPaddingItems.checked;
        showPaddingItems.checked = calendar.monthSettings.showPaddingItems;
    };
})(MonthView || (MonthView = {}));
//# sourceMappingURL=MonthView.js.map