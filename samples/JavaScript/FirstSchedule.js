/// <reference path="MindFusion.Scheduling-vsdoc.js" /> 

var p = MindFusion.Scheduling;

// create a new instance of the calendar 
var calendar = new p.Calendar(document.getElementById("calendar"));

calendar.monthSettings.headerStyle = p.MainHeaderStyle.Buttons | p.MainHeaderStyle.Title;
calendar.monthSettings.dayOfWeekFormat = p.DayOfWeekFormat.Full;
calendar.monthSettings.leadingWeekCount = 1;
calendar.monthSettings.showPaddingItems = true;
calendar.monthSettings.maxItems = 3;

calendar.theme = "first-theme";

calendar.date = p.DateTime.fromDateParts(2020, 1, 1);

//visualize the calendar
calendar.render();

calendar.itemCreating.addEventListener(validateCreateItem);

function validateCreateItem (sender, args)
{
 //checks if an item from calendar is being modified
 if ((args.item.startTime.day >= 1 && args.item.startTime.day <= 3) ||
(args.item.endTime.day > 1 && args.item.endTime.day <= 3) )
 {
  
  alert("Events cannot be scheduled during the first three days.");
  args.cancel = true;
 }
  
}


var button = document.getElementById( 'saveButton' );
button.addEventListener( 'click', function() {
    
    var data = calendar.schedule.toJson();

    var blob = new Blob( [ data ], {
        type: 'application/json'
    });
    
    url = URL.createObjectURL( blob );
    var link = document.createElement( 'a' );
    link.setAttribute( 'href', url );
    link.setAttribute( 'download', 'first-schedule.json' );
    
    var event = document.createEvent( 'MouseEvents' );
    event.initMouseEvent( 'click', true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
    link.dispatchEvent( event );
});

function loadJSON(callback) {   

    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', 'first-schedule.json', true); // Replace 'first-schedule' with the path to your file
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
          }
    };
    xobj.send(null);  
 }
 
var button1 = document.getElementById( 'loadButton');
button1.addEventListener( 'click', function() {
	init();
	});
	
function init() {
 loadJSON(function(response) {
  // load the schedule from the JSON string
    calendar.schedule.fromJson(response);
 });
}


