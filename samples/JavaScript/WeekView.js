var p = MindFusion.Scheduling;

// create a new instance of the calendar
calendar = new p.Calendar(document.getElementById("calendar"));
// set the view to WeekRange
calendar.currentView = p.CalendarView.WeekRange;

calendar.theme = "light";

// render the calendar control
calendar.render();


document.getElementById("viewStyle").value = calendar.weekRangeSettings.viewStyle;
document.getElementById("viewStyle").onchange = function () {
	calendar.weekRangeSettings.viewStyle = +document.getElementById("viewStyle").value;
	document.getElementById("viewStyle").value = calendar.weekRangeSettings.viewStyle;
}

document.getElementById("headerStyle").value = calendar.weekRangeSettings.headerStyle;
document.getElementById("headerStyle").onchange = function () {
	calendar.weekRangeSettings.headerStyle = +document.getElementById("headerStyle").value;
	document.getElementById("headerStyle").value = calendar.weekRangeSettings.headerStyle;
}

var startDate = p.DateTime.getWeekFirstDate(calendar.date, calendar.formatInfo);
document.getElementById("totalDays").value = p.DateTime.daysBetween(startDate, calendar.endDate) + 1;
document.getElementById("totalDays").onchange = function () {
	var totalDays = (+document.getElementById("totalDays").value - 1) || 31;
	calendar.endDate = p.DateTime.addDays(startDate, totalDays);
	document.getElementById("totalDays").value = p.DateTime.daysBetween(startDate, calendar.endDate) + 1;
}

document.getElementById("visibleRows").value = calendar.weekRangeSettings.visibleRows;
document.getElementById("visibleRows").onchange = function () {
	calendar.weekRangeSettings.visibleRows = +document.getElementById("visibleRows").value || 4;
	document.getElementById("visibleRows").value = calendar.weekRangeSettings.visibleRows;
}
