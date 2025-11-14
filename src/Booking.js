/// <reference path="MindFusion.Scheduling-vsdoc.js" />

var p = MindFusion.Scheduling;

// create a new instance of the calendar 
var calendar = new p.Calendar(document.getElementById("calendar"));
calendar.theme = "light";
calendar.useForms = false;
calendar.currentView = p.CalendarView.MonthRange;
calendar.monthSettings.dayOfWeekFormat = p.DayOfWeekFormat.SingleLetter;
calendar.monthSettings.weekHeaderStyle = p.VerticalHeaderStyle.None;
calendar.monthSettings.firstDayOfMonthFormat = calendar.monthSettings.generalFormat;
calendar.monthSettings.expandDayHeaders = true;
calendar.monthRangeSettings.headerStyle = p.MainHeaderStyle.Buttons;
calendar.monthRangeSettings.numberOfMonths = 2;
calendar.monthRangeSettings.visibleRows = 1;
calendar.itemSettings.showItems = false;

// Add some rooms to the schedule.locations collection.
for (var i = 1; i < 5; i++) {
	var resource = new p.Location();
	resource.name = "Room " + i.toString();
	calendar.schedule.locations.add(resource);
}

// filter the calendar to show items forthe first room
calendar.locations.add(calendar.schedule.locations.items()[0]);
calendar.groupType = p.GroupType.FilterByLocations;

// render the calendar control
calendar.render();

calendar.controlLoad.addEventListener(handleCalendarLoad);
calendar.scheduleChanged.addEventListener(handleCalendarLoad);

// handle the selectionEnd event to show the custom form for item creation
calendar.selectionEnd.addEventListener(handleSelectionEnd);

// handle the cueClick event to show the custom form for item editing
calendar.cueClick.addEventListener(handleCueClick);

var option;

for (var i = 0; i < calendar.schedule.locations.count(); i++) {
	resource = calendar.schedule.locations.items()[i];
	option = document.createElement("option");
	option.innerHTML = resource.name;
	option.value = i;
	document.getElementById("locations").appendChild(option);
}

function handleCalendarLoad(sender, args) {
	var items = sender.schedule.items.items();

	for (var i = 0; i < items.length; i++) {
		var cells = sender.getItemCells(items[i]);

		// style the calendar cells which contain items
		for (var k = 0; k < cells.length; k++) {
			if (cells[k].bgCell) {
				cells[k].bgCell.classList.add("cellClass" + items[i].tag);
			}
		}
	}
}

function handleSelectionEnd(sender, args) {
	if (!isAvailable(args.startTime, args.endTime)) {
		alert("The selected dates are already booked for this room.");
		return;
	}

	// create a new item with the start and end time of the selection
	var item = new p.Item();
	item.startTime = args.startTime;
	item.endTime = args.endTime;
	item.location = sender.locations.items()[0];
	item.tag = 0;

	// create and show the custom form
	var form = new AppForm(sender, item, "new");
	form.showForm();
}

function handleCueClick(sender, args) {
	var item = sender.schedule.getAllItems(args.cell.startTime, args.cell.endTime, sender.locations.items()[0]).first();

	// create and show the custom form
	var form = new AppForm(sender, item, "edit");
	form.showForm();
}

function isAvailable(startTime, endTime) {
	var items = calendar.schedule.getAllItems(startTime, endTime, calendar.locations.items()[0]);
	return items.count() == 0;
}


document.getElementById("locations").onchange = function (e) {
	var value = +e.target.value;

	calendar.locations.clear();
	resource = calendar.schedule.locations.items()[value];
	calendar.locations.add(resource);
}


