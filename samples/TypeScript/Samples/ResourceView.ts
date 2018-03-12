// <reference path="jsplanner.d.ts" />

namespace ResourceView
{
	import p = MindFusion.Scheduling;

	// create a new instance of the calendar 
	var calendar = new p.Calendar(<HTMLDivElement>document.getElementById("calendar"));

	// set the view to ResourceView, which displays the distribution of resources over a period of time
	calendar.currentView = p.CalendarView.ResourceView;

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

	let timelines = document.getElementById("timelines") as HTMLSelectElement;
	timelines.value = calendar.resourceViewSettings.timelines.toString();
	timelines.onchange = () =>
	{
		calendar.resourceViewSettings.timelines = +timelines.value || 3;
		timelines.value = calendar.resourceViewSettings.timelines.toString();
	}

	let cells = document.getElementById("cells") as HTMLInputElement;
	cells.value = calendar.resourceViewSettings.visibleCells.toString();
	cells.onchange = () =>
	{
		calendar.resourceViewSettings.visibleCells = +cells.value || 14;
		cells.value = calendar.resourceViewSettings.visibleCells.toString();
	}

	let ttunit = document.getElementById("ttunit") as HTMLSelectElement;
	ttunit.value = calendar.resourceViewSettings.topTimelineSettings.unit.toString();
	ttunit.onchange = () =>
	{
		calendar.resourceViewSettings.topTimelineSettings.unit = +ttunit.value || p.TimeUnit.Year;
		ttunit.value = calendar.resourceViewSettings.topTimelineSettings.unit.toString();
	}

	let ttcount = document.getElementById("ttcount") as HTMLInputElement;
	ttcount.value = calendar.resourceViewSettings.topTimelineSettings.unitCount.toString();
	ttcount.onchange = () =>
	{
		calendar.resourceViewSettings.topTimelineSettings.unitCount = +ttcount.value || 1;
		ttcount.value = calendar.resourceViewSettings.topTimelineSettings.unitCount.toString();
	}

	let mtunit = document.getElementById("mtunit") as HTMLSelectElement;
	mtunit.value = calendar.resourceViewSettings.middleTimelineSettings.unit.toString();
	mtunit.onchange = () =>
	{
		calendar.resourceViewSettings.middleTimelineSettings.unit = +mtunit.value || p.TimeUnit.Month;
		mtunit.value = calendar.resourceViewSettings.middleTimelineSettings.unit.toString();
	}

	let mtcount = document.getElementById("mtcount") as HTMLInputElement;
	mtcount.value = calendar.resourceViewSettings.middleTimelineSettings.unitCount.toString();
	mtcount.onchange = () =>
	{
		calendar.resourceViewSettings.middleTimelineSettings.unitCount = +mtcount.value || 1;
		mtcount.value = calendar.resourceViewSettings.middleTimelineSettings.unitCount.toString();
	}

	let btunit = document.getElementById("btunit") as HTMLSelectElement;
	btunit.value = calendar.resourceViewSettings.bottomTimelineSettings.unit.toString();
	btunit.onchange = () =>
	{
		calendar.resourceViewSettings.bottomTimelineSettings.unit = +btunit.value || p.TimeUnit.Day;
		btunit.value = calendar.resourceViewSettings.bottomTimelineSettings.unit.toString();
	}

	let btcount = document.getElementById("btcount") as HTMLInputElement;
	btcount.value = calendar.resourceViewSettings.bottomTimelineSettings.unitCount.toString();
	btcount.onchange = () =>
	{
		calendar.resourceViewSettings.bottomTimelineSettings.unitCount = +btcount.value || 1;
		btcount.value = calendar.resourceViewSettings.bottomTimelineSettings.unitCount.toString();
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
