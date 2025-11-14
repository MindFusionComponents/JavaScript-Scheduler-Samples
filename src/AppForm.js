var p = MindFusion.Scheduling;

var AppForm = function (calendar, item, type) {
	p.BaseForm.call(this, calendar, item);

	this._id = "AppForm";
	this._type = type;

	this.states = [{ value: 0, text: "confirmed" }, { value: 1, text: "pending" }, { value: 2, text: "cancelled" }];
}

AppForm.prototype = Object.create(p.BaseForm.prototype);
AppForm.prototype.constructor = AppForm;

AppForm.prototype.drawContent = function () {
	p.BaseForm.prototype.drawContent.call(this);

	var content = this.content;

	var row = this.row();
	row.className = "header-row";
	row.innerText = "From";
	content.appendChild(row);

	row = this.row();
	row.className = "data-row";
	row.innerHTML = this.item.startTime.toString(this.formatInfo.dateFormats.longDate, this.formatInfo);
	content.appendChild(row);

	var row = this.row();
	row.className = "header-row";
	row.innerText = "To";
	content.appendChild(row);

	row = this.row();
	row.className = "data-row";
	row.innerHTML = this.item.endTime.toString(this.formatInfo.dateFormats.longDate, this.formatInfo);
	content.appendChild(row);

	row = this.row();
	row.className = "header-row";
	row.innerHTML = this.localInfo.locationCaption;
	content.appendChild(row);

	row = this.row();
	row.className = "data-row";
	row.innerText = this.item.location.toString();
	content.appendChild(row);

	var row = this.row();
	row.className = "header-row";
	row.innerHTML = "Name";
	content.appendChild(row);

	if (this.type === "new") {
		// create a text-area for the item subject
		var control = this.createTextBox({ id: "subject", initValue: this.item.subject });
		control.element.style.width = "200px";
		this.addControl(control);

		row = this.row();
		row.className = "input-row";
		row.appendChild(control.element);
		content.appendChild(row);
	}
	else {
		row = this.row();
		row.className = "data-row";
		row.innerText = this.item.subject.toString() || "<unknown>";
		content.appendChild(row);
	}

	// create a drop-down list for status
	row = this.row();
	row.className = "header-row";
	row.innerHTML = "Status";
	content.appendChild(row);

	var item = this.item;
	control = this.createDropDownList({ id: "status", items: this.states, initValue: item.tag, addEmptyValue: false });
	control.element.style.width = "200px";
	this.addControl(control);

	row = this.row();
	row.className = "input-row";
	row.appendChild(control.element);
	content.appendChild(row);

	return content;
};

// override BaseForm's drawButtons method to create form buttons
AppForm.prototype.drawButtons = function () {
	var thisObj = this;

	var btnSave = this.createButton({
		id: "btnSave",
		text: "&#10004;",
		events: {
			"click": function click(e) {
				return thisObj.onSaveButtonClick(e);
			}
		}
	});
	btnSave.element.className = "form-button-save";

	var btnCancel = this.createButton({
		id: "btnCancel",
		text: "&#10006;",
		events: {
			click: function click(e) {
				return thisObj.onCancelButtonClick(e);
			}
		}
	});
	btnCancel.element.className = "form-button-cancel";

	var buttons = this.row();
	buttons.classList.add("form-buttons");
	buttons.appendChild(btnSave.element);
	buttons.appendChild(btnCancel.element);

	return buttons;
};

AppForm.prototype.onSaveButtonClick = function (e) {
	// update the item with the form data
	if (this.controls.get("subject"))
		this.item.subject = this.getControlValue("subject");

	var status = +this.getControlValue("status");
	this.item.tag = status;

	// if a new item is created, add it to the schedule.items collection
	if (this.type === "new")
		this.calendar.schedule.items.add(this.item);

	// close the form
	this.closeForm();

	// repaint the calendar
	this.calendar.render(true);
};

AppForm.prototype.onCancelButtonClick = function (e) {
	// close the form
	this.closeForm();
};
