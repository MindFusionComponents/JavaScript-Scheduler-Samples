var p = MindFusion.Scheduling;

// create a new instance of the calendar
calendar = new p.Calendar(document.getElementById("calendar"));
// set the view to List
calendar.currentView = p.CalendarView.List;

calendar.theme = "standard";
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


document.getElementById("orientation").value = calendar.listSettings.orientation;
document.getElementById("orientation").onchange = function () {
	calendar.listSettings.orientation = +document.getElementById("orientation").value;
	document.getElementById("orientation").value = calendar.listSettings.orientation;
}

document.getElementById("cellUnits").value = calendar.listSettings.cellUnits;
document.getElementById("cellUnits").onchange = function () {
	calendar.listSettings.cellUnits = +document.getElementById("cellUnits").value;
	document.getElementById("cellUnits").value = calendar.listSettings.cellUnits;
}

document.getElementById("totalCells").value = calendar.listSettings.numberOfCells;
document.getElementById("totalCells").onchange = function () {
	calendar.listSettings.numberOfCells = +document.getElementById("totalCells").value || 14;
	document.getElementById("totalCells").value = calendar.listSettings.numberOfCells;
}

document.getElementById("visibleCells").value = calendar.listSettings.visibleCells;
document.getElementById("visibleCells").onchange = function () {
	calendar.listSettings.visibleCells = +document.getElementById("visibleCells").value || 7;
	document.getElementById("visibleCells").value = calendar.listSettings.visibleCells;
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