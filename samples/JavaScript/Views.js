/// <reference path="MindFusion.Scheduling-vsdoc.js" /> 

var p = MindFusion.Scheduling;

// create a new instance of the calendar 
this.calendar = new p.Calendar(document.getElementById("calendar"));

// set the view to MonthRange, which displays several months in a grid
calendar.currentView = p.CalendarView.MonthRange;

calendar.theme = "blue";

// stop navigation buttons from rendering in Month and Timetable views
calendar.monthSettings.headerStyle = p.MainHeaderStyle.Title;
calendar.timetableSettings.headerStyle = p.MainHeaderStyle.Title;

calendar.monthSettings.expandDayHeaders = true;
calendar.itemSettings.showCues = false;

// attach handlers
calendar.selectionEnd.addEventListener(handleSelectionEnd);
calendar.headerClick.addEventListener(handleHeaderClick);
calendar.calendarLoad.addEventListener(handleLoad);

// render the calendar control
calendar.render();

function handleSelectionEnd(sender, args)
{
	// cancel the default behavior if the current view is MonthRange or SingleMonth.
	if (sender.currentView < 2)
	{
		args.cancel = true;

		var startDate = args.startTime;
		var endDate = args.endTime;

		// show the selected date range in the timetable
		sender.timetableSettings.dates.clear();
		while (startDate < endDate)
		{
			sender.timetableSettings.dates.add(startDate);
			startDate = p.DateTime.addDays(startDate, 1);
		}

		sender.currentView = p.CalendarView.Timetable;
		sender.itemSettings.showItems = true;
	}
}

function handleHeaderClick(sender, args)
{
	if (sender.currentView == p.CalendarView.SingleMonth)
	{
		sender.currentView = p.CalendarView.MonthRange;
		sender.itemSettings.showItems = false;
	}
	else if (sender.currentView == p.CalendarView.Timetable)
	{
		sender.date = sender.timetableSettings.dates.items()[0];
		sender.currentView = p.CalendarView.SingleMonth;
		sender.itemSettings.showItems = false;
	}
}

function handleLoad(sender)
{
	if (sender.currentView < 2)
	{
		var items = sender.schedule.items.items();

		for (var i = 0; i < items.length; i++)
		{
			var start = items[i].startTime;
			var end = items[i].endTime;

			var cells = sender.getTimeCells(start, end, true);

			// style the headers of the calendar cells which contain items
			for (var k = 0; k < cells.length; k++)
			{
				if (cells[k].title)
				{
					cells[k].title.style.color = 'red';
				}
			}
		}
	}
}