var p = MindFusion.Scheduling;

// create a new instance of the calendar 
var calendar = new p.Calendar(document.getElementById("calendar"));

calendar.currentView = p.CalendarView.Timetable;
calendar.showTooltips = false;
calendar.useForms = false;
calendar.allowInplaceEdit = false;
calendar.theme = "earth";
calendar.selection.enabled = false;
calendar.timetableSettings.cellSize = 35;

// set the start time to 8:00 AM
calendar.timetableSettings.startTime = 480;

// set the end time to 20:00 PM
calendar.timetableSettings.endTime = 1200;

// add some dates to the timetable view
calendar.timetableSettings.dates.clear();
var i = 0;
while (i < 5) {
    calendar.timetableSettings.dates.add(p.DateTime.today().addDays(i));
    i++;
}

// render the calendar control
calendar.render();

var date = p.DateTime.today();

// register custom classes for serialization
p.Schedule.registerClass(CustomResource, "[custom:customResource]", "CustomResource", 1);
p.Schedule.registerClass(CustomEvent, "[custom:customEvent]", "CustomEvent", 1);

// add a custom resource
var host = new CustomResource();
host.firstName = "Armillaria";
host.lastName = "Ponderosa";
host.position = "Wizard of light bulb moments";
host.department = "Administration";
host.hireDate = p.DateTime.fromDateParts(2000, 1, 1, 0, 0, 0);
host.image = "images/h1.png";
calendar.schedule.resources.add(host);

// add a custom resource
var host2 = new CustomResource();
host2.firstName = "Cantharellus";
host2.lastName = "Cibarius";
host2.position = "Chief robot whisperer";
host2.department = "Research";
host2.hireDate = p.DateTime.fromDateParts(2002, 5, 1, 0, 0, 0);
host2.image = "images/h2.png";
calendar.schedule.resources.add(host2);

// add a custom item
item = new CustomEvent();
item.startTime = p.DateTime.addHours(date, 12);
item.endTime = p.DateTime.addHours(item.startTime, 4);
item.subject = "MindGames";
item.eventType = "Webinar";
item.resources.add(host);
calendar.schedule.items.add(item);

// add a custom item
item = new CustomEvent();
item.startTime = p.DateTime.addDays(date, 2).addHours(10);
item.endTime = p.DateTime.addHours(item.startTime, 6);
item.subject = "Training Talk";
item.eventType = "Live event";
item.resources.add(host2);
calendar.schedule.items.add(item);

// add a custom item
item = new CustomEvent();
item.startTime = p.DateTime.addDays(date, 4).addHours(16);
item.endTime = p.DateTime.addHours(item.startTime, 6);
item.subject = "Skills Search";
item.eventType = "Conference";
item.resources.add(host);
calendar.schedule.items.add(item);

// handle the itemDraw event to apply custom drawing to custom items
calendar.itemDraw.addEventListener(onItemDraw);

showExport(false)

function onItemDraw(sender, args) {
    var item = args.item;
    if (args.item instanceof CustomEvent) {
        var element = args.rawEventArgs.target;
        element.title = "timestamp:" + item.timestamp.toString("hh:mm tt", sender.formatInfo);

        var header = element.querySelector('.mfp-subject');
        var span = document.createElement("span");
        span.innerText = item.eventType;
        header.parentNode.insertBefore(span, header);

        var details = element.querySelector('.mfp-details');
        if (details) {
            var t = document.createElement("div");
            t.className = "cardClass";

            var img = document.createElement("img");
            img.src = item.host.image;
            img.style.width = "100px";
            img.style.height = "100px";
            img.style.margin = "auto";
            t.appendChild(img);

            var span = document.createElement("span");
            span.style.fontSize = "larger";
            span.innerText = item.host.name;
            t.appendChild(span);

            var span = document.createElement("span");
            span.innerText = item.host.department;
            t.appendChild(span);

            details.parentNode.insertBefore(t, details);
        }
    }
}

function group(value) {
    calendar.resources.clear();
    if (value == p.GroupType.GroupByResources) {
        // add the resources by which to group to the calendar.resources collection
        calendar.resources.addRange(calendar.schedule.resources.items());
    }
    calendar.groupType = value;
}

function clearItems() {
    calendar.schedule.items.clear();
}

function showExport(sender) {
    if (sender.checked) {
        document.getElementById("export").parentNode.style.display = "block";
        calendar.element.style.width = "70%";
        calendar.adjust();
    }
    else {
        document.getElementById("export").parentNode.style.display = "none";
        calendar.element.style.width = "100%";
        calendar.adjust();
    }
}

var xmldoc;
function toXml() {
    xmldoc = calendar.schedule.toXmlDocument();

    var serializer = new XMLSerializer();
    document.getElementById("export").value = serializer.serializeToString(xmldoc);
}

function fromXml() {
    var xmldoc = new window.DOMParser().parseFromString(document.getElementById("export").value, "text/xml");
    calendar.schedule.fromXmlDocument(xmldoc);
}

function toJson() {
    document.getElementById("export").value = calendar.schedule.toJson();
}

function fromJson() {
    calendar.schedule.fromJson(document.getElementById("export").value);
}
