/// <reference path="MindFusion.Scheduling-vsdoc.js" /> 

var p = MindFusion.Scheduling;

// create a new instance of the calendar 
var calendar = new p.Calendar(document.getElementById("calendar"));

// set the calendar view to SingleMonth, which displays one month at a time
calendar.currentView = p.CalendarView.SingleMonth;

// set the calendar theme.
calendar.theme = "light";

// add some dates to the timetable view
calendar.timetableSettings.dates.add(p.DateTime.today());
calendar.timetableSettings.dates.add(p.DateTime.today().addDays(1));
calendar.timetableSettings.dates.add(p.DateTime.today().addDays(2));

// specify formats for item titles and tooltips
calendar.itemSettings.titleFormat = "%s[hh:mm tt] %h";
calendar.itemSettings.tooltipFormat = "%h %d";

// handle the itemReminderTriggered to show an alert when an item's reminder is up
calendar.itemReminderTriggered.addEventListener(function (sender, args) { alert(args.item.reminder.message); });

calendar.itemModifying.addEventListener(handleItemModifying);
calendar.itemModified.addEventListener(handleItemModified);

calendar.controlLoad.addEventListener(handleCalendarLoad);

function handleCalendarLoad(sender, args) {
	var start = p.DateTime.today();
	var end = start.clone().addDays(1);
	var cells = sender.getTimeCells(start, end, true);
	for (var i = 0; i < cells.length; i++) {
		cells[i].bgCell.style.backgroundColor = "#ffeecc";
	}
}

var resource;

// add some contacts to the schedule.contacts collection
resource = new p.Contact();
resource.firstName = "Emmy";
resource.lastName = "Noether";
calendar.schedule.contacts.add(resource);

resource = new p.Contact();
resource.firstName = "Ernest";
resource.lastName = "Henley";
calendar.schedule.contacts.add(resource);

// add some locations to the schedule.locations collection
resource = new p.Location();
resource.name = "Oxford";
calendar.schedule.locations.add(resource);

resource = new p.Location();
resource.name = "Harvard";
calendar.schedule.locations.add(resource);

// render the calendar control
calendar.render();

var date = p.DateTime.today();
var subjects = ["Solve Fermi paradox", "Stretch", "Find size of universe", "Gaze into space", "Google adorable baby animal photos"];
var item;

// add some items to the schedule items collection
for (var i = 0; i < 15; i++) {
	item = new p.Item();
	item.subject = subjects[Math.floor(Math.random() * 4)];
	item.startTime = date.clone().addHours((Math.floor((Math.random() * 250) + 1) * (Math.random() * 2 == 1 ? 1 : -1)));
	item.endTime = item.startTime.clone().addHours(Math.floor(Math.random() * 2 + 1));
	// add a custom css class to some items
	if (i % 2 == 0) {
		item.cssClass = "myItemClass";
		item.details = "It is of utmost importance!"
	}
	calendar.schedule.items.add(item);
}

// add a recurrent item
item = new p.Item();
item.startTime = p.DateTime.fromDateParts(date.year, date.month, date.day, 14, 0, 0);
item.endTime = p.DateTime.fromDateParts(date.year, date.month, date.day, 16, 0, 0);
item.subject = "Take a power nap";
item.details = "zzz";

// setup the recurrence
var recurrence = new p.Recurrence();
recurrence.pattern = p.RecurrencePattern.Weekly;
recurrence.daysOfWeek = p.DaysOfWeek.Wednesday;
recurrence.startDate = date;
recurrence.recurrenceEnd = p.RecurrenceEnd.Never;
item.recurrence = recurrence;

calendar.schedule.items.add(item);

// add an item with reminder
item = new p.Item();
item.startTime = p.DateTime.addMinutes(date, 2);
item.endTime = p.DateTime.addHours(item.startTime, 2);
item.subject = "GYM";

var reminder = new p.Reminder();
reminder.message = "Speaking of the " + item.subject + ", go!!";
reminder.type = p.ReminderType.Leading;
reminder.timeInterval = p.TimeSpan.fromMinutes(1);
item.reminder = reminder;

calendar.schedule.items.add(item);

function handleItemModifying(sender, args) {
	args.cancel = (args.item.cssClass == "myItemClass");
}

function handleItemModified(sender, args) {
	args.item.cssClass = "modItemClass";
}

function changeView(value) {
	this.calendar.currentView = value;
}

document.getElementById("size").value = calendar.itemSettings.size;
document.getElementById("size").onchange = function () {
	calendar.itemSettings.size = Math.max(+document.getElementById("size").value, 1);
	document.getElementById("size").value = calendar.itemSettings.size;
}

document.getElementById("spacing").value = calendar.itemSettings.spacing;
document.getElementById("spacing").onchange = function () {
	calendar.itemSettings.spacing = Math.max(+document.getElementById("spacing").value, 0);
	document.getElementById("spacing").value = calendar.itemSettings.spacing;
}

document.getElementById("itemClass").onchange = function () {
	calendar.itemSettings.cssClass = document.getElementById("itemClass").value;
}

function clearItems() {
	calendar.schedule.items.clear();
}

var xmldoc;
function toXml() {
	xmldoc = calendar.schedule.toXmlDocument();
}

function fromXml() {
	if (xmldoc)
		calendar.schedule.fromXmlDocument(xmldoc);
	else alert('Save a schedule to load.')
}