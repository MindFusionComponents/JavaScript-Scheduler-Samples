/// <reference path="MindFusion.Scheduling-vsdoc.js" /> 

var p = MindFusion.Scheduling;

// create a new instance of the calendar 
var calendar = new p.Calendar(document.getElementById("calendar"));

// set the calendar view to SingleMonth, which displays one month at a time
calendar.currentView = p.CalendarView.SingleMonth;

// disable this built-in forms for item creation and modification
calendar.useForms = false;

// handle the visibleDateChanged event to load the corresponding data when the calendar month is changed
calendar.visibleDateChanged.addEventListener(getData);

// handle the itemDoubleClick event to show the custom form for item editing
calendar.itemDoubleClick.addEventListener(handleItemDoubleClick);

// handle the selectionEnd event to show the custom form for item creation
calendar.selectionEnd.addEventListener(handleSelectionEnd);

// set the custom calendar theme
calendar.theme = "custom";

// set the height of item visuals
calendar.itemSettings.size = 22;

// set the format string for item tooltips
calendar.itemTooltipFormat = "%s[d MMMM] - %h";

// hide the week numbers header
calendar.monthSettings.weekHeaderStyle = p.VerticalHeaderStyle.None;

// fetch holiday data from public api
getData();

function getData() {
	var url = 'http://calapi.inadiutorium.cz/api/v0/en/calendars/default/' + calendar.date.year + '/' + (+calendar.date.month + 1);

	fetch(url)
		.then(response => response.json())
		.then((data) => {
			loadCalendar(data)
		})
		.catch(err => { throw err });
}

function loadCalendar(data) {
	// clear existing items from the calendar schedule
	calendar.schedule.items.clear();

	// traverse the json object returned by the api and create corresponding items in the calendar schedule
	for (var i = 0; i < data.length; i++) {
		var date = p.DateTime.fromDateString(data[i].date);
		date = p.DateTime.fromDateParts(date.year, date.month, date.day, 0, 0, 0);

		var celebrations = data[i].celebrations;

		for (var k = 0; k < celebrations.length; k++) {
			var item = new p.Item();

			item.subject = celebrations[k].title;

			item.startTime = date;
			item.endTime = p.DateTime.addDays(date.clone(), 1);
			item.allDayEvent = true;

			// lock the item to disable interactive drag and resize
			item.locked = true;

			item.location = getLocation(celebrations[k].rank);
			item.cssClass = celebrations[k].colour;

			// add the item to the schedule items collection
			calendar.schedule.items.add(item);
		}
	}

	// render the calendar
	calendar.render();
}

function getLocation(name) {
	var location = calendar.schedule.locations.where(function (item) { return (item.name === name) }).items()[0];

	// create a new location object and add it to the schedule's location collection
	if (!location) {
		location = new p.Location();
		location.name = name;
		calendar.schedule.locations.add(location);
	}
	return location;
}

function handleItemDoubleClick(sender, args) {
	// create and show the custom form
	var form = new CustomForm(sender, args.item, "edit");
	form.showForm();
}

function handleSelectionEnd(sender, args) {
	// create a new item with the start and end time of the selection
	var item = new p.Item();
	item.startTime = args.startTime;
	item.endTime = args.endTime;
	item.cssClass = "white";

	// create and show the custom form
	var form = new CustomForm(sender, item, "new");
	form.showForm();
}