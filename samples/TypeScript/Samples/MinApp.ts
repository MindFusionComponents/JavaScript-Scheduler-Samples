// <reference path="jsplanner.d.ts" />

namespace MinApp
{
	import p = MindFusion.Scheduling;

	// create a new instance of the calendar 
	var calendar = new p.Calendar(<HTMLDivElement>document.getElementById("calendar"));

	var date = new p.DateTime();

	for (var i = 0; i < 5; i++)
	{
		var item = new p.Item();
		item.subject = "calendar item" + i.toString();
		item.startTime = date.clone().addDays(Math.floor((Math.random() * 30) + 1));
		item.endTime = item.startTime.clone().addDays(Math.floor(Math.random() * 5));
		calendar.schedule.items.add(item);
	}

	// render the calendar control
	calendar.render();

	export function changeView(value)
	{
		calendar.currentView = value;
	}


	let theme = document.getElementById("theme") as HTMLInputElement;
	theme.onchange = () =>
	{
		calendar.theme = theme.value;
	}
}
