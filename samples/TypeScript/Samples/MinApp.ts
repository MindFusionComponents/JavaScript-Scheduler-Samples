/// <reference path="jsplanner.d.ts" />

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

	let locale = document.getElementById("locale") as HTMLInputElement;
	locale.onchange = () =>
	{
		var fileName = './localization/' + locale.value + '.json';
		loadJSON(fileName, function (response)
		{
			// load the locale from the JSON string
			calendar.locale = JSON.parse(response);
		});
	}

	function loadJSON(name, callback)
	{
		var xobj = new XMLHttpRequest();
		xobj.overrideMimeType("application/json");
		xobj.open('GET', name, true);
		xobj.onreadystatechange = function ()
		{
			if (xobj.readyState == 4 && xobj.status == 200)
			{
				callback(xobj.responseText);
			}
		};
		xobj.send(null);
	}
}

