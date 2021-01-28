// <reference path="jsplanner.d.ts" />

namespace CustomItem
{
    import p = MindFusion.Scheduling;

    class CustomResource extends p.Contact
    {
        /**
         * Initializes a new instance of the CustomResource class.
         */
        constructor()
        {
            super();
            this._position = "";
            this._department = "";
            this._hireDate = null;
            this._image = "";
        }

        /**
        * Contact.saveToXml override.
        */
        saveToXml(element, context: p.XmlPersistContext)
        {
            super.saveToXml(element, context);
            context.writeString(this._position, "position", element);
            context.writeString(this._department, "department", element);
            if (this._hireDate != null)
                context.writeDateTime(this._hireDate, "hireDate", element);
            context.writeString(this._image, "image", element);
        }

        /**
        * Contact.loadFromXml override.
        */
        loadFromXml(element, context: p.XmlPersistContext)
        {
            super.loadFromXml(element, context);
            this._position = context.readString("position", element);
            this._department = context.readString("department", element);
            this._hireDate = context.readDateTime("hireDate", element, null);
            this._image = context.readString("image", element);
        }

        /**
        * Contact.toJson override.
        */
        toJson(context: p.JsonPersistContext)
        {
            var json = super.toJson(context);
            json["position"] = this.position;
            json["department"] = this.department;
            json["hireDate"] = context.writeDateTime(this.hireDate);
            json["image"] = this.image;
            return json;
        }

        /**
        * Contact.fromJson override.
        */
        fromJson(json, context: p.JsonPersistContext)
        {
            super.fromJson(json, context);
            this._position = json.position;
            this._department = json.department;
            this._hireDate = context.readDateTime(json.hireDate);
            this._image = json.image;
        }

        get position()
        {
            return this._position;
        }
        set position(value)
        {
            this._position = value;
        }

        get department()
        {
            return this._department;
        }
        set department(value)
        {
            this._department = value;
        }

        get hireDate()
        {
            return this._hireDate;
        }
        set hireDate(value)
        {
            this._hireDate = value;
        }

        get image()
        {
            return this._image;
        }
        set image(value)
        {
            this._image = value;
        }

        get name()
        {
            return this.firstName.substr(0, 1) + "." + this.lastName;
        }
        set name(value) { }

        private _position: string;
        private _department: string;
        private _hireDate: p.DateTime;
        private _image: string;
    }

    class CustomEvent extends p.Item
    {
        /**
         * Initializes a new instance of the CustomEvent class.
         */
        constructor()
        {
            super();
            this._timestamp = p.DateTime.now();
            this._eventType = "";
        }

        /**
        * Item.saveToXml override.
        */
        saveToXml(element, context: p.XmlPersistContext)
        {
            super.saveToXml(element, context);
            context.writeDateTime(this._timestamp, "timestamp", element);
            context.writeString(this._eventType, "eventType", element);
        }

        /**
        * Item.loadFromXml override.
        */
        loadFromXml(element, context: p.XmlPersistContext)
        {
            super.loadFromXml(element, context);
            this._timestamp = context.readDateTime("timestamp", element);
            this._eventType = context.readString("eventType", element);
        }

        /**
        * Item.toJson override.
        */
        toJson(context: p.JsonPersistContext)
        {
            var json = super.toJson(context);
            json["timestamp"] = context.writeDateTime(this.timestamp);
            json["eventType"] = this.eventType;
            return json;
        }

        /**
        * Item.fromJson override.
        */
        fromJson(json, context: p.JsonPersistContext)
        {
            super.fromJson(json, context);
            this._timestamp = context.readDateTime(json.timestamp);
            this._eventType = json.eventType;
        }

        get timestamp()
        {
            return this._timestamp;
        }

        get eventType()
        {
            return this._eventType;
        }
        set eventType(value)
        {
            this._eventType = value;
        }
        get host()
        {
            return this.resources.first();
        }

        private _timestamp: p.DateTime;
        private _eventType: string;
    }

    // create a new instance of the calendar 
    var calendar = new p.Calendar(<HTMLDivElement>document.getElementById("calendar"));

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
    while (i < 5)
    {
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
    var item = new CustomEvent();
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

    function onItemDraw(sender, args)
    {
        var item = args.item;
        if (args.item instanceof CustomEvent)
        {
            var element = args.rawEventArgs.target;
            element.title = "timestamp:" + item.timestamp.toString("hh:mm tt", sender.formatInfo);

            var header = element.querySelector('.mfp-subject');
            var span = document.createElement("span");
            span.innerText = item.eventType;
            header.parentNode.insertBefore(span, header);

            var details = element.querySelector('.mfp-details');
            if (details)
            {
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

    export function group(value)
    {
        calendar.resources.clear();
        if (value == p.GroupType.GroupByResources)
        {
            // add the resources by which to group to the calendar.resources collection
            calendar.resources.addRange(calendar.schedule.resources.items());
        }
        calendar.groupType = value;
    }

    export function clearItems()
    {
        calendar.schedule.items.clear();
    }

    export function showExport(sender)
    {
        if (sender.checked)
        {
            (<HTMLDivElement>document.getElementById("export").parentNode).style.display = "block";
            calendar.element.style.width = "70%";
            calendar.adjust();
        }
        else
        {
            (<HTMLDivElement>document.getElementById("export").parentNode).style.display = "none";
            calendar.element.style.width = "100%";
            calendar.adjust();
        }
    }

    var xmldoc;
    export function toXml()
    {
        xmldoc = calendar.schedule.toXmlDocument();

        var serializer = new XMLSerializer();
        (<HTMLInputElement>document.getElementById("export")).value = serializer.serializeToString(xmldoc);
    }

    export function fromXml()
    {
        var xmldoc = new window.DOMParser().parseFromString((<HTMLInputElement>document.getElementById("export")).value, "text/xml");
        calendar.schedule.fromXmlDocument(xmldoc);
    }

    export function toJson()
    {
        (<HTMLInputElement>document.getElementById("export")).value = calendar.schedule.toJson();
    }

    export function fromJson()
    {
        calendar.schedule.fromJson((<HTMLInputElement>document.getElementById("export")).value);
    }
}