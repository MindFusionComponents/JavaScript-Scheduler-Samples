var p = MindFusion.Scheduling;

class CustomResource extends p.Contact {
    /**
     * Initializes a new instance of the CustomResource class.
     */
    constructor() {
        super();
        this._position = "";
        this._department = "";
        this._hireDate = null;
        this._image = "";
    }

    /**
    * Contact.saveToXml override.
    */
    saveToXml(element, context) {
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
    loadFromXml(element, context) {
        super.loadFromXml(element, context);
        this._position = context.readString("position", element);
        this._department = context.readString("department", element);
        this._hireDate = context.readDateTime("hireDate", element, null);
        this._image = context.readString("image", element);
    }

    /**
    * Contact.toJson override.
    */
    toJson(context) {
        var json = super.toJson(context);
        json.position = this.position;
        json.department = this.department;
        json.hireDate = context.writeDateTime(this.hireDate);
        json.image = this.image;
        return json;
    }

    /**
    * Contact.fromJson override.
    */
    fromJson(json, context) {
        super.fromJson(json, context);
        this._position = json.position;
        this._department = json.department;
        this._hireDate = context.readDateTime(json.hireDate);
        this._image = json.image;
    }

    get position() {
        return this._position;
    }
    set position(value) {
        this._position = value;
    }

    get department() {
        return this._department;
    }
    set department(value) {
        this._department = value;
    }

    get hireDate() {
        return this._hireDate;
    }
    set hireDate(value) {
        this._hireDate = value;
    }

    get image() {
        return this._image;
    }
    set image(value) {
        this._image = value;
    }

    get name() {
        return this.firstName.substr(0, 1) + "." + this.lastName;
    }
    set name(value) { }
}


