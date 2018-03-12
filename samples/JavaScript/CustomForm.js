var p = MindFusion.Scheduling;

var CustomForm = function (calendar, item, type)
{
	p.BaseForm.call(this, calendar, item);

	this._id = "CustomForm";
	this._type = type;
	this.headerText = "Custom Form";

	this.colors = [{ value: 0, text: "white" }, { value: 1, text: "green" }, { value: 2, text: "red" }, { value: 3, text: "violet"}];
}

CustomForm.prototype = Object.create(p.BaseForm.prototype);
CustomForm.prototype.constructor = CustomForm;

CustomForm.prototype.drawContent = function ()
{
	p.BaseForm.prototype.drawContent.call(this);

	var content = this.getContent();

	// create a text-area for the item subject
	var control = this.createTextArea({ id: "subject", initValue: this.item.subject, events: { keydown: this._areaKeyDown} });
	control.element.style.width = "200px";
	this.addControl(control);

	var row = this.row();
	row.innerHTML = this.localInfo.subjectCaption;
	content.appendChild(row);

	row = this.row();
	row.appendChild(control.element);
	content.appendChild(row);

	// create a drop-down list for ranks
	row = this.row();
	row.innerHTML = "Rank";
	content.appendChild(row);

	control = this.createDropDownList({ id: "rank", items: this.getLocations(), initValue: this.getItemLocationIndex(), addEmptyValue: false });
	control.element.style.width = "200px";
	this.addControl(control);

	row = this.row();
	row.appendChild(control.element);
	content.appendChild(row);

	// create a drop-down list for colors
	row = this.row();
	row.innerHTML = "Color";
	content.appendChild(row);

	var item = this.item;
	control = this.createDropDownList({ id: "cssClass", items: this.colors, initValue: this.colors.find(c => c.text === item.cssClass).value,  addEmptyValue: false});
	control.element.style.width = "200px";
	this.addControl(control);

	row = this.row();
	row.appendChild(control.element);
	content.appendChild(row);

	return content;
};

// create an array of objects to fill the Ranks drop-down
CustomForm.prototype.getLocations = function ()
{
	var result = [];
	this.calendar.schedule.locations.forEach(function (l, i)
	{
		result.push({ value: i, text: l.toString() });
	}, this);
	return result;
}

// get the index of the current item's rank to set the value of the Ranks drop-down
CustomForm.prototype.getItemLocationIndex = function ()
{
	if (this.item != null && this.item.location != null)
	{
		return this.calendar._schedule.locations.items().indexOf(this.item.location);
	}
	return -1;
}

// override BaseForm's drawButtons method to create form buttons
CustomForm.prototype.drawButtons = function ()
{
	var thisObj = this;

	var btnSave = this.createButton({
		id: "btnSave",
		text: this.localInfo.saveButtonCaption,
		events: { "click": function click(e)
		{
			return thisObj.onSaveButtonClick(e);
		}
		}
	});

	var btnCancel = this.createButton({
		id: "btnCancel",
		text: this.localInfo.cancelButtonCaption,
		events: { click: function click(e)
		{
			return thisObj.onCancelButtonClick(e);
		}
		}
	});

	var buttons = this.row();
	buttons.classList.add("mfp-buttons-row");
	buttons.appendChild(btnSave.element);
	buttons.appendChild(btnCancel.element);

	return buttons;
};

CustomForm.prototype.onSaveButtonClick = function (e)
{
	// update the item with the form data
	this.item.subject = this.getControlValue("subject");

	var rankIndex = +this.getControlValue("rank");
	this.item.location = this.calendar.schedule.locations.items()[rankIndex];
	
	var colorIndex = +this.getControlValue("cssClass");
	this.item.cssClass = this.colors.find(c => c.value === colorIndex).text;
	
	// if a new item is created, add it to the schedule.items collection
	if (this.type === "new")
		this.calendar.schedule.items.add(this.item);

	// close the form
	this.closeForm();

	// repaint the calendar
	this.calendar.repaint(true);
};

CustomForm.prototype.onCancelButtonClick = function (e)
{
	// close the form
	this.closeForm();
};



