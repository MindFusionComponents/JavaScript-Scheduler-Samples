// <reference path="jsplanner.d.ts" />

namespace MonthView
{
	import p = MindFusion.Scheduling;

	// create a new instance of the calendar 
	var calendar = new p.Calendar(<HTMLDivElement>document.getElementById("calendar"));

	// set the view to SingleMonth
	calendar.currentView = p.CalendarView.SingleMonth;

	let settings: p.MonthSettings | p.MonthRangeSettings = calendar.monthSettings;
	calendar.theme = "light";

	// render the calendar control
	calendar.render();

	document.getElementById("rangeSettings").style.display = "none";
	document.getElementById("singleSettings").style.display = "inline";

	let view = document.getElementById("view") as HTMLSelectElement;
	view.value = calendar.currentView.toString();
	view.onchange = () =>
	{
		calendar.currentView = +view.value;
		view.value = calendar.currentView.toString();
		settings = (calendar.currentView == p.CalendarView.MonthRange) ? calendar.monthRangeSettings : calendar.monthSettings;
		document.getElementById("rangeSettings").style.display = (calendar.currentView == p.CalendarView.MonthRange) ? "inline" : "none";
	}

	let headerStyle = document.getElementById("headerStyle") as HTMLSelectElement;
	headerStyle.value = settings.headerStyle.toString();
	headerStyle.onchange = () =>
	{
		settings.headerStyle = +headerStyle.value;
		headerStyle.value = settings.headerStyle.toString();
	}

	let numberOfMonths = document.getElementById("numberOfMonths") as HTMLInputElement;
	numberOfMonths.value = calendar.monthRangeSettings.numberOfMonths.toString();
	numberOfMonths.onchange = () =>
	{
		calendar.monthRangeSettings.numberOfMonths = +numberOfMonths.value || 4;
		numberOfMonths.value = calendar.monthRangeSettings.numberOfMonths.toString();
	}

	let monthsPerRow = document.getElementById("monthsPerRow") as HTMLInputElement;
	monthsPerRow.value = calendar.monthRangeSettings.monthsPerRow.toString();
	monthsPerRow.onchange = () =>
	{
		calendar.monthRangeSettings.monthsPerRow = +monthsPerRow.value || 2;
		monthsPerRow.value = calendar.monthRangeSettings.monthsPerRow.toString();
	}

	let visibleRows = document.getElementById("visibleRows") as HTMLInputElement;
	visibleRows.value = calendar.monthRangeSettings.visibleRows.toString();
	visibleRows.onchange = () =>
	{
		calendar.monthRangeSettings.visibleRows = +visibleRows.value || 2;
		visibleRows.value = calendar.monthRangeSettings.visibleRows.toString();
	}

	// Single month
	let weekHeaderStyle = document.getElementById("weekHeaderStyle") as HTMLInputElement;
	weekHeaderStyle.checked = calendar.monthSettings.weekHeaderStyle == p.VerticalHeaderStyle.Left;
	weekHeaderStyle.onchange = () =>
	{
		calendar.monthSettings.weekHeaderStyle = +weekHeaderStyle.checked;
		weekHeaderStyle.checked = calendar.monthSettings.weekHeaderStyle == p.VerticalHeaderStyle.Left;
	}

	let dayNamesHeaderStyle = document.getElementById("dayNamesHeaderStyle") as HTMLInputElement;
	dayNamesHeaderStyle.checked = calendar.monthSettings.dayNamesHeaderStyle == p.HorizontalHeaderStyle.Top;
	dayNamesHeaderStyle.onchange = () =>
	{
		calendar.monthSettings.dayNamesHeaderStyle = +dayNamesHeaderStyle.checked;
		dayNamesHeaderStyle.checked = calendar.monthSettings.dayNamesHeaderStyle == p.HorizontalHeaderStyle.Top;
	}

	let showPaddingDays = document.getElementById("showPaddingDays") as HTMLInputElement;
	showPaddingDays.checked = calendar.monthSettings.showPaddingDays;
	showPaddingDays.onchange = () =>
	{
		calendar.monthSettings.showPaddingDays = showPaddingDays.checked;
		showPaddingDays.checked = calendar.monthSettings.showPaddingDays;
	}

	let showPaddingItems = document.getElementById("showPaddingItems") as HTMLInputElement;
	showPaddingItems.checked = calendar.monthSettings.showPaddingItems;
	showPaddingItems.onchange = () =>
	{
		calendar.monthSettings.showPaddingItems = showPaddingItems.checked;
		showPaddingItems.checked = calendar.monthSettings.showPaddingItems;
	}

	let expandDayHeaders = document.getElementById("expandDayHeaders") as HTMLInputElement;
	expandDayHeaders.checked = calendar.monthSettings.expandDayHeaders;
	expandDayHeaders.onchange = () =>
	{
		calendar.monthSettings.expandDayHeaders = expandDayHeaders.checked;
		expandDayHeaders.checked = calendar.monthSettings.expandDayHeaders;
	}

}
