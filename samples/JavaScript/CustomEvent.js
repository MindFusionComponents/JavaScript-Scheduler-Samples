var p = MindFusion.Scheduling;

class CustomEvent extends p.Item {
    /**
     * Initializes a new instance of the CustomEvent class.
     */
    constructor() {
        super();
        this._timestamp = p.DateTime.now();
        this._eventType = "";
    }

    /**
    * Item.saveToXml override.
    */
    saveToXml(element, context) {
        super.saveToXml(element, context);
        context.writeDateTime(this._timestamp, "timestamp", element);
        context.writeString(this._eventType, "eventType", element);
    }

    /**
    * Item.loadFromXml override.
    */
    loadFromXml(element, context) {
        super.loadFromXml(element, context);
        this._timestamp = context.readDateTime("timestamp", element);
        this._eventType = context.readString("eventType", element);
    }

    /**
    * Item.toJson override.
    */
    toJson(context) {
        var json = super.toJson(context);
        json.timestamp = context.writeDateTime(this.timestamp);
        json.eventType = this.eventType;
        return json;
    }

    /**
    * Item.fromJson override.
    */
    fromJson(json, context) {
        super.fromJson(json, context);
        this._timestamp = context.readDateTime(json.timestamp);
        this._eventType = json.eventType;
    }

    get timestamp() {
        return this._timestamp;
    }

    get eventType() {
        return this._eventType;
    }
    set eventType(value) {
        this._eventType = value;
    }
    get host()
    {
        return this.resources.first();
    }
}


