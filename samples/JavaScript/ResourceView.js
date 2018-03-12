var p = MindFusion.Scheduling;

// create a new instance of the calendar
calendar = new p.Calendar(document.getElementById("calendar"));
// set the view to ResourceView, which displays the distribution of resources over a period of time
calendar.currentView = p.CalendarView.ResourceView;

calendar.theme = "business";
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

document.getElementById("timelines").value = calendar.resourceViewSettings.timelines;
document.getElementById("timelines").onchange = function () {
	calendar.resourceViewSettings.timelines = +document.getElementById("timelines").value || 3;
	document.getElementById("timelines").value = calendar.resourceViewSettings.timelines;
}

document.getElementById("cells").value = calendar.resourceViewSettings.visibleCells;
document.getElementById("cells").onchange = function () {
	calendar.resourceViewSettings.visibleCells = +document.getElementById("cells").value || 14;
	document.getElementById("cells").value = calendar.resourceViewSettings.visibleCells;
}

document.getElementById("ttunit").value = calendar.resourceViewSettings.topTimelineSettings.unit;
document.getElementById("ttunit").onchange = function () {
	calendar.resourceViewSettings.topTimelineSettings.unit = +document.getElementById("ttunit").value || p.TimeUnit.Year;
	document.getElementById("ttunit").value = calendar.resourceViewSettings.topTimelineSettings.unit;
}

document.getElementById("ttcount").value = calendar.resourceViewSettings.topTimelineSettings.unitCount;
document.getElementById("ttcount").onchange = function () {
	calendar.resourceViewSettings.topTimelineSettings.unitCount = +document.getElementById("ttcount").value || 1;
	document.getElementById("ttcount").value = calendar.resourceViewSettings.topTimelineSettings.unitCount;
}

document.getElementById("mtunit").value = calendar.resourceViewSettings.middleTimelineSettings.unit;
document.getElementById("mtunit").onchange = function () {
	calendar.resourceViewSettings.middleTimelineSettings.unit = +document.getElementById("mtunit").value || p.TimeUnit.Month;
	document.getElementById("mtunit").value = calendar.resourceViewSettings.middleTimelineSettings.unit;
}

document.getElementById("mtcount").value = calendar.resourceViewSettings.middleTimelineSettings.unitCount;
document.getElementById("mtcount").onchange = function () {
	calendar.resourceViewSettings.middleTimelineSettings.unitCount = +document.getElementById("mtcount").value || 1;
	document.getElementById("mtcount").value = calendar.resourceViewSettings.middleTimelineSettings.unitCount;
}

document.getElementById("btunit").value = calendar.resourceViewSettings.bottomTimelineSettings.unit;
document.getElementById("btunit").onchange = function () {
	calendar.resourceViewSettings.bottomTimelineSettings.unit = +document.getElementById("btunit").value || p.TimeUnit.Day;
	document.getElementById("btunit").value = calendar.resourceViewSettings.bottomTimelineSettings.unit;
}

document.getElementById("btcount").value = calendar.resourceViewSettings.bottomTimelineSettings.unitCount;
document.getElementById("btcount").onchange = function () {
	calendar.resourceViewSettings.bottomTimelineSettings.unitCount = +document.getElementById("btcount").value || 1;
	document.getElementById("btcount").value = calendar.resourceViewSettings.bottomTimelineSettings.unitCount;
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