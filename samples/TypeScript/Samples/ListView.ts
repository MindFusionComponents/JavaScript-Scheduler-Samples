// <reference path="jsplanner.d.ts" />

namespace ListView
{
	import p = MindFusion.Scheduling;

	// create a new instance of the calendar 
	var calendar = new p.Calendar(<HTMLDivElement>document.getElementById("calendar"));

	// set the view to List
	calendar.currentView = p.CalendarView.List;

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

	let orientation = document.getElementById("orientation") as HTMLSelectElement;
	orientation.value = calendar.listSettings.orientation.toString();
	orientation.onchange = () =>
	{
		calendar.listSettings.orientation = +orientation.value;
		orientation.value = calendar.listSettings.orientation.toString();
	}

	let cellUnits = document.getElementById("cellUnits") as HTMLSelectElement;
	cellUnits.value = calendar.listSettings.cellUnits.toString();
	cellUnits.onchange = () =>
	{
		calendar.listSettings.cellUnits = +cellUnits.value;
		cellUnits.value = calendar.listSettings.cellUnits.toString();
	}

	let totalCells = document.getElementById("totalCells") as HTMLInputElement;
	totalCells.value = calendar.listSettings.numberOfCells.toString();
	totalCells.onchange = () =>
	{
		calendar.listSettings.numberOfCells = +totalCells.value || 14;
		totalCells.value = calendar.listSettings.numberOfCells.toString();
	}

	let visibleCells = document.getElementById("visibleCells") as HTMLInputElement;
	visibleCells.value = calendar.listSettings.visibleCells.toString();
	visibleCells.onchange = () =>
	{
		calendar.listSettings.visibleCells = +visibleCells.value || 7;
		visibleCells.value = calendar.listSettings.visibleCells.toString();
	}

	export function group(value)
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

	
}
