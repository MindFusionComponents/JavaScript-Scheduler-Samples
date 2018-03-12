// <reference path="jsplanner.d.ts" />

namespace WeekView
{
	import p = MindFusion.Scheduling;

	// create a new instance of the calendar 
	var calendar = new p.Calendar(<HTMLDivElement>document.getElementById("calendar"));

	// set the view to WeekRange
	calendar.currentView = p.CalendarView.WeekRange;

	calendar.theme = "light";

	// render the calendar control
	calendar.render();

	let viewStyle = document.getElementById("viewStyle") as HTMLSelectElement;
	viewStyle.value = calendar.weekRangeSettings.viewStyle.toString();
	viewStyle.onchange = () =>
	{
		calendar.weekRangeSettings.viewStyle = +viewStyle.value;
		viewStyle.value = calendar.weekRangeSettings.viewStyle.toString();
	}

	let headerStyle = document.getElementById("headerStyle") as HTMLSelectElement;
	headerStyle.onchange = () =>
	{
		calendar.weekRangeSettings.headerStyle = +headerStyle.value;
		headerStyle.value = calendar.weekRangeSettings.headerStyle.toString();
	}

	var startDate = p.DateTime.getWeekFirstDate(calendar.date, calendar.formatInfo);
	let totalDays = document.getElementById("totalDays") as HTMLInputElement;
	totalDays.value = (p.DateTime.daysBetween(startDate, calendar.endDate) + 1).toString();
	totalDays.onchange = () =>
	{
		var days = (+totalDays.value - 1) || 13;
		calendar.endDate = p.DateTime.addDays(startDate, days);
		totalDays.value = (p.DateTime.daysBetween(startDate, calendar.endDate) + 1).toString();
	}

	let visibleRows = document.getElementById("visibleRows") as HTMLInputElement;
	visibleRows.value = calendar.weekRangeSettings.visibleRows.toString();;
	visibleRows.onchange = () =>
	{
		calendar.weekRangeSettings.visibleRows = +visibleRows.value || 4;
		visibleRows.value = calendar.weekRangeSettings.visibleRows.toString();;
	}

}
