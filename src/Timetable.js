/// <reference path="MindFusion.Scheduling-vsdoc.js" /> 

var p = MindFusion.Scheduling;

// create a new instance of the calendar
calendar = new p.Calendar(document.getElementById("calendar"));

// set the view to Timetable, which displays the allotment of resources to distinct hours of a day
calendar.currentView = p.CalendarView.Timetable;

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

datePicker = new p.Calendar(document.getElementById("datePicker"));
datePicker.currentView = p.CalendarView.List;
datePicker.theme = "light";
datePicker.listSettings.visibleCells = datePicker.listSettings.numberOfCells = 30;
datePicker.listSettings.headerStyle = p.MainHeaderStyle.None;
datePicker.useForms = false;
datePicker.selectionEnd.addEventListener(handleSelectionEnd);
datePicker.render();

function handleSelectionEnd(sender, args) {
	var startDate = args.startTime;
	var endDate = args.endTime;

	// show the selected date range in the timetable
	calendar.timetableSettings.dates.clear();
	while (startDate < endDate) {
		calendar.timetableSettings.dates.add(startDate);
		startDate = p.DateTime.addDays(startDate, 1);
	}
}

document.getElementById("orientation").value = calendar.timetableSettings.orientation;
document.getElementById("orientation").onchange = function () {
	calendar.timetableSettings.orientation = +document.getElementById("orientation").value;
	document.getElementById("orientation").value = calendar.timetableSettings.orientation;
}

document.getElementById("cellSize").value = calendar.timetableSettings.cellSize;
document.getElementById("cellSize").onchange = function () {
	calendar.timetableSettings.cellSize = +document.getElementById("cellSize").value || 25;
	document.getElementById("cellSize").value = calendar.timetableSettings.cellSize;
}

document.getElementById("cellTime").value = calendar.timetableSettings.cellTime.minutes;
document.getElementById("cellTime").onchange = function () {
	calendar.timetableSettings.cellTime = p.TimeSpan.fromMinutes(+document.getElementById("cellTime").value || 30);
	document.getElementById("cellTime").value = calendar.timetableSettings.cellTime.minutes;
}

document.getElementById("reverseGrouping").checked = calendar.timetableSettings.reverseGrouping;
document.getElementById("reverseGrouping").onchange = function () {
	calendar.timetableSettings.reverseGrouping = +document.getElementById("reverseGrouping").checked;
	document.getElementById("reverseGrouping").checked = calendar.timetableSettings.reverseGrouping;
}


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