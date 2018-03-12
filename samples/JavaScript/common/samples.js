
var jsPlannerInfo =
	'<hr />' +
	'<h1>About JsPlanner</h1>' +
	'<p>JsPlanner is fully interactive scheduling control for the web, that can be used to present calendars and timetables to users and ' +
	'let them edit the schedule information interactively. JsPlanner can display a schedule in several view types, such as: ' +
		'<ul>' +
		'<li>Single and multiple month views</li>' +
		'<li>Single and multiple week views</li>' +
		'<li>Horizontal and vertical lists of time intervals</li>' +
		'<li>Horizontal and vertical timetables</li>' +
		'<li>Resource view, displaying the distribution of resources over a period of time</li>' +
	'</ul>' +
	'<h2>Features</h2>' +
	'<ul>' +
		'<li>Several different view types</li>' +
		'<li>Interactive item creation and modification</li>' +
		'<li>Filtering and grouping</li>' +
		'<li>Recurring events</li>' +
		'<li>Localization support</li>' +
		'<li>Themes</li>' +
		'<li>XML and JSON schedule serialization</li>' +
	'</ul>' +
	'JsPlanner is written 100% in JavaScript and can easily be integrated into any web application. '+
	'It uses Flexible Box for layout.</p>';

if (document.getElementById('copyright')) {
	document.getElementById('copyright').innerHTML = "&copy; " + new Date().getFullYear() + " MindFusion";
}

var e = document.createElement('div');
e.innerHTML = jsPlannerInfo;

if (document.getElementById('infoTab')) {
	document.getElementById('infoTab').appendChild(e);
}

var collapsed = false;
function onExpandCollapse()
{
	if (collapsed)
	{
		document.getElementById('info').style.width = '400px';
		document.getElementById('content').style.right = '401px';
		document.getElementById('expandButton').innerHTML = ">";
		collapsed = false;
	}
	else
	{
		document.getElementById('info').style.width = '0px';
		document.getElementById('content').style.right = '0px';
		document.getElementById('expandButton').innerHTML = "<";
		collapsed = true;
	}
}
