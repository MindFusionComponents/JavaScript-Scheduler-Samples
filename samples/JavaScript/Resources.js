var p = MindFusion.Scheduling;

// create a new instance of the calendar
var calendar = new p.Calendar(document.getElementById("calendar"));
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

// render the calendar control
calendar.render();

var option;

for (var i = 0; i < calendar.schedule.contacts.count(); i++)
{
	resource = calendar.schedule.contacts.items()[i];
	option = document.createElement("option");
	option.innerHTML = resource.firstName[0] + "." + resource.lastName;
	option.value = i;
	document.getElementById("contacts").appendChild(option);
}

for (var i = 0; i < calendar.schedule.locations.count(); i++)
{
	resource = calendar.schedule.locations.items()[i];
	option = document.createElement("option");
	option.innerHTML = resource.name;
	option.value = i;
	document.getElementById("locations").appendChild(option);
}

function changeView(value)
{
	if (value == -1)
	{
		this.calendar.currentView = p.CalendarView.List;
		this.calendar.listSettings.orientation = p.Orientation.Vertical;
	}
	else
	{
		this.calendar.currentView = value;
		this.calendar.listSettings.orientation = p.Orientation.Horizontal;
	}
}

function filter(value)
{
	calendar.contacts.clear();
	if (value == p.GroupType.FilterByContacts)
	{
		resource = calendar.schedule.contacts.items()[document.getElementById("contacts").value];
		// add the contact by which to filter to the calendar.contacts collection
		calendar.contacts.add(resource);
	}
	calendar.locations.clear();
	if (value == p.GroupType.FilterByLocations)
	{
		resource = calendar.schedule.locations.items()[document.getElementById("locations").value];
		// add the location by which to filter to the calendar.locations collection
		calendar.locations.add(resource);
	}
	calendar.groupType = value;
}

function group(value)
{
	calendar.contacts.clear();
	if (value == p.GroupType.GroupByContacts)
	{
		// add the contacts by which to group to the calendar.contacts collection
		calendar.contacts.addRange(calendar.schedule.contacts.items());
	}
	calendar.locations.clear();
	if (value == p.GroupType.GroupByLocations)
	{
		// add the locations by which to group to the calendar.locations collection
		calendar.locations.addRange(calendar.schedule.locations.items());
	}
	calendar.groupType = value;
}