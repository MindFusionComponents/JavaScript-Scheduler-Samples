// <reference path="jsplanner.d.ts" />
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var CustomItem;
(function (CustomItem) {
    var p = MindFusion.Scheduling;
    var CustomResource = /** @class */ (function (_super) {
        __extends(CustomResource, _super);
        /**
         * Initializes a new instance of the CustomResource class.
         */
        function CustomResource() {
            var _this = _super.call(this) || this;
            _this._position = "";
            _this._department = "";
            _this._hireDate = null;
            _this._image = "";
            return _this;
        }
        /**
        * Contact.saveToXml override.
        */
        CustomResource.prototype.saveToXml = function (element, context) {
            _super.prototype.saveToXml.call(this, element, context);
            context.writeString(this._position, "position", element);
            context.writeString(this._department, "department", element);
            if (this._hireDate != null)
                context.writeDateTime(this._hireDate, "hireDate", element);
            context.writeString(this._image, "image", element);
        };
        /**
        * Contact.loadFromXml override.
        */
        CustomResource.prototype.loadFromXml = function (element, context) {
            _super.prototype.loadFromXml.call(this, element, context);
            this._position = context.readString("position", element);
            this._department = context.readString("department", element);
            this._hireDate = context.readDateTime("hireDate", element, null);
            this._image = context.readString("image", element);
        };
        /**
        * Contact.toJson override.
        */
        CustomResource.prototype.toJson = function (context) {
            var json = _super.prototype.toJson.call(this, context);
            json["position"] = this.position;
            json["department"] = this.department;
            json["hireDate"] = context.writeDateTime(this.hireDate);
            json["image"] = this.image;
            return json;
        };
        /**
        * Contact.fromJson override.
        */
        CustomResource.prototype.fromJson = function (json, context) {
            _super.prototype.fromJson.call(this, json, context);
            this._position = json.position;
            this._department = json.department;
            this._hireDate = context.readDateTime(json.hireDate);
            this._image = json.image;
        };
        Object.defineProperty(CustomResource.prototype, "position", {
            get: function () {
                return this._position;
            },
            set: function (value) {
                this._position = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CustomResource.prototype, "department", {
            get: function () {
                return this._department;
            },
            set: function (value) {
                this._department = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CustomResource.prototype, "hireDate", {
            get: function () {
                return this._hireDate;
            },
            set: function (value) {
                this._hireDate = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CustomResource.prototype, "image", {
            get: function () {
                return this._image;
            },
            set: function (value) {
                this._image = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CustomResource.prototype, "name", {
            get: function () {
                return this.firstName.substr(0, 1) + "." + this.lastName;
            },
            set: function (value) { },
            enumerable: true,
            configurable: true
        });
        return CustomResource;
    }(p.Contact));
    var CustomEvent = /** @class */ (function (_super) {
        __extends(CustomEvent, _super);
        /**
         * Initializes a new instance of the CustomEvent class.
         */
        function CustomEvent() {
            var _this = _super.call(this) || this;
            _this._timestamp = p.DateTime.now();
            _this._eventType = "";
            return _this;
        }
        /**
        * Item.saveToXml override.
        */
        CustomEvent.prototype.saveToXml = function (element, context) {
            _super.prototype.saveToXml.call(this, element, context);
            context.writeDateTime(this._timestamp, "timestamp", element);
            context.writeString(this._eventType, "eventType", element);
        };
        /**
        * Item.loadFromXml override.
        */
        CustomEvent.prototype.loadFromXml = function (element, context) {
            _super.prototype.loadFromXml.call(this, element, context);
            this._timestamp = context.readDateTime("timestamp", element);
            this._eventType = context.readString("eventType", element);
        };
        /**
        * Item.toJson override.
        */
        CustomEvent.prototype.toJson = function (context) {
            var json = _super.prototype.toJson.call(this, context);
            json["timestamp"] = context.writeDateTime(this.timestamp);
            json["eventType"] = this.eventType;
            return json;
        };
        /**
        * Item.fromJson override.
        */
        CustomEvent.prototype.fromJson = function (json, context) {
            _super.prototype.fromJson.call(this, json, context);
            this._timestamp = context.readDateTime(json.timestamp);
            this._eventType = json.eventType;
        };
        Object.defineProperty(CustomEvent.prototype, "timestamp", {
            get: function () {
                return this._timestamp;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CustomEvent.prototype, "eventType", {
            get: function () {
                return this._eventType;
            },
            set: function (value) {
                this._eventType = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CustomEvent.prototype, "host", {
            get: function () {
                return this.resources.first();
            },
            enumerable: true,
            configurable: true
        });
        return CustomEvent;
    }(p.Item));
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
    showExport(false);
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
    CustomItem.group = group;
    function clearItems() {
        calendar.schedule.items.clear();
    }
    CustomItem.clearItems = clearItems;
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
    CustomItem.showExport = showExport;
    var xmldoc;
    function toXml() {
        xmldoc = calendar.schedule.toXmlDocument();
        var serializer = new XMLSerializer();
        document.getElementById("export").value = serializer.serializeToString(xmldoc);
    }
    CustomItem.toXml = toXml;
    function fromXml() {
        var xmldoc = new window.DOMParser().parseFromString(document.getElementById("export").value, "text/xml");
        calendar.schedule.fromXmlDocument(xmldoc);
    }
    CustomItem.fromXml = fromXml;
    function toJson() {
        document.getElementById("export").value = calendar.schedule.toJson();
    }
    CustomItem.toJson = toJson;
    function fromJson() {
        calendar.schedule.fromJson(document.getElementById("export").value);
    }
    CustomItem.fromJson = fromJson;
})(CustomItem || (CustomItem = {}));
//# sourceMappingURL=CustomItem.js.map