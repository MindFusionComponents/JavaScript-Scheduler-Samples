var p = MindFusion.Scheduling;

// create a new instance of the calendar
calendar = new p.Calendar(document.getElementById("calendar"));
// set the view to SingleMonth
calendar.currentView = p.CalendarView.SingleMonth;
settings = calendar.monthSettings;
calendar.theme = "light";

// render the calendar control
calendar.render();

document.getElementById("rangeSettings").style.display = "none";
document.getElementById("singleSettings").style.display = "inline";

document.getElementById("view").value = calendar.currentView;
document.getElementById("view").onchange = function () {
	calendar.currentView = +document.getElementById("view").value;
	document.getElementById("view").value = calendar.currentView;
	settings = (calendar.currentView == p.CalendarView.MonthRange) ? calendar.monthRangeSettings : calendar.monthSettings;
	document.getElementById("rangeSettings").style.display = (calendar.currentView == p.CalendarView.MonthRange) ? "inline" : "none";
}

document.getElementById("headerStyle").value = settings.headerStyle;
document.getElementById("headerStyle").onchange = function () {
	settings.headerStyle = +document.getElementById("headerStyle").value;
	document.getElementById("headerStyle").value = settings.headerStyle;
}

document.getElementById("numberOfMonths").value = calendar.monthRangeSettings.numberOfMonths;
document.getElementById("numberOfMonths").onchange = function () {
	calendar.monthRangeSettings.numberOfMonths = +document.getElementById("numberOfMonths").value || 4;
	document.getElementById("numberOfMonths").value = calendar.monthRangeSettings.numberOfMonths;
}

document.getElementById("monthsPerRow").value = calendar.monthRangeSettings.monthsPerRow;
document.getElementById("monthsPerRow").onchange = function () {
	calendar.monthRangeSettings.monthsPerRow = +document.getElementById("monthsPerRow").value || 2;
	document.getElementById("monthsPerRow").value = calendar.monthRangeSettings.monthsPerRow;
}

document.getElementById("visibleRows").value = calendar.monthRangeSettings.visibleRows;
document.getElementById("visibleRows").onchange = function () {
	calendar.monthRangeSettings.visibleRows = +document.getElementById("visibleRows").value || 2;
	document.getElementById("visibleRows").value = calendar.monthRangeSettings.visibleRows;
}

// Single month
document.getElementById("weekHeaderStyle").checked = calendar.monthSettings.weekHeaderStyle;
document.getElementById("weekHeaderStyle").onchange = function () {
	calendar.monthSettings.weekHeaderStyle = +document.getElementById("weekHeaderStyle").checked;
	document.getElementById("weekHeaderStyle").checked = calendar.monthSettings.weekHeaderStyle;
}

document.getElementById("dayNamesHeaderStyle").checked = calendar.monthSettings.dayNamesHeaderStyle;
document.getElementById("dayNamesHeaderStyle").onchange = function () {
	calendar.monthSettings.dayNamesHeaderStyle = +document.getElementById("dayNamesHeaderStyle").checked;
	document.getElementById("dayNamesHeaderStyle").checked = calendar.monthSettings.dayNamesHeaderStyle;
}

document.getElementById("showPaddingDays").checked = calendar.monthSettings.showPaddingDays;
document.getElementById("showPaddingDays").onchange = function () {
	calendar.monthSettings.showPaddingDays = document.getElementById("showPaddingDays").checked;
	document.getElementById("showPaddingDays").checked = calendar.monthSettings.showPaddingDays;
}

document.getElementById("showPaddingItems").checked = calendar.monthSettings.showPaddingItems;
document.getElementById("showPaddingItems").onchange = function () {
	calendar.monthSettings.showPaddingItems = document.getElementById("showPaddingItems").checked;
	document.getElementById("showPaddingItems").checked = calendar.monthSettings.showPaddingItems;
}
