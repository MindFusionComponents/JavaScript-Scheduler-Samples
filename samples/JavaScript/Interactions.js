/// <reference path="MindFusion.Scheduling-vsdoc.js" /> 

var p = MindFusion.Scheduling;

// create a new instance of the calendar 
var calendar = new p.Calendar(document.getElementById("calendar"));
calendar.currentView = p.CalendarView.WeekRange;
calendar.theme = "peach";
calendar.useForms = false;
calendar.endDate = p.DateTime.getWeekFirstDate(calendar.date, calendar.formatInfo).addDays(48);
calendar.itemSettings.size = 64;
calendar.itemSettings.showCues = false;

calendar.itemModifying.addEventListener(handleItemModifying);
calendar.itemModified.addEventListener(handleItemModified);
calendar.selectionStart.addEventListener(handleSelectionStart);

document.addEventListener("keypress", handleKeyPress);
	
calendar.render();

var subjects = ["Solve Fermi paradox", "Stretch", "Find size of universe", "Gaze into space", "Google adorable baby animal photos"];
var item;

// add some items to the schedule items collection
for (var i = 0; i < 5; i++)
{
	item = new p.Item();
	item.subject = subjects[i];
	item.startTime = calendar.itemsStartTime.clone().addDays(Math.floor(Math.random() * 30));
	item.endTime = item.startTime.clone().addDays(1);
	calendar.schedule.items.add(item);
}

function handleItemModifying(sender, args)
{
	// handle drag interaction
	if (args.action == p.ItemModifyAction.Drag)
	{
		// start of drag interaction - no changes made yet
		if (args.changes == null)
		{
			// hide item elements
			var elements = sender.getItemDom(args.item);
			elements.forEach(
			function (element) { element.style.visibility = 'hidden'; })
		}
		else
		{
			// clear drag indicator styling
			sender.cells.forEach(
			function (cell) { cell.bgCell.classList.remove("indicator-drag"); })
			
			// create drag indicator styling
			var cells = sender.getTimeCells(args.changes.startTime, args.changes.endTime, true);
			cells.forEach(
			function (cell) { cell.bgCell.classList.add("indicator-drag") });
		}
	}

	// handle resize interaction
	if (args.action == p.ItemModifyAction.Resize)
	{
		// start of resize interaction - no changes made yet
		if (args.changes == null)
		{
			// hide item elements
			var elements = sender.getItemDom(args.item);
			elements.forEach(
			function (element) { element.style.visibility = 'hidden'; })
		}
		else
		{
			// clear resize indicator styling
			sender.cells.forEach(
			function (cell) { cell.bgCell.classList.remove("indicator-resize"); })

			// create resize indicator styling
			var cells = sender.getTimeCells(args.changes.startTime, args.changes.endTime, true);
			cells.forEach(
			function (cell) { cell.bgCell.classList.add("indicator-resize") });
		}
	}

	// handle inplace edit interaction
	if (args.action == p.ItemModifyAction.InplaceEdit)
	{
		// start of inplace edit interaction - no changes made
		if (args.changes == null)
		{
			// create and show the custom popup
			var m = document.createElement("div");
			m.className = "modal";

			var div = document.createElement("div");
			div.className = "inplace";
			m.appendChild(div);

			var input = document.createElement("textarea");
			input.value = args.item.subject;
			div.appendChild(input);

			var button = document.createElement("button");
			button.innerText = "OK";
			button.addEventListener('click', inplaceEdited.bind(args.item));
			div.appendChild(button);

			button = document.createElement("button");
			button.innerText = "Cancel";
			button.addEventListener('click', inplaceEdited.bind(args.item));
			div.appendChild(button);

			sender.element.parentNode.appendChild(m);
			input.focus();

			// cancel the default behavior
			args.cancel = true;
		}
	}
}

function inplaceEdited(e)
{
	if (e.target.innerText == "OK")
	{
		this.subject = e.target.parentNode.childNodes[0].value;
		calendar.repaint(true);
	}
	var m = document.querySelector(".modal");
	m.parentNode.removeChild(m);
}

function handleItemModified(sender, args)
{
	// clear drag and resize indicator styling
	sender.cells.forEach(
			function (cell) { cell.bgCell.classList.remove("indicator-drag"); })
	sender.cells.forEach(
			function (cell) { cell.bgCell.classList.remove("indicator-resize"); })
}

function handleKeyPress(e)
{
	var m = document.querySelector(".modal");
	if (m) return;

	// get the selected range
	var selRange = calendar.selection.getRange();
	if (selRange)
	{
		var m = document.querySelector(".inplace-create");
		if (!m)
		{
			var cell = calendar.getTimeCell(selRange.start).bgCell;
			var rect = cell.getBoundingClientRect();

			// create the input for the item subject
			var input = document.createElement("textarea");
			input.style.left = rect.left + "px";
			input.style.top = rect.top + "px";
			input.style.width = rect.width + "px";
			input.style.height = rect.height + "px";

			input.className = "inplace-create";

			document.body.appendChild(input);
			input.focus();

			document.addEventListener('mousedown', inplaceCreated);
		}
	}
}

function inplaceCreated()
{
	var m = document.querySelector(".inplace-create");
	m.parentNode.removeChild(m);

	var selRange = calendar.selection.getRange();

	// create the new item
	var item = new p.Item();
	item.startTime = selRange.start;
	item.endTime = selRange.end;
	item.subject = m.value;

	calendar.schedule.items.add(item);
	calendar.repaint();

	document.removeEventListener('mousedown', inplaceCreated);
}

function handleSelectionStart(sender, args)
{
	var m = document.querySelector(".inplace-create");
	if (m)
		args.cancel = true;
}

