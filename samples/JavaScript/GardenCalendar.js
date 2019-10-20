/// <reference path="MindFusion.Scheduling-vsdoc.js" /> 

var p = MindFusion.Scheduling;

// create a new instance of the calendar
calendar = new p.Calendar(document.getElementById("calendar"));
// set the view to List
calendar.currentView = p.CalendarView.List;
calendar.useForms = false;
calendar.allowInplaceEdit = false;
calendar.theme = "pastel";
calendar.date = p.DateTime.fromDateParts(p.DateTime.today().year, 0);

calendar.listSettings.cellUnits = p.TimeUnit.Month;
calendar.listSettings.numberOfCells = calendar.listSettings.visibleCells = 12;
calendar.listSettings.headerStyle = p.MainHeaderStyle.Title;
calendar.listSettings.titleFormat = "MMMM";

calendar.itemSettings.size = 30;
calendar.itemSettings.tooltipFormat = "%h (%s[MMMM] - %e[MMMM])";

var resource;

// Add some resources to the schedule.resources collection.
resource = new p.Resource();
resource.name = "Tomatoes";
calendar.schedule.resources.add(resource);
calendar.resources.add(resource);

resource = new p.Resource();
resource.name = "Cucumbers";
calendar.schedule.resources.add(resource);
calendar.resources.add(resource);

resource = new p.Resource();
resource.name = "Bell Peppers";
calendar.schedule.resources.add(resource);
calendar.resources.add(resource);

resource = new p.Resource();
resource.name = "Eggplants";
calendar.schedule.resources.add(resource);
calendar.resources.add(resource);

resource = new p.Resource();
resource.name = "Beans";
calendar.schedule.resources.add(resource);
calendar.resources.add(resource);

resource = new p.Resource();
resource.name = "Potatoes";
calendar.schedule.resources.add(resource);
calendar.resources.add(resource);

resource = new p.Resource();
resource.name = "Carrots";
calendar.schedule.resources.add(resource);
calendar.resources.add(resource);

// Add some tasks to the schedule.tasks collection.
resource = new p.Task();
resource.name = "Sow";
calendar.schedule.tasks.add(resource);

resource = new p.Task();
resource.name = "Transplant";
calendar.schedule.tasks.add(resource);

resource = new p.Task();
resource.name = "Harvest";
calendar.schedule.tasks.add(resource);

// group the calendar
calendar.groupType = p.GroupType.GroupByResources;

calendar.calendarLoad.addEventListener(handleCalendarLoad);
calendar.selectionEnd.addEventListener(handleSelectionEnd);
calendar.itemClick.addEventListener(handleItemClick);
calendar.itemModified.addEventListener(handleItemModified)
calendar.scheduleChanged.addEventListener(handleScheduleChanged);

// render the calendar control
calendar.render();

var option;

for (var i = 0; i < calendar.schedule.tasks.count(); i++)
{
	resource = calendar.schedule.tasks.items()[i];
	option = document.createElement("option");
	option.innerHTML = resource.name;
	option.value = i;
	document.getElementById("tasks").appendChild(option);
}

refreshCrops();

function handleCalendarLoad(sender, args)
{
	for (var i = 0; i < calendar.cells.count(); i++)
	{
		var month = calendar.cells.items()[i].startTime.month;
		calendar.cells.items()[i].bgCell.classList.add("cellClass" + Math.floor(month / 3));
	}
}

function handleSelectionEnd(sender, args)
{
	// create a new item with the start and end time of the selection
	var item = new p.Item();
	item.startTime = args.startTime;
	item.endTime = args.endTime;
	item.resources.add(args.resource);

	var taskIndex = document.getElementById("tasks").value;
	item.priority = 3 - +taskIndex;
	item.task = calendar.schedule.tasks.items()[+taskIndex];
	item.subject = item.task.name;
	item.cssClass = "itemClass" + taskIndex;
	sender.schedule.items.add(item);
}

function handleItemClick(sender, args)
{
	if (args.rawEventArgs.target.className == "mfp-icons")
	{
		sender.schedule.items.remove(args.item);
	}
}

function handleItemModified(sender, args)
{
	if (args.action == p.ItemModifyAction.Drag)
	{
		var duration = p.DateTime.monthsBetween(args.oldItem.startTime, args.oldItem.endTime);
		args.item.endTime = args.item.startTime.clone().addMonths(duration);
	}
	if (args.item.endTime.valueOf() > calendar.itemsEndTime.valueOf())
		args.item.endTime = calendar.itemsEndTime.clone();
}

function handleScheduleChanged(sender, args)
{
	sender.groupType = (sender.schedule.resources.count() > 0) ? p.GroupType.GroupByResources : p.GroupType.None;
}

function addCrop()
{
	var cropName = document.getElementById("crop").value;
	if (cropName)
	{
		resource = new p.Resource();
		resource.name = cropName;
		calendar.schedule.resources.add(resource);
		calendar.resources.add(resource);

		refreshCrops();
	}

}

function removeCrop()
{
	var cropId = +document.getElementById("crops").value;

	calendar.schedule.resources.remove(calendar.schedule.resources.items()[cropId]);
	calendar.resources.remove(calendar.resources.items()[cropId]);

	refreshCrops();
}

function refreshCrops()
{
	var option;

	var i;
	for (i = document.getElementById("crops").options.length - 1; i >= 0; i--)
	{
		document.getElementById("crops").remove(i);
	}

	for (var i = 0; i < calendar.schedule.resources.count(); i++)
	{
		resource = calendar.schedule.resources.items()[i];
		option = document.createElement("option");
		option.innerHTML = resource.name;
		option.value = i;
		document.getElementById("crops").appendChild(option);
	}

}