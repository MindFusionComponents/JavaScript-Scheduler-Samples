MindFusion = {
	Scheduling: {
		BaseForm: function (calendar, item) {
			/// <summary>The BaseForm class is the base class for all built-in forms.</summary>
			/// <param name="calendar" type="Calendar">Calendar. The calendar parent object of this form.</param>
			/// <param name="item" type="Item">Item. The item instance associated with this form.</param>
			/// <field name="formatInfo" type="Object">Gets the locale object used to format and display date and time information in the form.</field>
			/// <field name="headerText" type="String">Gets or sets the text which is displayed in the header of the form.</field>
			/// <field name="id" type="String">Gets the id of the form.</field>
			/// <field name="localInfo" type="Object">Gets the locale object used to format and display localizable strings in the form.</field>
			/// <field name="type" type="String">Gets the type of the form.</field>
			/// <field name="calendar" type="Calendar">Gets the calendar, displaying the form.</field>
			/// <field name="controls" type="Dictionary">Gets the controls collection.</field>
			/// <field name="item" type="Item">Gets the item, whose information is displayed in the form.</field>
		},
		ButtonEventArgs: function (button) {
			/// <summary>Specifies data for the buttonClick event.</summary>
			/// <param name="button" type="Number">Number. A value indicating which navigation button is clicked.</param>
			/// <field name="button" type="Number">Gets a value indicating which navigation button is clicked.</field>
		},
		Calendar: function (element) {
			/// <summary>The Calendar control serves as a view in document-viewarchitecture, where the document is implemented by the Schedule class. The Calendar provides several schedulerelated views, such as Month, List, Timetable, thatpresent the scheduled events in different styles and layouts.</summary>
			/// <param name="element" type="DomElement">The element this Calendar is associated with.</param>
			/// <field name="allowInplaceEdit" type="Boolean">Gets or sets a value indicating whether calendar's items can be inplace-edited.</field>
			/// <field name="cells" type="ObservableCollection">Gets the collection of cells in the calendar view.</field>
			/// <field name="contactNameFormat" type="String">Gets or sets a value indicating how to format and display contact names in view headers.</field>
			/// <field name="contacts" type="ObservableCollection">Gets the contacts whose schedule to display when the GroupType property is set to GroupByContacts or FilterByContacts.</field>
			/// <field name="cssClass" type="String">Gets or sets the css class of the calendar.</field>
			/// <field name="currentView" type="CalendarView">Gets or sets the type of the current view of the calendar.</field>
			/// <field name="date" type="DateTime">Gets or sets the date of the calendar.</field>
			/// <field name="element" type="DomElement">Gets a reference to the calendar DOM element.</field>
			/// <field name="enabled" type="Boolean">Gets or sets a value indicating whether user interactions are allowed in the calendar.</field>
			/// <field name="endDate" type="DateTime">Gets or sets the end date of the calendar.</field>
			/// <field name="formatInfo" type="Object">Gets the locale object used to format and display date and time information in the calendar.</field>
			/// <field name="groupType" type="GroupType">Gets or sets the grouping or filtering criteria for the calendar.</field>
			/// <field name="header" type="DomElement">Gets a reference to the DOM element of the calendar main header.</field>
			/// <field name="itemSelection" type="ObservableCollection">Gets the list of currently selected items.</field>
			/// <field name="itemSettings" type="ItemSettings">Gets the ItemSettings object used to customize the appearance of calendar items.</field>
			/// <field name="licenseLocation" type="String">Gets or sets the URL of the calendar's license file.</field>
			/// <field name="listSettings" type="ListSettings">Gets the ListSettings object used to customize the appearance of the List view.</field>
			/// <field name="locale" type="Object">Gets or sets the locale object used to format and display localizable information in the calendar.</field>
			/// <field name="localInfo" type="Object">Gets the locale object used to format and display localizable strings in the calendar.</field>
			/// <field name="locations" type="ObservableCollection">Gets the locations whose schedule to display when the groupType property is set to GroupByLocations or FilterByLocations.</field>
			/// <field name="monthRangeSettings" type="MonthRangeSettings">Gets the MonthRangeSettings object used to customize the appearance of the MonthRange view.</field>
			/// <field name="monthSettings" type="MonthSettings">Gets the MonthSettings object used to customize the appearance of the SingleMonth view.</field>
			/// <field name="resources" type="ObservableCollection">Gets the resources whose schedule to display when the GroupType property is set to GroupByResources or FilterByResources.</field>
			/// <field name="resourceViewSettings" type="ResourceViewSettings">Gets the ResourceViewSettings object used to customize the appearance of the Resource view.</field>
			/// <field name="schedule" type="Schedule">Gets or sets the schedule to be displayed inside the calendar.</field>
			/// <field name="selection" type="Selection">Gets the current calendar selection.</field>
			/// <field name="showTooltips" type="Boolean">Gets or sets a value indicating whether to show tooltips.</field>
			/// <field name="tasks" type="ObservableCollection">Gets the tasks whose schedule to display when the GroupType property is set to GroupByTasks or FilterByTasks.</field>
			/// <field name="theme" type="String">Gets or sets the current theme of the calendar.</field>
			/// <field name="timetableSettings" type="TimetableSettings">Gets the TimetableSettings object used to customize the appearance of the Timetable view.</field>
			/// <field name="useForms" type="Boolean">Gets or sets a value indicating whether the built-in forms for item editing will be used.</field>
			/// <field name="weekRangeSettings" type="WeekRangeSettings">Gets the WeekRangeSettings object used to customize the appearance of the WeekRange view.</field>
			/// <field name="endTime" type="DateTime">Gets the end time of the last calendar cell.</field>
			/// <field name="itemsEndTime" type="DateTime">Gets the end time of the last calendar cell, that can contain items.</field>
			/// <field name="itemsStartTime" type="DateTime">Gets the start time of the first calendar cell, that can contain items.</field>
			/// <field name="startTime" type="DateTime">Gets the start time of the first calendar cell.</field>
			/// <field name="buttonClick" type="EventDispatcher">Raised when a navigation button is clicked. Syntax: buttonClick.addEventListener( function(sender, args){} );</field>
			/// <field name="calendarLoad" type="EventDispatcher">Raised when the control is loaded. Syntax: calendarLoad.addEventListener( function(sender, args){} );</field>
			/// <field name="cellClick" type="EventDispatcher">Raised when a calendar time cell is clicked. Syntax: cellClick.addEventListener( function(sender, args){} );</field>
			/// <field name="cellDoubleClick" type="EventDispatcher">Raised when a calendar time cell is double-clicked. Syntax: cellDoubleClick.addEventListener( function(sender, args){} );</field>
			/// <field name="cueClick" type="EventDispatcher">Raised when an item cue is clicked. Syntax: cueClick.addEventListener( function(sender, args){} );</field>
			/// <field name="formClose" type="EventDispatcher">Raised when a popup form is closed. Syntax: formClose.addEventListener( function(sender, args){} );</field>
			/// <field name="formShow" type="EventDispatcher">Raised when a popup form is shown. Syntax: formShow.addEventListener( function(sender, args){} );</field>
			/// <field name="headerClick" type="EventDispatcher">Raised when a calendar header is clicked. Syntax: headerClick.addEventListener( function(sender, args){} );</field>
			/// <field name="headerDoubleClick" type="EventDispatcher">Raised when a calendar header is double-clicked. Syntax: headerDoubleClick.addEventListener( function(sender, args){} );</field>
			/// <field name="itemClick" type="EventDispatcher">Raised when an item is clicked. Syntax: itemClick.addEventListener( function(sender, args){} );</field>
			/// <field name="itemCreated" type="EventDispatcher">Raised when an item is created. Syntax: itemCreated.addEventListener( function(sender, args){} );</field>
			/// <field name="itemCreating" type="EventDispatcher">Raised while an item is being created. Syntax: itemCreating.addEventListener( function(sender, args){} );</field>
			/// <field name="itemDeleted" type="EventDispatcher">Raised when an item is deleted. Syntax: itemDeleted.addEventListener( function(sender, args){} );</field>
			/// <field name="itemDeleting" type="EventDispatcher">Raised while an item is being deleted. Syntax: itemDeleting.addEventListener( function(sender, args){} );</field>
			/// <field name="itemDoubleClick" type="EventDispatcher">Raised when an item is double-clicked. Syntax: itemDoubleClick.addEventListener( function(sender, args){} );</field>
			/// <field name="itemModified" type="EventDispatcher">Raised when an item is modified. Syntax: itemModified.addEventListener( function(sender, args){} );</field>
			/// <field name="itemModifying" type="EventDispatcher">Raised while an item is being modified. Syntax: itemModifying.addEventListener( function(sender, args){} );</field>
			/// <field name="itemReminderTriggered" type="EventDispatcher">Raised when an item remider is triggered. Syntax: itemReminderTriggered.addEventListener( function(sender, args){} );</field>
			/// <field name="itemSelectionChanged" type="EventDispatcher">Raised when a selection of items changes. Syntax: itemSelectionChanged.addEventListener( function(sender, args){} );</field>
			/// <field name="recurringItemDeleting" type="EventDispatcher">Raised while a recurring item is being deleted. Syntax: recurringItemDeleting.addEventListener( function(sender, args){} );</field>
			/// <field name="selectionChanged" type="EventDispatcher">Raised when a selection changes. Syntax: selectionChanged.addEventListener( function(sender, args){} );</field>
			/// <field name="selectionEnd" type="EventDispatcher">Raised when a selection has ended. Syntax: selectionEnd.addEventListener( function(sender, args){} );</field>
			/// <field name="selectionStart" type="EventDispatcher">Raised when a selection is started. Syntax: selectionStart.addEventListener( function(sender, args){} );</field>
			/// <field name="taskReminderTriggered" type="EventDispatcher">Raised when an task remider is triggered. Syntax: taskReminderTriggered.addEventListener( function(sender, args){} );</field>
			/// <field name="visibleDateChanged" type="EventDispatcher">Raised when the calendar date is changed. Syntax: visibleDateChanged.addEventListener( function(sender, args){} );</field>
		},
		CalendarView: function() {
			/// <summary>Specifies the type of view to display in a calendar control.</summary>
		},
		CancelEventArgs: function () {
			/// <summary>Provides a value to use with cancellable events.</summary>
			/// <field name="cancel" type="Boolean">Gets or sets a value indicating whether to allow the current operation.</field>
		},
		CellEventArgs: function (cell) {
			/// <summary>Specifies data for cell related events.</summary>
			/// <param name="cell" type="ViewCell">ViewCell. The calendar view cell related to the event.</param>
			/// <field name="cell" type="ViewCell">Gets the calendar view cell related to the event.</field>
		},
		Contact: function () {
			/// <summary>Represents an object that holds contact data for a person.</summary>
			/// <field name="address" type="String">Gets or sets the address of the contact.</field>
			/// <field name="email" type="String">Gets or sets the email of the contact.</field>
			/// <field name="firstName" type="String">Gets or sets the first name of the contact.</field>
			/// <field name="lastName" type="String">Gets or sets the last name of the contact.</field>
			/// <field name="middleName" type="String">Gets or sets the middle name of the contact.</field>
			/// <field name="phone" type="String">Gets or sets the phone of the contact.</field>
		},
		DailyRecurrence: function() {
			/// <summary>Specifies daily recurrence patterns.</summary>
		},
		DateChangedEventArgs: function (newDate, prevDate) {
			/// <summary>Specifies data for the visibleDateChanged event.</summary>
			/// <param name="newDate" type="DateTime">DateTime. The new visible date.</param>
			/// <param name="prevDate" type="DateTime">DateTime. The previous visible date.</param>
			/// <field name="newDate" type="DateTime">Gets the new visible date.</field>
			/// <field name="prevDate" type="DateTime">Gets the previous visible date.</field>
		},
		DateTime: function (date) {
			/// <summary>A Javascript Date object wrapper that extends the functionality of the JavaScript Date object.</summary>
			/// <param name="date" type="Date">Date. A JavaScript Date object.</param>
			/// <field name="date" type="DateTime">Gets the date component of this DateTime object.</field>
			/// <field name="day" type="Number">Gets the day component of the date represented by this DateTime&#160;instance.</field>
			/// <field name="dayOfWeek" type="Number">Gets the day of the week represented by this DateTime.</field>
			/// <field name="daysInMonth" type="Number">Gets the number of days in the month represented by this DateTime.</field>
			/// <field name="hour" type="Number">Gets the hour component of the date represented by this DateTime&#160;instance.</field>
			/// <field name="millisecond" type="Number">Gets the millisecond component of the date represented by this DateTime instance.</field>
			/// <field name="minute" type="Number">Gets the minute component of the date represented by this DateTime instance.</field>
			/// <field name="month" type="Number">Gets the month component of the date represented by this DateTime instance.</field>
			/// <field name="second" type="Number">Gets the second component of the date represented by this DateTime&#160;instance.</field>
			/// <field name="timeOfDay" type="Number">Gets the time component of this DateTime object, expressed in milliseconds.</field>
			/// <field name="year" type="Number">Gets the year component of the date represented by this DateTime instance.</field>
		},
		DayOfWeek: function() {
			/// <summary>Specifies the day of the week.</summary>
		},
		DayOfWeekFormat: function() {
			/// <summary>Specifies the display format of a day of the week.</summary>
		},
		DayOfWeekType: function() {
			/// <summary>Specifies the type of week day to use with monthly and yearly recurrence patterns.</summary>
		},
		DaysOfWeek: function() {
			/// <summary>Specifies the day of the week. This enum allows bitwise combination of its members.</summary>
		},
		Dictionary: function () {
			/// <summary>Represents a collection of keys and values.</summary>
		},
		EmptyEventArgs: function () {
			/// <summary>Provides a value to use with events that do not have event data.</summary>
		},
		EventArgs: function () {
			/// <summary>The base type of classes that define arguments passed to event handler functions.</summary>
		},
		EventDispatcher: function () {
			/// <summary>Represents a dispatcher for an event.</summary>
		},
		FormEventArgs: function (form) {
			/// <summary>Specifies data for form related events.</summary>
			/// <param name="form" type="BaseForm">BaseForm. The form instance related to the event.</param>
			/// <field name="form" type="BaseForm">Gets the form related to the event.</field>
		},
		GroupType: function() {
			/// <summary>Specifies grouping or filtering criteria for views that support grouping.</summary>
		},
		HeaderEventArgs: function (type) {
			/// <summary>Specifies data for header related events.</summary>
			/// <param name="type" type="HeaderType">HeaderType. The type of the header related to the event.</param>
			/// <field name="type" type="HeaderType">Gets the type of the header related to the event.</field>
		},
		HeaderType: function() {
			/// <summary>Specifies the type of a calendar header.</summary>
		},
		HorizontalHeaderStyle: function() {
			/// <summary>Specifies the appearance of a horizontal header in the calendar.</summary>
		},
		IEnumerable: function (items) {
			/// <summary>Represents an array of arbitrary objects.</summary>
			/// <param name="items" type="Array" optional="true">Optional. Array. The underlying array data structure of the collection.</param>
		},
		Item: function () {
			/// <summary>Represents appointments within a schedule.</summary>
			/// <field name="allDayEvent" type="Boolean">Gets or sets a value indicating whether the item represents an all day event.</field>
			/// <field name="allowChangeEnd" type="Boolean">Gets or sets a value indicating whether users are allowed to change the item's end time.</field>
			/// <field name="allowChangeStart" type="Boolean">Gets or sets a value indicating whether users are allowed to change the item's start time.</field>
			/// <field name="allowMove" type="Boolean">Gets or sets a value indicating whether users are allowed to move the Item.</field>
			/// <field name="contacts" type="ObservableCollection">Gets the collection of contacts associated with this Item.</field>
			/// <field name="cssClass" type="String">Gets or sets the css class of the Item.</field>
			/// <field name="details" type="String">Gets or sets the description rendered for this Item by the scheduling control.</field>
			/// <field name="endTime" type="DateTime">Gets or sets Item's scheduled end time.</field>
			/// <field name="id" type="String">Gets or sets the string identifier of this item.</field>
			/// <field name="location" type="Location">Gets or sets the location associated with this Item.</field>
			/// <field name="locked" type="Boolean">Gets or sets a value indicating whether users are forbidden to modify this item.</field>
			/// <field name="occurrenceIndex" type="Number">Gets the index of a repeating occurrence of a recurring Item.</field>
			/// <field name="priority" type="Number">Gets or sets the priority of the Item.</field>
			/// <field name="recurrence" type="Recurrence">&#160;Gets or sets the recurrence pattern of this item.</field>
			/// <field name="recurrenceState" type="RecurrenceState">Gets the recurrence state of this Item.</field>
			/// <field name="reminder" type="Reminder">Gets or sets the Reminder for this Item.</field>
			/// <field name="resources" type="ObservableCollection">Gets the collection of Resource-s associated with this Item.</field>
			/// <field name="startTime" type="DateTime">Gets or sets Item's scheduled start time.</field>
			/// <field name="subject" type="String">Gets or sets the text rendered in the header for this Item by the scheduling control.</field>
			/// <field name="tag" type="Object">Gets or sets custom data associated with the item.</field>
			/// <field name="task" type="Task">Gets or sets the Task associated with this Item.</field>
			/// <field name="visible" type="Boolean">Gets or sets a value indicating whether the Item is visible or not.</field>
		},
		ItemEventArgs: function (item, rawEventArgs) {
			/// <summary>Specifies data for the item related events.</summary>
			/// <param name="item" type="Item">Item. The item, associated with the event.</param>
			/// <param name="rawEventArgs" type="Object">Object. The Javascript event data.</param>
			/// <field name="item" type="Item">Gets the item, associated with the event.</field>
			/// <field name="rawEventArgs" type="Object">Gets the Javascript event data.</field>
		},
		ItemModifiedEventArgs: function (item, oldItem, action) {
			/// <summary>Specifies data for the itemModified event.</summary>
			/// <param name="item" type="Item">Item. The new item.</param>
			/// <param name="oldItem" type="Item">Item. The old item.</param>
			/// <param name="action" type="ItemModifyAction">One of the ItemModifyAction&#160;enumeration values. The action that has modified the item.</param>
			/// <field name="action" type="ItemModifyAction">Gets the type of action that is modifying the item.</field>
			/// <field name="item" type="Item">Gets the Item that was modified.</field>
			/// <field name="oldItem" type="Item">Gets the Item before the modification has occurred.</field>
		},
		ItemModifyAction: function() {
			/// <summary>Specifies the type of modification action used, when an item is modified.</summary>
		},
		ItemModifyingEventArgs: function (item, changes, action) {
			/// <summary>Specifies data for the itemModifying event.</summary>
			/// <param name="item" type="Item">Item. The new item.</param>
			/// <param name="changes" type="Object">Object. An object containing the changed properties.</param>
			/// <param name="action" type="ItemModifyAction">One of the ItemModifyAction&#160;enumeration values. The action that is modifying the item.</param>
			/// <field name="action" type="ItemModifyAction">Gets the type of action that is modifying the Item.</field>
			/// <field name="changes" type="Object">Gets the changed properties of the Item, associated with the event.</field>
			/// <field name="item" type="Item">Gets the item that is modified.</field>
		},
		ItemSettings: function () {
			/// <summary>Defines properties that enable appearance customization of schedule Item-s in the calendar views.</summary>
			/// <field name="cssClass" type="String">Gets or sets the default CSS class for all appointments whose CSS is not explicitly specified.</field>
			/// <field name="showContinuationArrows" type="Boolean">Gets or sets a value indicating whether to display small arrows at the beginning or at the end of each incomplete segment to indicate that the schedule Item continues in an adjacent calendar cell.</field>
			/// <field name="showCues" type="Boolean">Gets or sets a value indicating whether to display a 'more items' link in a calendar cell which isn't big enough to contain all of its items.</field>
			/// <field name="showItems" type="Boolean">Gets or sets a value indicating whether to display schedule Item-s.</field>
			/// <field name="size" type="Number">Gets or sets the size of schedule items drawn in the calendar.</field>
			/// <field name="spacing" type="Number">Gets or sets the amount of space between adjacent Item-s.</field>
			/// <field name="titleFormat" type="String">Gets or sets a value indicating how to format and display item titles.</field>
			/// <field name="tooltipFormat" type="String">Gets or sets a value indicating how to format and display item tooltips.</field>
		},
		Keys: function() {
			/// <summary>Identifies special Keys.</summary>
		},
		List: function (items) {
			/// <summary>Represents an array of arbitrary objects.</summary>
			/// <param name="items" type="Array" optional="true">Optional. Array. The underlying array data structure of the list.</param>
		},
		ListSettings: function () {
			/// <summary>Defines properties that allow customization of the appearance of a List view.</summary>
			/// <field name="cellUnits" type="TimeUnit">Gets or sets the resolution of the list view.</field>
			/// <field name="firstDayOfMonthFormat" type="String">Gets or sets the string used to format the cell header of the first day of each month.</field>
			/// <field name="firstDayOfYearFormat" type="String">Gets or sets the string used to format the cell header of the first day of each year.</field>
			/// <field name="generalFormat" type="String">Gets or sets the string used to format cells' headers.</field>
			/// <field name="headerStyle" type="MainHeaderStyle">Gets or sets the style of the view header.</field>
			/// <field name="maxItems" type="Number">Gets or sets the maximum number of items to display in a cell.</field>
			/// <field name="numberOfCells" type="Number">Gets or sets the total number of cells to be displayed in the view.</field>
			/// <field name="orientation" type="Orientation">Gets or sets the orientation of the view.</field>
			/// <field name="titleFormat" type="String">Gets or sets the string used to format the header title.</field>
			/// <field name="visibleCells" type="Number">Gets or sets the number of cells visible at the same time.</field>
		},
		Location: function () {
			/// <summary>Specifies data that identifies a location.</summary>
			/// <field name="address" type="String">Gets or sets the address of the Location.</field>
			/// <field name="city" type="String">Gets or sets the city of the Location.</field>
			/// <field name="country" type="String">Gets or sets the country of the Location.</field>
			/// <field name="state" type="String">Gets or sets the state of the location.</field>
			/// <field name="zipCode" type="String">Gets or sets the zip code of the location.</field>
		},
		MainHeaderStyle: function() {
			/// <summary>Specifies the appearance of the calendar's main header.</summary>
		},
		MonthlyRecurrence: function() {
			/// <summary>Specifies monthly recurrence patterns.</summary>
		},
		MonthRangeSettings: function () {
			/// <summary>Defines properties that allow customization of the appearance of a MonthRange view.</summary>
			/// <field name="headerStyle" type="MainHeaderStyle">Gets or sets the style of the view header.</field>
			/// <field name="monthsPerRow" type="Number">Gets or sets the number of months to be displayed in a row.</field>
			/// <field name="numberOfMonths" type="Number">Gets or sets the total number of months to be displayed in the MonthRange view.</field>
			/// <field name="titleFormat" type="String">Gets or sets the string used to format the header title.</field>
			/// <field name="titleSeparator" type="String">Gets or sets the string used as a title separator.</field>
			/// <field name="visibleRows" type="Number">Gets or sets the number of rows visible at the same time.</field>
		},
		MonthSettings: function () {
			/// <summary>Defines properties that allow customization of the appearance of a Month view.</summary>
			/// <field name="dayNamesHeaderStyle" type="HorizontalHeaderStyle">Gets or sets the style of the view day names header.</field>
			/// <field name="dayOfWeekFormat" type="DayOfWeekFormat">Gets or sets the format of the day names displayed in the day names header.</field>
			/// <field name="firstDayOfMonthFormat" type="String">Gets or sets the string used to format the cell header of the first day of each month.</field>
			/// <field name="firstDayOfYearFormat" type="String">Gets or sets the string used to format the cell header of the first day of each year.</field>
			/// <field name="generalFormat" type="String">Gets or sets the string used to format cells' headers.</field>
			/// <field name="headerStyle" type="MainHeaderStyle">Gets or sets the style of the view header.</field>
			/// <field name="hideTrailingWeeks" type="Boolean">Gets or sets a value indicating whether to hide trailing weeks, which do not contain days from the current month.</field>
			/// <field name="leadingWeekCount" type="Number">Gets or sets the number of full weeks to display from the previous month.</field>
			/// <field name="maxItems" type="Number">Gets or sets the maximum number of items to display in a cell.</field>
			/// <field name="showPaddingDays" type="Boolean">Gets or sets a value indicating whether to display days from theprevious and next months at the beginning and the end of the current one, in order to fill the whole grid of day cells.</field>
			/// <field name="showPaddingItems" type="Boolean">Gets or sets a value indicating whether items are shown in padding days.</field>
			/// <field name="titleFormat" type="String">Gets or sets the string used to format the header title.</field>
			/// <field name="trailingWeekCount" type="Number">Gets or sets the number of full weeks to display from the next month.</field>
			/// <field name="weekHeaderStyle" type="VerticalHeaderStyle">Gets or sets the style of the view week numbers header.</field>
			/// <field name="expandDayHeaders" type="Boolean">Gets or sets a value indicating whether day headers should fill the whole day cell.</field>
		},
		NotifyCollectionChangedAction: function () {
			/// <summary>Provides data for collection changed action events.</summary>
		},
		NotifyCollectionChangedEventArgs: function (action, changes, index) {
			/// <summary>Provides data for CollectionChanged events.</summary>
			/// <param name="action" type="NotifyCollectionChangedAction">NotifyCollectionChangedAction. The action that caused the event.</param>
			/// <param name="changes" type="Array" optional="true">Optional. Array. The items affected by the change.</param>
			/// <param name="index" type="Number" optional="true">Optional. Number. The index where the change occurred.</param>
		},
		NotifyCollectionChangedEventDispatcher: function () {
			/// <summary>Represents a dispatcher for NotifyCollectionChanged events.</summary>
		},
		NotifyCollectionChangingEventArgs: function (action, changes, index) {
			/// <summary>Provides data for CollectionChanging events.</summary>
			/// <param name="action" type="NotifyCollectionChangedAction">NotifyCollectionChangedAction. The action that caused the event.</param>
			/// <param name="changes" type="Array" optional="true">Optional. Array. The items affected by the change.</param>
			/// <param name="index" type="Number" optional="true">Optional. Number. The index where the change occurred.</param>
		},
		NotifyCollectionChangingEventDispatcher: function () {
			/// <summary>Represents a dispatcher for NotifyCollectionChanging events.</summary>
		},
		ObservableCollection: function (items) {
			/// <summary>Represents a collection of arbitrary objects.</summary>
			/// <param name="items" type="Array" optional="true">Optional. Array. The underlying array data structure of the collection.</param>
			/// <field name="collectionChanged" type="NotifyCollectionChangedEventDispatcher">Occurs when an item is added, removed, changed, moved, or the entire list is refreshed.</field>
			/// <field name="propertyChanged" type="PropertyChangedEventDispatcher">Occurs when a property value changes.</field>
		},
		Occurrence: function() {
			/// <summary>Specifies the index of occurrence.</summary>
		},
		Orientation: function() {
			/// <summary>Specifies orientation for calendar elements.</summary>
		},
		PropertyChangedEventArgs: function () {
			/// <summary>Provides data for PropertyChanged events.</summary>
		},
		PropertyChangedEventDispatcher: function () {
			/// <summary>Represents a dispatcher for PropertyChanged events.</summary>
		},
		PropertyEventArgs: function (propertyName, oldValue, newValue) {
			/// <summary>Provides data for PropertyChanged events.</summary>
			/// <param name="propertyName" type="String">String. The name of the property that changed.</param>
			/// <param name="oldValue" type="Object">Object. The old value of the property.</param>
			/// <param name="newValue" type="Object">Object. The new value of the property.</param>
		},
		Recurrence: function () {
			/// <summary>Defines recurrence patterns for items scheduled to repeat over and over again.</summary>
			/// <field name="daily" type="DailyRecurrence">Gets or sets the type of daily recurrence.</field>
			/// <field name="day" type="DayOfWeekType">Gets or sets a value indicating the day of the week when the event occurs.</field>
			/// <field name="dayOfMonth" type="Number">Gets or sets the day of the month when the event occurs.</field>
			/// <field name="days" type="Number">Gets or sets the number of days between two consecutive occurrences of the same event.</field>
			/// <field name="daysOfWeek" type="DaysOfWeek">Gets or sets the days of the week when the event occurs.</field>
			/// <field name="end" type="RecurrenceEnd">Gets orsets the last time when the event occurs.</field>
			/// <field name="endDate" type="DateTime">Gets or sets the end date of the Recurrence.</field>
			/// <field name="exceptions" type="Dictionary">Gets a list with all Recurrence exceptions.</field>
			/// <field name="interval" type="Number">Gets or sets the interval of Recurrence.</field>
			/// <field name="master" type="Item">Gets the master item for the recurrence.</field>
			/// <field name="monthly" type="MonthlyRecurrence">Gets or sets the type of monthly recurrence.</field>
			/// <field name="monthOfYear" type="Number">Gets or sets the month of the year when the event occurs.</field>
			/// <field name="months" type="Number">Gets or sets the number of months between two consecutive occurrences of the same event.</field>
			/// <field name="numOccurrences" type="Number">Gets or sets how many times a recurring event should occur.</field>
			/// <field name="occurrence" type="Occurrence">Gets or sets on which occurrence of the week within the month the event occurs.</field>
			/// <field name="pattern" type="RecurrencePattern">Gets or sets the recurrence pattern.</field>
			/// <field name="startDate" type="DateTime">Gets or sets the date and time of the event's first occurrence.</field>
			/// <field name="weeks" type="Number">Gets or sets the number of weeks between two consecutive occurrences of the event.</field>
			/// <field name="yearly" type="YearlyRecurrence">Gets or sets the type of yearly recurrence.</field>
		},
		RecurrenceEnd: function() {
			/// <summary>Specifies when to stop repeating recurring events.</summary>
		},
		RecurrencePattern: function() {
			/// <summary>Specifies the interval at which recurring events occur.</summary>
		},
		RecurrenceState: function() {
			/// <summary>Specifies the recurrence state of items.</summary>
		},
		Reminder: function () {
			/// <summary>Represents reminders associated with schedule Item-s.</summary>
			/// <field name="message" type="String">Gets or sets the message to display as a Reminder.</field>
			/// <field name="time" type="DateTime">Gets or sets the time when the Reminder is triggered.</field>
			/// <field name="timeInterval" type="TimeSpan">Gets or sets how much time before the item's scheduled start time to raise the event that triggers the Reminder.</field>
			/// <field name="type" type="ReminderType">Gets or sets the type of this Reminder.</field>
		},
		ReminderType: function() {
			/// <summary>Specifies the type of a Reminder.</summary>
		},
		Resource: function () {
			/// <summary>Instances of the Resource class contain information about arbitrary resources.</summary>
			/// <field name="id" type="String">Gets or sets the string identifier for this resource.</field>
			/// <field name="name" type="String">Gets or sets the name for this resource.</field>
			/// <field name="tag" type="Object">Gets or sets custom data associated with the resource.</field>
		},
		ResourceViewSettings: function () {
			/// <summary>Defines properties that allow customization of the appearance of a Resource view.</summary>
			/// <field name="bottomTimelineSettings" type="TimelineSettings">Gets the settings for the bottom timeline.</field>
			/// <field name="middleTimelineSettings" type="TimelineSettings">Gets the settings for the middle timeline.</field>
			/// <field name="timelines" type="Number">Gets or sets the number of timelines displayed in the view.</field>
			/// <field name="topTimelineSettings" type="TimelineSettings">Gets the settings for the top timeline.</field>
			/// <field name="visibleCells" type="Number">Gets or sets the number of cells visible at the same time.</field>
		},
		ResourceViewTimeline: function() {
			/// <summary>Specifies the type of a timeline in a Resource view.</summary>
		},
		Schedule: function () {
			/// <summary>Represents a timetable of scheduled events. In the model-view architecture, Schedule instances are the documents whose data is displayed by Calendar instances, which are the views.</summary>
			/// <field name="contacts" type="ObservableCollection">Gets the collection of contacts in this schedule.</field>
			/// <field name="items" type="ObservableCollection">Gets the collection of items in this schedule.</field>
			/// <field name="locations" type="ObservableCollection">Gets the collection of locations in this schedule.</field>
			/// <field name="resources" type="ObservableCollection">Gets the collection of resources in this schedule.</field>
			/// <field name="tasks" type="ObservableCollection">Gets the collection of tasks in this schedule.</field>
			/// <field name="itemsChanged" type="EventDispatcher">Raised when the items collection of the Schedule&#160;is changed. Syntax: itemsChanged.addEventListener( function(sender, args){} );</field>
			/// <field name="itemsChanging" type="EventDispatcher">Raised when the items collection of the Schedule is changing. Syntax: itemsChanging.addEventListener( function(sender, args){} );</field>
		},
		Selection: function () {
			/// <summary>Represents a selected date-time range.</summary>
			/// <field name="allowMultiple" type="Boolean">Gets or sets a value indicating whether users are allowed to select more than one date cell at a time.</field>
			/// <field name="enabled" type="Boolean">Gets or sets a value indicating whether users are allowed to select date cells.</field>
		},
		SelectionEventArgs: function (startTime, endTime, resource) {
			/// <summary>Specifies data for selection related events.</summary>
			/// <param name="startTime" type="DateTime">A DateTime that indicates the start time of the selection.</param>
			/// <param name="endTime" type="DateTime">A DateTime that indicates the end time of the selection.</param>
			/// <param name="resource" type="Resource">The Resource related to the event.</param>
			/// <field name="endTime" type="DateTime">Gets the end time of the selection.</field>
			/// <field name="resource" type="Resource">Gets the resource related to the event.</field>
			/// <field name="startTime" type="DateTime">Gets the start time of the selection.</field>
		},
		Task: function () {
			/// <summary>Represents a task in the calendar.</summary>
			/// <field name="actualCost" type="Number">Gets or sets the actual cost of the Task.</field>
			/// <field name="actualDuration" type="Number">Gets or sets the actual duration of the Task.</field>
			/// <field name="actualEnd" type="DateTime">Gets or sets the actual completion date of this Task.</field>
			/// <field name="actualStart" type="DateTime">Gets or sets the actual start date of the Task.</field>
			/// <field name="details" type="String">Gets or sets the details of the Task.</field>
			/// <field name="dueDate" type="DateTime">Gets or sets the due date of the Task.</field>
			/// <field name="estimatedCost" type="Number">Gets or sets the estimated cost of the Task.</field>
			/// <field name="estimatedDuration" type="Number">Gets or sets the estimated duration of the Task.</field>
			/// <field name="priority" type="TaskPriority">Gets or sets the priority of the Task.</field>
			/// <field name="progress" type="Number">Gets or sets the progress of the Task.</field>
			/// <field name="reminder" type="Reminder">Gets or sets the reminder of the Task.</field>
			/// <field name="startDate" type="DateTime">Gets or sets the start date of the Task.</field>
			/// <field name="status" type="TaskStatus">Gets or sets the status of the Task.</field>
			/// <field name="subject" type="String">Gets or sets the subject of the Task.</field>
		},
		TaskEventArgs: function (task) {
			/// <summary>Specifies data for Task related events.</summary>
			/// <param name="task" type="Task">Task. The Task instance for which the event is raised.</param>
			/// <field name="task" type="Task">Gets the Task instance for which the event is raised.</field>
		},
		TaskPriority: function() {
			/// <summary>Specifies the priority of a task.</summary>
		},
		TaskStatus: function() {
			/// <summary>Specifies status values for a task.</summary>
		},
		TimelineSettings: function () {
			/// <summary>Defines properties that allow customization of the appearance of timelines in a Resource view.</summary>
			/// <field name="format" type="String">Gets or sets the string used to format timeline headers.</field>
			/// <field name="unit" type="TimeUnit">Gets the resolution of the timeline.</field>
			/// <field name="unitCount" type="Number">Gets or sets the number of units between adjacent ticks in the timeline.</field>
		},
		TimeRange: function (start, end) {
			/// <summary>Represents a date-time range.</summary>
			/// <param name="start" type="DateTime">DateTime. The beginning of the range.</param>
			/// <param name="end" type="DateTime">DateTime. The end of the range.</param>
			/// <field name="end" type="DateTime">Gets or sets the end of the range.</field>
			/// <field name="isEmpty" type="Boolean">Gets a value indicating whether the range is empty.</field>
			/// <field name="start" type="DateTime">Gets or sets the beginning of the range.</field>
		},
		TimeSpan: function (ticks) {
			/// <summary>Represents a time interval.</summary>
			/// <param name="ticks" type="Number">Number. The number of ticks that represent the value of the time span.</param>
			/// <field name="days" type="Number">Gets the number of days that represent the value of this TimeSpan.</field>
			/// <field name="hours" type="Number">Gets the number of hours that represent the value of this TimeSpan.</field>
			/// <field name="milliseconds" type="Number">Gets the number of milliseconds that represent the value of this TimeSpan.</field>
			/// <field name="minutes" type="Number">Gets the number of minutes that represent the value of this TimeSpan.</field>
			/// <field name="seconds" type="Number">Gets the number of seconds that represent the value of this TimeSpan.</field>
			/// <field name="ticks" type="Number">Gets the number of ticks that represent the value of this TimeSpan.</field>
		},
		TimetableSettings: function () {
			/// <summary>Defines properties that allow customization of the appearance of a Timetable view.</summary>
			/// <field name="cellSize" type="Number">Gets or sets the size of time cells.</field>
			/// <field name="cellTime" type="TimeSpan">Gets or sets the time length of a single cell in a timetable view, accurate to the nearest second.</field>
			/// <field name="dates" type="ObservableCollection">Gets or sets the collection of dates to display in the view.</field>
			/// <field name="endTime" type="Number">Gets or sets the end time of the timetable, expressed in minutes since the beginning of the day.</field>
			/// <field name="groupHours" type="Boolean">Gets or sets a value indicating whether hours displayed in the timeline are grouped.</field>
			/// <field name="headerStyle" type="MainHeaderStyle">Gets or sets the style of the view header.</field>
			/// <field name="maxItems" type="Number">Gets or sets the maximum number of items to display in a cell.</field>
			/// <field name="orientation" type="Orientation">Gets or sets the orientation of the view.</field>
			/// <field name="reverseGrouping" type="Boolean">Gets or sets a value indicating whether grouping (if enabled) will be performed first by the resource, and then by the date.</field>
			/// <field name="scrollStep" type="Number">Gets or sets the number of days to scroll when the user clicks the navigation buttons.</field>
			/// <field name="showAM" type="Boolean">Gets or sets a value indicating whether the AM and PM suffixes are displayed.</field>
			/// <field name="showDayHeader" type="Boolean">Gets or sets a value indicating whether to show the header displaying all-day items.</field>
			/// <field name="showMinutes" type="Boolean">Gets or sets a value indicating whether to display the minutes of each hour in the timeline header when it displays whole hour cells.</field>
			/// <field name="startTime" type="Number">Gets or sets the start time of the timetable, expressed in minutes since the beginning of the day.</field>
			/// <field name="titleFormat" type="String">Gets or sets the string used to format the header title.</field>
			/// <field name="twelveHourFormat" type="Boolean">Gets or sets value indicating whether to use a 12-hour format.</field>
		},
		TimeUnit: function() {
			/// <summary>Specifies a time resolution.</summary>
		},
		VerticalHeaderStyle: function() {
			/// <summary>Specifies the appearance of a vertical header in the calendar.</summary>
		},
		ViewCell: function () {
			/// <summary>Encapsulates data for a datetime cell in a calendar view.</summary>
			/// <field name="bgCell" type="DOMElement">Gets DOM element of the cell's content.</field>
			/// <field name="endTime" type="DateTime">Gets the end time of the ViewCell.</field>
			/// <field name="index" type="Number">Gets the index of the cell.</field>
			/// <field name="isHeader" type="Boolean">Gets a value indicating whether this cell is a header cell.</field>
			/// <field name="resource" type="Resource">Gets the resource associated with the cell.</field>
			/// <field name="startTime" type="DateTime">Gets the start time of the ViewCell.</field>
			/// <field name="title" type="DOMElement">Gets DOM element of the cell's header.</field>
		},
		WeekRangeSettings: function () {
			/// <summary>Defines properties that allow customization of the appearance of a WeekRange view.</summary>
			/// <field name="dayNamesHeaderStyle" type="HorizontalHeaderStyle">Gets or sets the style of the view day names header.</field>
			/// <field name="dayOfWeekFormat" type="DayOfWeekFormat">Gets or sets the format of the day names displayed in the day names header.</field>
			/// <field name="firstDayOfMonthFormat" type="String">Gets or sets the string used to format the cell header of the first day of each month.</field>
			/// <field name="firstDayOfYearFormat" type="String">Gets or sets the string used to format the cell header of the first day of each year.</field>
			/// <field name="generalFormat" type="String">Gets or sets the string used to format cells' headers.</field>
			/// <field name="headerStyle" type="MainHeaderStyle">Gets or sets the style of the view header.</field>
			/// <field name="maxItems" type="Number">Gets or sets the maximum number of items to display in a cell.</field>
			/// <field name="titleFormat" type="String">Gets or sets the string used to format the header title.</field>
			/// <field name="titleSeparator" type="String">Gets or sets the string used as a title separator.</field>
			/// <field name="viewStyle" type="WeekRangeViewStyle">Gets or sets the style of the view.</field>
			/// <field name="visibleRows" type="Number">Gets or sets the number of rows visible at the same time.</field>
			/// <field name="expandDayHeaders" type="Boolean">Gets or sets a value indicating whether day headers should fill the whole day cell.</field>
		},
		WeekRangeViewStyle: function() {
			/// <summary>Specifies whether there are multiple weeks displayed in WeekRange view.</summary>
		},
		YearlyRecurrence: function() {
			/// <summary>Specifies types of yearly recurrence patterns.</summary>
		},
		__namespace: true
	},
	__namespace: true
};

MindFusion.Scheduling.BaseForm.prototype = {
	addControl: control {
		/// <summary>Adds the specified control to the collection of controls.</summary>
		/// <param name="control" type="Object">Object. The control to add.</param>
	},
	clearControls:  {
		/// <summary>Clears all items from the collection of controls.</summary>
	},
	closeForm: formId {
		/// <summary>Closes the form.</summary>
		/// <param name="formId" type="String" optional="true">Optional. String. The Id of the form to be closed.</param>
	},
	col:  {
		/// <summary>Renders a column element.</summary>
	},
	createButton: options {
		/// <summary>Creates a button with the specified options.</summary>
		/// <param name="options" type="Object">Object. Object, containing data for the new control.</param>
		/// <returns type="Object">Object. The newly created button.</returns>
	},
	createCheckBox: options {
		/// <summary>Creates a check-box with the specified options.</summary>
		/// <param name="options" type="Object">Object. Object, containing data for the new control.</param>
		/// <returns type="Object">Object. The newly created check-box</returns>
	},
	createCheckBoxList: options {
		/// <summary>Creates a check box list with the specified options.</summary>
		/// <param name="options" type="Object">Object. Object, containing data for the new control.</param>
		/// <returns type="Object">Object. The newly created check-box list.</returns>
	},
	createDropDownList: options {
		/// <summary>Creates a drop-down list with the specified options.</summary>
		/// <param name="options" type="Object">Object. Object, containing data for the new control.</param>
		/// <returns type="Object">Object. The newly created drop-down list.</returns>
	},
	createEditBox: options {
		/// <summary>Creates an edit box with the specified options.</summary>
		/// <param name="options" type="Object">Object. Object, containing data for the new control.</param>
		/// <returns type="Object">Object. The newly created edit box.</returns>
	},
	createRadioButton: options {
		/// <summary>Creates a radio button with the specified options.</summary>
		/// <param name="options" type="Object">Object. Object, containing data for the new control.</param>
		/// <returns type="Object">Object. The newly created radio button.</returns>
	},
	createTextArea: options {
		/// <summary>Creates a text area with the specified options.</summary>
		/// <param name="options" type="Object">Object. Object, containing data for the new control.</param>
		/// <returns type="Object">Object. The newly created text area.</returns>
	},
	createTextBox: options {
		/// <summary>Creates a text box with the specified options.</summary>
		/// <param name="options" type="Object">Object. Object, containing data for the new control.</param>
		/// <returns type="Object">Object. The newly created text box.</returns>
	},
	divider:  {
		/// <summary>Renders a horizontal line divider.</summary>
	},
	drawButtons:  {
		/// <summary>Renders the form buttons.</summary>
	},
	drawContent:  {
		/// <summary>Renders the form content.</summary>
	},
	drawHeader:  {
		/// <summary>Renders the form header.</summary>
	},
	getControlValue: controlId {
		/// <summary>Gets the value of the control with the specified id.</summary>
		/// <param name="controlId" type="String">String. The id of the control to check.</param>
		/// <returns type="Object">Object. The value of the control.</returns>
	},
	removeControl: control {
		/// <summary>Removes the specified control from the collection of controls.</summary>
		/// <param name="control" type="Object">Object. The control to remove.</param>
	},
	row:  {
		/// <summary>Renders a row element.</summary>
	},
	showForm:  {
		/// <summary>Renders the form.</summary>
	}
};
MindFusion.Scheduling.BaseForm.__class = true;

MindFusion.Scheduling.ButtonEventArgs.prototype = {
};
MindFusion.Scheduling.ButtonEventArgs.__class = true;

MindFusion.Scheduling.Calendar.prototype = {
	attach:  {
		/// <summary>Prepares the calendar for user interaction.</summary>
	},
	copyFrom: settings {
		/// <summary>Copies property values for this Calendar from another object.</summary>
		/// <param name="settings" type="Object">Object. An object containing property values.</param>
	},
	detach:  {
		/// <summary>Detaches calendar event handlers.</summary>
	},
	draw:  {
		/// <summary>Draws the calendar control.</summary>
		/// <returns type="DomElement">DomElement. The Calendar element.</returns>
	},
	getCellAt: x, y {
		/// <summary>Gets the calendar view cell that contains the specified coordinates.</summary>
		/// <param name="x" type="Number">Number. The X-coordinate of the point.</param>
		/// <param name="y" type="Number">Number. The Y-coordinate of the point.</param>
		/// <returns type="ViewCell">ViewCell. The calendar view cell that contains the specified coordinates or null if there is no cell at point.</returns>
	},
	getTimeCell: time, isEndTime, resource {
		/// <summary>Gets the calendar view cell that corresponds to the specified DateTime and resource.</summary>
		/// <param name="time" type="DateTime">DateTime. The time to search for.</param>
		/// <param name="isEndTime" type="Boolean" optional="true">Optional. Boolean. true if the index of the first interval is returned when the time is the boundary between two consecutive intervals;false if the index of the second interval is contained. The default is false.</param>
		/// <param name="resource" type="Resource" optional="true">Optional. Resource. The resource to search for.</param>
		/// <returns type="ViewCell">ViewCell. The cell that corresponds the specified DateTime and resource.</returns>
	},
	getTimeCells: startTime, endTime, isEndTime, resource {
		/// <summary>Gets the calendar view cells that corresponds to the specified DateTime range and the specified Resource.</summary>
		/// <param name="startTime" type="DateTime">DateTime. The start time of the range.</param>
		/// <param name="endTime" type="DateTime" optional="true">Optional. DateTime. The end time of the range.</param>
		/// <param name="isEndTime" type="Boolean" optional="true">Optional. Boolean. true if the index of the first interval is returned when the time is the boundary between two consecutive intervals;false if the index of the second interval is contained. The default is false.</param>
		/// <param name="resource" type="Resource" optional="true">Optional. Resource. The resource to search for.</param>
		/// <returns type="Array">An array of ViewCell objects that correspond to the specified DateTime range and Resource.</returns>
	},
	hasItemsToRemind:  {
		/// <summary>Checks if there are Item-s which reminder has not come yet.</summary>
		/// <returns type="Boolean">true if there are items with a future reminder; otherwise false.</returns>
	},
	hasTasksToRemind:  {
		/// <summary>Checks if there are Task-s which reminder has not come yet.</summary>
		/// <returns type="Boolean">true if there are tasks with a future reminder; otherwise false.</returns>
	},
	render:  {
		/// <summary>Draws the calendar control and prepares it for user interaction.</summary>
	},
	repaint: full {
		/// <summary>Repaints the calendar contents.</summary>
		/// <param name="full" type="Boolean" optional="true">Optional. Boolean. True to recreate calendar items, otherwise false.</param>
	},
	getCellItems: cell {
		/// <summary>Gets the items, whose visual elements are contained in the specified calendar cell.</summary>
		/// <param name="cell" type="ViewCell">ViewCell. The cell to check.</param>
		/// <returns type="Array">Array. An array of Item objects whose visual elements are contained in the specified calendar cell.</returns>
	},
	getItemCells: item {
		/// <summary>Gets the calendar view cells that hold the specified item's visual elements.</summary>
		/// <param name="item" type="Item">Item. The item.</param>
		/// <returns type="Array">Array. An array of ViewCell objects that hold the specified item's visual elements.</returns>
	},
	getItemDom: item {
		/// <summary>Gets the specified item's visual elements.</summary>
		/// <param name="item" type="Item">Item. The item.</param>
		/// <returns type="Array">Array. An array of div objects that represent the specified item's visual elements.</returns>
	}
};
MindFusion.Scheduling.Calendar.__class = true;

MindFusion.Scheduling.CalendarView.prototype = {
	List: 0,
	MonthRange: 1,
	ResourceView: 2,
	SingleMonth: 3,
	Timetable: 4,
	WeekRange: 5
};
MindFusion.Scheduling.CalendarView.__enum = true;

MindFusion.Scheduling.CancelEventArgs.prototype = {
};
MindFusion.Scheduling.CancelEventArgs.__class = true;

MindFusion.Scheduling.CellEventArgs.prototype = {
};
MindFusion.Scheduling.CellEventArgs.__class = true;

MindFusion.Scheduling.Contact.prototype = {
	fromJson: json {
		/// <summary>Deserializes this contact from a JSON string.</summary>
		/// <param name="json" type="String">String. A string created by the toJson method.</param>
	},
	loadFromXml: element, context {
		/// <summary>Loads the contact content from an XML element.</summary>
		/// <param name="element" type="Element">Element. An XML DOM element that contains the contact's serialized content.</param>
		/// <param name="context" type="XmlPersistContext">XmlPersistContext. An object providing contextual information about the serialization process and some helper serialization methods.</param>
	},
	saveToXml: element, context {
		/// <summary>Saves the contact content into an XML element.</summary>
		/// <param name="element" type="Element">Element. An XML DOM element that will contain the contact's data.</param>
		/// <param name="context" type="XmlPersistContext">XmlPersistContext. An object providing contextual information about the serialization process and some helper serialization methods.</param>
	},
	toJson:  {
		/// <summary>Serializes this contact into a JSON string.</summary>
		/// <returns type="String">String. A string containing the contact's JSON representation.</returns>
	}
};
MindFusion.Scheduling.Contact.__class = true;

MindFusion.Scheduling.DailyRecurrence.prototype = {
	ByDayInterval: 0,
	EveryWeekend: 1,
	EveryWorkday: 2
};
MindFusion.Scheduling.DailyRecurrence.__enum = true;

MindFusion.Scheduling.DateChangedEventArgs.prototype = {
};
MindFusion.Scheduling.DateChangedEventArgs.__class = true;

MindFusion.Scheduling.DateTime.prototype = {
	__getDate:  {
		/// <summary>Gets the day component of this DateTime instance.</summary>
		/// <returns type="Number">Number. The day of month (1-31).</returns>
	},
	__getDay:  {
		/// <summary>Gets the day of the week component of this DateTime instance.</summary>
		/// <returns type="Number">Number. The day of the week (0-6). 0 is Sunday, 1 is Monday, etc.</returns>
	},
	__getFullYear:  {
		/// <summary>Gets the year component of this DateTime instance.</summary>
		/// <returns type="Number">Number. The year (four digits).</returns>
	},
	__getHours:  {
		/// <summary>Gets the hours component of this DateTime instance.</summary>
		/// <returns type="Number">Number. The hours (0-23).</returns>
	},
	__getMilliseconds:  {
		/// <summary>Gets the milliseconds component of this DateTime instance.</summary>
		/// <returns type="Number">Number. The milliseconds (0-999).</returns>
	},
	__getMinutes:  {
		/// <summary>Gets the minutes component of this DateTime instance.</summary>
		/// <returns type="Number">Number. The minutes (0-59).</returns>
	},
	__getMonth:  {
		/// <summary>Gets the month component of this DateTime instance.</summary>
		/// <returns type="Number">Number. The month (0-11). 0 is January, 1 is February, etc.</returns>
	},
	__getSeconds:  {
		/// <summary>Gets the seconds component of this DateTime instance.</summary>
		/// <returns type="Number">Number. The seconds (0-59).</returns>
	},
	__getTime:  {
		/// <summary>Gets the number of milliseconds between Jan 1 1970 00:00:00 and this DateTime instance.</summary>
		/// <returns type="Number">Number. The number of milliseconds since Jan 1 1970 00:00:00.</returns>
	},
	__getTimezoneOffset:  {
		/// <summary>Gets the difference between GMT and local time in minutes.</summary>
		/// <returns type="Number">Number. The difference between GMT and local time in minutes.</returns>
	},
	__getUTCDate:  {
		/// <summary>Gets the day component of this DateTime instance, according to universal time.</summary>
		/// <returns type="Number">Number. The day of month (1-31).</returns>
	},
	__getUTCDay:  {
		/// <summary>Gets the day of the week component of this DateTime instance, according to universal time.</summary>
		/// <returns type="Number">Number. The day of the week (0-6). 0 is Sunday, 1 is Monday, etc.</returns>
	},
	__getUTCFullYear:  {
		/// <summary>Gets the year component of this DateTime instance, according to universal time.</summary>
		/// <returns type="Number">Number. The year (four digits).</returns>
	},
	__getUTCHours:  {
		/// <summary>Gets the hours component of this DateTime instance, according to universal time.</summary>
		/// <returns type="Number">Number. The hours (0-23).</returns>
	},
	__getUTCMilliseconds:  {
		/// <summary>Gets the milliseconds component of this DateTime instance, according to universal time.</summary>
		/// <returns type="Number">Number. The milliseconds (0-999).</returns>
	},
	__getUTCMinutes:  {
		/// <summary>Gets the minutes component of this DateTime instance, according to universal time.</summary>
		/// <returns type="Number">Number. The minutes (0-59).</returns>
	},
	__getUTCMonth:  {
		/// <summary>Gets the month component of this DateTime instance, according to universal time.</summary>
		/// <returns type="Number">Number. The month (0-11). 0 is January, 1 is February, etc.</returns>
	},
	__getUTCSeconds:  {
		/// <summary>Gets the seconds component of this DateTime instance, according to universal time.</summary>
		/// <returns type="Number">Number. The seconds (0-59).</returns>
	},
	__setDate: day {
		/// <summary>Sets the day component of this DateTime instance.</summary>
		/// <param name="day" type="Number">Number. The day of month (1-31).</param>
	},
	__setFullYear: year, month, day {
		/// <summary>Sets the year component of this DateTime instance.</summary>
		/// <param name="year" type="Number">Number. A four-digit value representing the year.</param>
		/// <param name="month" type="Number" optional="true">Optional. Number. An integer between 0 and 11 representing the month.</param>
		/// <param name="day" type="Number" optional="true">Optional. Number. An integer between 1 and 31 representing the date.</param>
	},
	__setHours: hour, min, sec, millisec {
		/// <summary>Sets the hours component of this DateTime instance.</summary>
		/// <param name="hour" type="Number">Number. An integer between 0 and 23 representing the hour.</param>
		/// <param name="min" type="Number" optional="true">Optional. Number. An integer between 0 and 59 representing the minutes.</param>
		/// <param name="sec" type="Number" optional="true">Optional. Number. An integer between 0 and 59 representing the seconds.</param>
		/// <param name="millisec" type="Number" optional="true">Optional. Number. An integer between 0 and 999 representing the milliseconds.</param>
	},
	__setMilliseconds: millisec {
		/// <summary>Sets the milliseconds component of this DateTime instance.</summary>
		/// <param name="millisec" type="Number">Number. An integer between 0 and 999 representing the milliseconds.</param>
	},
	__setMinutes: min, sec, millisec {
		/// <summary>Sets the minutes component of this DateTime instance.</summary>
		/// <param name="min" type="Number">Number. An integer between 0 and 59 representing the minutes.</param>
		/// <param name="sec" type="Number" optional="true">Optional. Number. An integer between 0 and 59 representing the seconds.</param>
		/// <param name="millisec" type="Number" optional="true">Optional. Number. An integer between 0 and 999 representing the milliseconds.</param>
	},
	__setSeconds: sec, millisec {
		/// <summary>Sets the seconds component of this DateTime instance.</summary>
		/// <param name="sec" type="Number">Number. An integer between 0 and 59 representing the seconds.</param>
		/// <param name="millisec" type="Number" optional="true">Optional. Number. An integer between 0 and 999 representing the milliseconds.</param>
	},
	__setTime: millisec {
		/// <summary>Sets a date and time by adding or subtracting a specified number of milliseconds to/from midnight 1 Jan 1970.</summary>
		/// <param name="millisec" type="Number">Number. The number of milliseconds to be added to, or subtracted from, midnight 1 Jan 1970.</param>
	},
	__setUTCDate: day {
		/// <summary>Sets the day component of this DateTime instance, according to universal time.</summary>
		/// <param name="day" type="Number">Number. The day of month (1-31).</param>
	},
	__setUTCFullYear: year, month, day {
		/// <summary>Sets the year component of this DateTime instance, according to universal time.</summary>
		/// <param name="year" type="Number">Number. A four-digit value representing the year.</param>
		/// <param name="month" type="Number" optional="true">Optional. Number. An integer between 0 and 11 representing the month.</param>
		/// <param name="day" type="Number" optional="true">Optional. Number. An integer between 1 and 31 representing the date.</param>
	},
	__setUTCHours: hour, min, sec, millisec {
		/// <summary>Sets the hours component of this DateTime instance, according to universal time.</summary>
		/// <param name="hour" type="Number">Number. An integer between 0 and 23 representing the hour.</param>
		/// <param name="min" type="Number" optional="true">Optional. Number. An integer between 0 and 59 representing the minutes.</param>
		/// <param name="sec" type="Number" optional="true">Optional. Number. An integer between 0 and 59 representing the seconds.</param>
		/// <param name="millisec" type="Number" optional="true">Optional. Number. An integer between 0 and 999 representing the milliseconds.</param>
	},
	__setUTCMilliseconds: millisec {
		/// <summary>Sets the milliseconds component of this DateTime instance, according to universal time.</summary>
		/// <param name="millisec" type="Number">Number. An integer between 0 and 999 representing the milliseconds.</param>
	},
	__setUTCMinutes: min, sec, millisec {
		/// <summary>Sets the minutes component of this DateTime instance, according to universal time.</summary>
		/// <param name="min" type="Number">Number. An integer between 0 and 59 representing the minutes.</param>
		/// <param name="sec" type="Number" optional="true">Optional. Number. An integer between 0 and 59 representing the seconds.</param>
		/// <param name="millisec" type="Number" optional="true">Optional. Number. An integer between 0 and 999 representing the milliseconds.</param>
	},
	__setUTCSeconds: sec, millisec {
		/// <summary>Sets the seconds component of this DateTime instance, according to universal time.</summary>
		/// <param name="sec" type="Number">Number. An integer between 0 and 59 representing the seconds.</param>
		/// <param name="millisec" type="Number" optional="true">Optional. Number. An integer between 0 and 999 representing the milliseconds.</param>
	},
	__toDateString:  {
		/// <summary>Converts the date component of this DateTime instance to a readable string.</summary>
		/// <returns type="String">String. A readable string representation of the date component of this DateTime instance.</returns>
	},
	__toLocaleDateString:  {
		/// <summary>Converts the date component of this DateTime instance to a readable string, using locale conventions.</summary>
		/// <returns type="String">String. A readable locale string representation of the date component of this DateTime instance.</returns>
	},
	__toLocaleString:  {
		/// <summary>Converts this DateTime instance to a readable string, using locale conventions.</summary>
		/// <returns type="String">String. A readable locale string representation of this DateTime instance.</returns>
	},
	__toLocaleTimeString:  {
		/// <summary>Converts the time component of this DateTime instance to a readable string, using locale conventions.</summary>
		/// <returns type="String">String. A readable locale string representation of the time component of this DateTime instance.</returns>
	},
	__toString:  {
		/// <summary>Converts this DateTime instance to a readable string.</summary>
		/// <returns type="String">String. A readable string representation of this DateTime instance.</returns>
	},
	__toTimeString:  {
		/// <summary>Converts the time component of this DateTime instance to a readable string.</summary>
		/// <returns type="String">String. A readable string representation of the time component of this DateTime instance.</returns>
	},
	__toUTCString:  {
		/// <summary>Converts this DateTime instance to a readable string, according to universal time.</summary>
		/// <returns type="String">String. A readable string representation of this DateTime instance.</returns>
	},
	__valueOf:  {
		/// <summary>Represents the primitive value of this DateTime object.</summary>
		/// <returns type="Number">Number. The primitive value of this DateTime object.</returns>
	},
	addDays:  {
	},
	addHours:  {
	},
	addMilliseconds:  {
	},
	addMinutes:  {
	},
	addMonths:  {
	},
	addSeconds:  {
	},
	addYears:  {
	},
	clone:  {
		/// <summary>Returns a copy of the current DateTime object.</summary>
		/// <returns type="DateTime">The cloned DateTime object.</returns>
	},
	combine: date, time {
		/// <summary>Combines the date component of a DateTime object and the time component of another DateTime object into a new DateTime object.</summary>
		/// <param name="date" type="DateTime">DateTime. A DateTime object to get the date part from.</param>
		/// <param name="time" type="DateTime">DateTime. A DateTime object to get the time part from.</param>
		/// <returns type="DateTime">The new combined DateTime object.</returns>
	},
	compareTo: date {
		/// <summary>Compares the current DateTime instance with another DateTime object and returns an integer that indicates whether the current instance precedes, follows, or occurs in the same position in the sort order as the other object.</summary>
		/// <param name="date" type="DateTime">DateTime. A DateTime object to compare with this instance.</param>
		/// <returns type="Number">Number. A value that indicates the relative order of the DateTime objects being compared.</returns>
	},
	daysBetween: date1, date2 {
		/// <summary>Returns the number of days between two DateTime instances.</summary>
		/// <param name="date1" type="DateTime">DateTime.&#160;The first&#160;DateTime instance.</param>
		/// <param name="date2" type="DateTime">DateTime.&#160;The second&#160;DateTime instance.</param>
		/// <returns type="Number">Number. The number of days.</returns>
	},
	equals: date {
		/// <summary>Returns a value indicating whether two DateTime objects are equal.</summary>
		/// <param name="date" type="DateTime">DateTime. The DateTime object to compare with.</param>
		/// <returns type="Boolean">Boolean. True if the values are equal, otherwise false.</returns>
	},
	fromDateParts: year, month, day, hours, minutes, seconds, milliseconds {
		/// <summary>Creates a new DateTime object, by specifying its different date and time components.</summary>
		/// <param name="year" type="Number">Number. The year component.</param>
		/// <param name="month" type="Number">Number. The month component (0-11).</param>
		/// <param name="day" type="Number" optional="true">Optional. Number. The day component (1-31). If not provided, a default value of 1 will be used.</param>
		/// <param name="hours" type="Number" optional="true">Optional. Number. The hours component (0-23). If not provided, a default value of 0 will be used.</param>
		/// <param name="minutes" type="Number" optional="true">Optional. Number. The minutes component (0-59). If not provided, a default value of 0 will be used.</param>
		/// <param name="seconds" type="Number" optional="true">Optional. Number. The seconds component (0-59). If not provided, a default value of 0 will be used.</param>
		/// <param name="milliseconds" type="Number" optional="true">Optional. Number. The milliseconds component (0-999). If not provided, a default value of 0 will be used.</param>
		/// <returns type="DateTime">The new DateTime object, or null if a DateTime instance cannot be created from the provided values.</returns>
	},
	fromDateString: dateString {
		/// <summary>Creates a new DateTime object from a provided date string.</summary>
		/// <param name="dateString" type="String">String. The date string to create the DateTime from.</param>
		/// <returns type="DateTime">DateTime. The new DateTime object, or null if a DateTime instance cannot be created from the provided string.</returns>
	},
	fromMilliseconds: milliseconds {
		/// <summary>Creates a new DateTime object from the number of milliseconds since Jan 1st 1970.</summary>
		/// <param name="milliseconds" type="Number">Number. The number of milliseconds since Jan 1st 1970;</param>
		/// <returns type="DateTime">DateTime. The new DateTime object, or null if a DateTime instance cannot be created from the provided value.</returns>
	},
	getDate:  {
		/// <summary>For internal use only.</summary>
		/// <returns type="Object"></returns>
	},
	getDayOfMonth: date {
		/// <summary>Returns the day of the month of the specified DateTime.</summary>
		/// <param name="date" type="DateTime">A DateTime instance.</param>
		/// <returns type="Number">Number. The day of the month.</returns>
	},
	getDayOfWeek: date {
		/// <summary>Returns the day of the week of the specified DateTime.</summary>
		/// <param name="date" type="DateTime">A DateTime instance.</param>
		/// <returns type="Number">Number. The day of the week.</returns>
	},
	getDaysInMonth:  {
	},
	getMonth:  {
	},
	getWeekFirstDate: date, formatInfo {
		/// <summary>Returns the beginning of the week of the specified DateTime.</summary>
		/// <param name="date" type="DateTime">A DateTime instance.</param>
		/// <param name="formatInfo" type="Object" optional="true">Optional. Object. The formatInfo object.</param>
		/// <returns type="DateTime">A DateTime instance specifying the beginning of the week.</returns>
	},
	getYear: date {
		/// <summary>Returns the year component of the specified DateTime.</summary>
		/// <param name="date" type="DateTime">DateTime. A DateTime instance.</param>
		/// <returns type="Number">Number. The year.</returns>
	},
	greaterThan: date {
		/// <summary>Checks if this DateTime object is greater than the specified DateTime object.</summary>
		/// <param name="date" type="DateTime">The DateTime object to compare with.</param>
		/// <returns type="Boolean">Boolean. true if this value is greater than the specified value, otherwise false.</returns>
	},
	greaterThanOrEqual: date {
		/// <summary>Checks if this DateTime object is greater than or equal to the specified DateTime object.</summary>
		/// <param name="date" type="DateTime">The DateTime object to compare with.</param>
		/// <returns type="Boolean">Boolean. true if this value is greater than or equal to the specified value, otherwise false.</returns>
	},
	hoursBetween: date1, date2 {
		/// <summary>Returns the number of hours between two DateTime instances.</summary>
		/// <param name="date1" type="DateTime">DateTime. The first DateTime instance.</param>
		/// <param name="date2" type="DateTime">DateTime. The second &#160;DateTime instance.</param>
		/// <returns type="Number">Number. The number of hours.</returns>
	},
	isLeapYear:  {
		/// <summary>Returns a value indicating whether the year of the current DateTime instance is a leap year.</summary>
		/// <returns type="Boolean">Boolean. True if it is a leap year, otherwise false.</returns>
	},
	lessThan: date {
		/// <summary>Checks if this DateTime object is less than the specified DateTime object.</summary>
		/// <param name="date" type="DateTime">The DateTime object to compare with.</param>
		/// <returns type="Boolean">Boolean. true if this value is less than the specified value, otherwise false.</returns>
	},
	lessThanOrEqual: date {
		/// <summary>Checks if this DateTime object is less than or equal to the specified DateTime object.</summary>
		/// <param name="date" type="DateTime">DateTime. The DateTime object to compare with.</param>
		/// <returns type="Boolean">Boolean. true if this value is less than or equal to the specified value, otherwise false.</returns>
	},
	maxDate: date1, date2 {
		/// <summary>Returns the latter of two DateTime objects.</summary>
		/// <param name="date1" type="DateTime">DateTime. The first&#160;DateTime object.</param>
		/// <param name="date2" type="DateTime">DateTime. The second&#160;DateTime object.</param>
		/// <returns type="DateTime">The latter of two DateTime objects.</returns>
	},
	maxValue:  {
		/// <summary>Returns the highest possible DateTime value.</summary>
		/// <returns type="DateTime">The highest possible DateTime value.</returns>
	},
	millisecondsBetween: date1, date2 {
		/// <summary>Returns the number of milliseconds between two DateTime instances.</summary>
		/// <param name="date1" type="DateTime">DateTime. The first&#160;DateTime instance.</param>
		/// <param name="date2" type="DateTime">DateTime. The second&#160;DateTime instance.</param>
		/// <returns type="Number">Number. The number of milliseconds.</returns>
	},
	minDate: date1, date2 {
		/// <summary>Returns the former of two DateTime objects.</summary>
		/// <param name="date1" type="DateTime">DateTime. The first&#160;DateTime object.</param>
		/// <param name="date2" type="DateTime">DateTime. The second&#160;DateTime object.</param>
		/// <returns type="DateTime">The former of two DateTime objects.</returns>
	},
	minutesBetween: date1, date2 {
		/// <summary>Returns the number of minutes between two DateTime instances.</summary>
		/// <param name="date1" type="DateTime">DateTime. The first&#160;DateTime instance.</param>
		/// <param name="date2" type="DateTime">DateTime.&#160;The second&#160;DateTime instance.</param>
		/// <returns type="Number">Number. The number of minutes.</returns>
	},
	minValue:  {
		/// <summary>Returns the lowest possible DateTime value.</summary>
		/// <returns type="DateTime">The lowest possible DateTime value.</returns>
	},
	monthsBetween: date1, date2 {
		/// <summary>Returns the number of months between two DateTime instances.</summary>
		/// <param name="date1" type="DateTime">DateTime. The first&#160;DateTime instance.</param>
		/// <param name="date2" type="DateTime">DateTime. The second&#160;DateTime instance.</param>
		/// <returns type="Number">Number. The number of months.</returns>
	},
	now:  {
		/// <summary>Returns a DateTime object representing the current DateTime.</summary>
		/// <returns type="DateTime">The DateTime object representing the current DateTime.</returns>
	},
	secondsBetween: date1, date2 {
		/// <summary>Returns the number of seconds between two DateTime instances.</summary>
		/// <param name="date1" type="DateTime">DateTime. The first DateTime instance.</param>
		/// <param name="date2" type="DateTime">DateTime. The second DateTime instance.</param>
		/// <returns type="Number">Number. The number of seconds.</returns>
	},
	subtract:  {
	},
	today:  {
		/// <summary>Returns a DateTime object representing the current Date.</summary>
		/// <returns type="DateTime">The DateTime object representing the current Date.</returns>
	},
	toString: format, formatInfo {
		/// <summary>Returns a string representation of the current DateTime object.</summary>
		/// <param name="format" type="String" optional="true">Optional. The DateTime format used for the string representation.</param>
		/// <param name="formatInfo" type="Object" optional="true">Optional. Object. The formatInfo object used for the string representation.</param>
		/// <returns type="String">The string representation of the current DateTime object.</returns>
	},
	valueOf:  {
		/// <summary>Represents the primitive value of this DateTime object.</summary>
		/// <returns type="Number">The primitive value of this DateTime object in milliseconds.</returns>
	},
	weeksBetween: date1, date2 {
		/// <summary>Returns the number of weeks between two DateTime instances.</summary>
		/// <param name="date1" type="DateTime">DateTime. The first&#160;DateTime instance.</param>
		/// <param name="date2" type="DateTime">DateTime. The second&#160;DateTime instance.</param>
		/// <returns type="Number">Number. The number of weeks.</returns>
	},
	yearsBetween: date1, date2 {
		/// <summary>Returns the number of years between two DateTime instances.</summary>
		/// <param name="date1" type="DateTime">DateTime. The first DateTime instance.</param>
		/// <param name="date2" type="DateTime">DateTime. The second DateTime instance.</param>
		/// <returns type="Number">Number. The number of years.</returns>
	}
};
MindFusion.Scheduling.DateTime.__class = true;

MindFusion.Scheduling.DayOfWeek.prototype = {
	Friday: 0,
	Monday: 1,
	Saturday: 2,
	Sunday: 3,
	Thursday: 4,
	Tuesday: 5,
	Wednesday: 6
};
MindFusion.Scheduling.DayOfWeek.__enum = true;

MindFusion.Scheduling.DayOfWeekFormat.prototype = {
	Abbreviated: 0,
	Full: 1,
	SingleLetter: 2
};
MindFusion.Scheduling.DayOfWeekFormat.__enum = true;

MindFusion.Scheduling.DayOfWeekType.prototype = {
	AnyDay: 0,
	Friday: 1,
	Monday: 2,
	Saturday: 3,
	Sunday: 4,
	Thursday: 5,
	Tuesday: 6,
	Wednesday: 7,
	Weekend: 8,
	Workday: 9
};
MindFusion.Scheduling.DayOfWeekType.__enum = true;

MindFusion.Scheduling.DaysOfWeek.prototype = {
	All: 0,
	Friday: 1,
	Monday: 2,
	None: 3,
	Saturday: 4,
	Sunday: 5,
	Thursday: 6,
	Tuesday: 7,
	Wednesday: 8
};
MindFusion.Scheduling.DaysOfWeek.__enum = true;

MindFusion.Scheduling.Dictionary.prototype = {
	contains: key {
		/// <summary>Determines whether the dictionary contains a specific key.</summary>
		/// <param name="key" type="TKey">TKey. The key to locate in the dictionary.</param>
		/// <returns type="Boolean">Boolean. true if the element exists in the collection, otherwise false.</returns>
	},
	get: key {
		/// <summary>Gets the value associated with the specified key within the dictionary.</summary>
		/// <param name="key" type="TKey">TKey. The key whose value to get.</param>
		/// <returns type="Object">Object. The item associated with this key.</returns>
	},
	remove: key {
		/// <summary>Removes the element with the specified key from the dictionary.</summary>
		/// <param name="key" type="TKey">TKey. The key of the element to remove.</param>
	},
	set: key, value {
		/// <summary>Associates the specified value with the specified key within the dictionary.</summary>
		/// <param name="key" type="TKey">TKey. The key to associate the value with.</param>
		/// <param name="value" type="TValue">TValue. The value to associate.</param>
	}
};
MindFusion.Scheduling.Dictionary.__class = true;

MindFusion.Scheduling.EmptyEventArgs.prototype = {
};
MindFusion.Scheduling.EmptyEventArgs.__class = true;

MindFusion.Scheduling.EventArgs.prototype = {
};
MindFusion.Scheduling.EventArgs.__class = true;

MindFusion.Scheduling.EventDispatcher.prototype = {
	addEventListener:  {
		/// <summary>Subcribes an event listener to this event.</summary>
	},
	raiseEvent:  {
		/// <summary>Raises this event.</summary>
	},
	removeEventListener:  {
		/// <summary>Removes an event listener from this event.</summary>
	}
};
MindFusion.Scheduling.EventDispatcher.__class = true;

MindFusion.Scheduling.FormEventArgs.prototype = {
};
MindFusion.Scheduling.FormEventArgs.__class = true;

MindFusion.Scheduling.GroupType.prototype = {
	FilterByContacts: 0,
	FilterByLocations: 1,
	FilterByResources: 2,
	FilterByTasks: 3,
	GroupByContacts: 4,
	GroupByLocations: 5,
	GroupByResources: 6,
	GroupByTasks: 7,
	None: 8
};
MindFusion.Scheduling.GroupType.__enum = true;

MindFusion.Scheduling.HeaderEventArgs.prototype = {
};
MindFusion.Scheduling.HeaderEventArgs.__class = true;

MindFusion.Scheduling.HeaderType.prototype = {
	Cell: 0,
	DayNames: 1,
	Group: 2,
	Main: 3,
	Timeline: 4,
	WeekNumbers: 5
};
MindFusion.Scheduling.HeaderType.__enum = true;

MindFusion.Scheduling.HorizontalHeaderStyle.prototype = {
	Bottom: 0,
	None: 1,
	Top: 2
};
MindFusion.Scheduling.HorizontalHeaderStyle.__enum = true;

MindFusion.Scheduling.IEnumerable.prototype = {
	add: item {
		/// <summary>Adds an object to the end of the collection.</summary>
		/// <param name="item" type="Object">Object. The object to add.</param>
	},
	addRange: range {
		/// <summary>Adds a range of elements to the end of the collection.</summary>
		/// <param name="range" type="Array">Array. The range to add.</param>
	},
	clear:  {
		/// <summary>Clears the collection.</summary>
	},
	clone:  {
		/// <summary>Creates a copy of the collection.</summary>
		/// <returns type="IEnumerable">IEnumerable. A copy of this collection.</returns>
	},
	contains: item {
		/// <summary>Checks if the given element is present in the collection.</summary>
		/// <param name="item" type="Object">Object. The object to check for.</param>
		/// <returns type="Boolean">Boolean. True if the element is found, otherwise false.</returns>
	},
	copyTo: destination, length, sourceIndex, destinationIndex {
		/// <summary>Copies a range of elements from this collection to a destination collection.</summary>
		/// <param name="destination" type="IEnumerable">IEnumerable. The destination collection.</param>
		/// <param name="length" type="Number">Number. The length of the range to copy.</param>
		/// <param name="sourceIndex" type="Number" optional="true">Optional. Number. The starting index of the range to copy.</param>
		/// <param name="destinationIndex" type="Number" optional="true">Optional. Number. The index at which the range should be copied.</param>
	},
	count:  {
		/// <summary>Gets the number of elements.</summary>
		/// <returns type="Number">Number. The number of elements.</returns>
	},
	forEach: callback, context {
		/// <summary>Executes a provided function once for each element.</summary>
		/// <param name="callback" type="function">function. A function to execute for each element.</param>
		/// <param name="context" type="Object">Object. The invokation context.</param>
	},
	indexOfItem: obj, fromIndex {
		/// <summary>Gets the index of a given object in a collection.</summary>
		/// <param name="obj" type="Object">Object. The object to look for.</param>
		/// <param name="fromIndex" type="Number" optional="true">Optional. Number. The starting index to search from.</param>
		/// <returns type="Number">Number. The index of the object, or -1 if the object is not present in the collection.</returns>
	},
	insert: index, item {
		/// <summary>Adds an element to the collection at the specified index.</summary>
		/// <param name="index" type="Number">Number. The index.</param>
		/// <param name="item" type="Object">Object. The object to add.</param>
	},
	item: index {
		/// <summary>Gets the element at the given index.</summary>
		/// <param name="index" type="Number">Number. The index.</param>
		/// <returns type="Object">Object. The element at the given index.</returns>
	},
	items:  {
		/// <summary>Gets the collection as an array.</summary>
		/// <returns type="Array">Array. The underlying array data structure of the collection.</returns>
	},
	max: selector {
		/// <summary>Invokes a transform function on each item and returns the maximum value in a sequence of numbers.</summary>
		/// <param name="selector" type="function">function. A transform function to invoke on each element.</param>
		/// <returns type="Number">Number. The maximum number in the sequence.</returns>
	},
	min: selector {
		/// <summary>Invokes a transform function on each item and returns the minimum value in a sequence of numbers.</summary>
		/// <param name="selector" type="function">function. A transform function to invoke on each element.</param>
		/// <returns type="Number">Number. The minimum number in the sequence.</returns>
	},
	remove: item {
		/// <summary>Removes an element from the collection.</summary>
		/// <param name="item" type="Object">Object. The object to remove.</param>
	},
	removeAt: index {
		/// <summary>Removes the element at the given index.</summary>
		/// <param name="index" type="Number">Number. The index.</param>
	},
	removeRange: index, count {
		/// <summary>Removes a range of elements starting from the given index.</summary>
		/// <param name="index" type="Number">Number. The starting index of the range.</param>
		/// <param name="count" type="Number">Number. The length of the range.</param>
	},
	reverse:  {
		/// <summary>Gets the collection as an array in reverse order.</summary>
		/// <returns type="Array">Array. The underlying array data structure of the collection in reverse order.</returns>
	},
	select: selector {
		/// <summary>Projects each element of a sequence into a new form.</summary>
		/// <param name="selector" type="function">function. A transform function to invoke on each element.</param>
		/// <returns type="IEnumerable">IEnumerable. A collection whose elements are the result of invoking the transform function on each element.</returns>
	},
	sort: compareFn {
		/// <summary>Sorts the underlying array.</summary>
		/// <param name="compareFn" type="function" optional="true">Optional. function. The comparing function.</param>
	},
	sum: selector {
		/// <summary>Computes the sum of the sequence of number values that are obtained by invoking a transform function on each element.</summary>
		/// <param name="selector" type="function">function. A transform function to invoke on each element.</param>
		/// <returns type="Number">Number. The sum of the number values in the sequence.</returns>
	},
	toArray:  {
		/// <summary>Returns a new Object array, containing the contents of the collection.</summary>
		/// <returns type="Array">Array. The array.</returns>
	},
	where: selector {
		/// <summary>Filters a sequence of values based on a predicate.</summary>
		/// <param name="selector" type="function">function. A function to test each element for a condition.</param>
		/// <returns type="IEnumerable">IEnumerable. An collection that contains elements from the input sequence that satisfy the condition.</returns>
	},
	first:  {
		/// <summary>Returns the first element in the collection.</summary>
		/// <returns type="Object">Object. The first element in the collection.</returns>
	},
	last:  {
		/// <summary>Returns the last element in the collection.</summary>
		/// <returns type="Object">Object. The last element in the collection.</returns>
	}
};
MindFusion.Scheduling.IEnumerable.__class = true;

MindFusion.Scheduling.Item.prototype = {
	clone:  {
		/// <summary>Creates an exact copy of this item.</summary>
		/// <returns type="Item">Item. An item, identical to this one.</returns>
	},
	fromJson: json {
		/// <summary>Deserializes this item from a JSON string.</summary>
		/// <param name="json" type="String">String. A string created by the toJson method.</param>
	},
	loadFromXml: element, context {
		/// <summary>Loads the item content from an XML element.</summary>
		/// <param name="element" type="Element">Element. An XML DOM element that contains the item's serialized content.</param>
		/// <param name="context" type="XmlPersistContext">XmlPersistContext. An object providing contextual information about the serialization process and some helper serialization methods.</param>
	},
	saveToXml: element, context {
		/// <summary>Saves the item content into an XML element.</summary>
		/// <param name="element" type="Element">Element. An XML DOM element that will contain the item's data.</param>
		/// <param name="context" type="XmlPersistContext">XmlPersistContext. An object providing contextual information about the serialization process and some helper serialization methods.</param>
	},
	toJson:  {
		/// <summary>Serializes this item into a JSON string.</summary>
		/// <returns type="String">String. A string containing the item's JSON representation.</returns>
	}
};
MindFusion.Scheduling.Item.__class = true;

MindFusion.Scheduling.ItemEventArgs.prototype = {
};
MindFusion.Scheduling.ItemEventArgs.__class = true;

MindFusion.Scheduling.ItemModifiedEventArgs.prototype = {
};
MindFusion.Scheduling.ItemModifiedEventArgs.__class = true;

MindFusion.Scheduling.ItemModifyAction.prototype = {
	Clone: 0,
	Create: 1,
	Delete: 2,
	Drag: 3,
	Edit: 4,
	InplaceEdit: 5,
	Resize: 6
};
MindFusion.Scheduling.ItemModifyAction.__enum = true;

MindFusion.Scheduling.ItemModifyingEventArgs.prototype = {
};
MindFusion.Scheduling.ItemModifyingEventArgs.__class = true;

MindFusion.Scheduling.ItemSettings.prototype = {
	copyFrom: settings {
		/// <summary>Copies the&#160;property values from another object.</summary>
		/// <param name="settings" type="Object">Object. An object containing property values.</param>
	}
};
MindFusion.Scheduling.ItemSettings.__class = true;

MindFusion.Scheduling.Keys.prototype = {
	Alt: 0,
	Control: 1,
	None: 2,
	Shift: 3
};
MindFusion.Scheduling.Keys.__enum = true;

MindFusion.Scheduling.List.prototype = {
};
MindFusion.Scheduling.List.__class = true;

MindFusion.Scheduling.ListSettings.prototype = {
	copyFrom: settings {
		/// <summary>Copies property values from another object.</summary>
		/// <param name="settings" type="Object">Object. An object containing property values.</param>
	}
};
MindFusion.Scheduling.ListSettings.__class = true;

MindFusion.Scheduling.Location.prototype = {
	fromJson: json {
		/// <summary>Deserializes this location from a JSON string.</summary>
		/// <param name="json" type="String">String. A string created by the toJson method.</param>
	},
	loadFromXml: element, context {
		/// <summary>Loads the location content from an XML element.</summary>
		/// <param name="element" type="Element">Element. An XML DOM element that contains the location's serialized content.</param>
		/// <param name="context" type="XmlPersistContext">XmlPersistContext. An object providing contextual information about the serialization process and some helper serialization methods.</param>
	},
	saveToXml: element, context {
		/// <summary>Saves the location content into an XML element.</summary>
		/// <param name="element" type="Element">Element. An XML DOM element that will contain the location's data.</param>
		/// <param name="context" type="XmlPersistContext">XmlPersistContext. An object providing contextual information about the serialization process and some helper serialization methods.</param>
	},
	toJson:  {
		/// <summary>Serializes this location into a JSON string.</summary>
		/// <returns type="String">String. A string containing the Location's JSON representation.</returns>
	}
};
MindFusion.Scheduling.Location.__class = true;

MindFusion.Scheduling.MainHeaderStyle.prototype = {
	Buttons: 0,
	None: 1,
	Title: 2
};
MindFusion.Scheduling.MainHeaderStyle.__enum = true;

MindFusion.Scheduling.MonthlyRecurrence.prototype = {
	ByDayNumber: 0,
	ByDayType: 1
};
MindFusion.Scheduling.MonthlyRecurrence.__enum = true;

MindFusion.Scheduling.MonthRangeSettings.prototype = {
	copyFrom: settings {
		/// <summary>Copies property values from another object.</summary>
		/// <param name="settings" type="Object">Object. An object containing property values.</param>
	}
};
MindFusion.Scheduling.MonthRangeSettings.__class = true;

MindFusion.Scheduling.MonthSettings.prototype = {
	copyFrom: settings {
		/// <summary>Copies property values from another object.</summary>
		/// <param name="settings" type="Object">Object. An object containing property values.</param>
	}
};
MindFusion.Scheduling.MonthSettings.__class = true;

MindFusion.Scheduling.NotifyCollectionChangedAction.prototype = {
};
MindFusion.Scheduling.NotifyCollectionChangedAction.__class = true;

MindFusion.Scheduling.NotifyCollectionChangedEventArgs.prototype = {
};
MindFusion.Scheduling.NotifyCollectionChangedEventArgs.__class = true;

MindFusion.Scheduling.NotifyCollectionChangedEventDispatcher.prototype = {
};
MindFusion.Scheduling.NotifyCollectionChangedEventDispatcher.__class = true;

MindFusion.Scheduling.NotifyCollectionChangingEventArgs.prototype = {
};
MindFusion.Scheduling.NotifyCollectionChangingEventArgs.__class = true;

MindFusion.Scheduling.NotifyCollectionChangingEventDispatcher.prototype = {
};
MindFusion.Scheduling.NotifyCollectionChangingEventDispatcher.__class = true;

MindFusion.Scheduling.ObservableCollection.prototype = {
	add: item {
		/// <summary>Adds an object to the collection.</summary>
		/// <param name="item" type="Object">Object. The item to add.</param>
	},
	clear:  {
		/// <summary>Clears the collection.</summary>
	},
	onCollectionChanged: args {
		/// <summary>Raises the collectionChanged event.</summary>
		/// <param name="args" type="NotifyCollectionChangedEventArgs">An instance of the NotifyCollectionChangedEventArgs class.</param>
	},
	onCollectionChanging: args {
		/// <summary>Raises the collectionChanging validation event.</summary>
		/// <param name="args" type="NotifyCollectionChangingEventArgs">An instance of the NotifyCollectionChangingEventArgs class.</param>
	},
	onPropertyChanged: args {
		/// <summary>Raises the propertyChanged event.</summary>
		/// <param name="args" type="PropertyChangedEventArgs">An instance of the PropertyChangedEventArgs class.</param>
	},
	remove: item {
		/// <summary>Deletes an object from the collection.</summary>
		/// <param name="item" type="TObject">TObject. The item to remove.</param>
	},
	removeAt: itemIndex {
		/// <summary>Delete the element at the specified index.</summary>
		/// <param name="itemIndex" type="Number">Number. The index to remove at.</param>
	},
	removeRange: index, count {
		/// <summary>Deletes a range of elements from the collection.</summary>
		/// <param name="index" type="Number">Number. The starting index of the range to remove.</param>
		/// <param name="count" type="Number">Number. The length of the range to remove.</param>
	},
	insert: index, item {
		/// <summary>Inserts the specified&#160;element to the collection at the specified index.</summary>
		/// <param name="index" type="Number">Number. The index.</param>
		/// <param name="item" type="Object">Object. The object to add.</param>
	}
};
MindFusion.Scheduling.ObservableCollection.__class = true;

MindFusion.Scheduling.Occurrence.prototype = {
	First: 0,
	Fourth: 1,
	Last: 2,
	Second: 3,
	Third: 4
};
MindFusion.Scheduling.Occurrence.__enum = true;

MindFusion.Scheduling.Orientation.prototype = {
	Horizontal: 0,
	Vertical: 1
};
MindFusion.Scheduling.Orientation.__enum = true;

MindFusion.Scheduling.PropertyChangedEventArgs.prototype = {
};
MindFusion.Scheduling.PropertyChangedEventArgs.__class = true;

MindFusion.Scheduling.PropertyChangedEventDispatcher.prototype = {
};
MindFusion.Scheduling.PropertyChangedEventDispatcher.__class = true;

MindFusion.Scheduling.PropertyEventArgs.prototype = {
};
MindFusion.Scheduling.PropertyEventArgs.__class = true;

MindFusion.Scheduling.Recurrence.prototype = {
	applyPattern: recurrence {
		/// <summary>Copies the property values of the specified Recurrence object asvalues for the properties of this Recurrence object.This method behaves similarly to the clone method but does not create a new object.</summary>
		/// <param name="recurrence" type="Recurrence">Recurrence. The Recurrence object whose fields to copy.</param>
	},
	associateWith: master {
		/// <summary>Associates the Recurrence with the specified item. If the supplied reference is null,the recurrence is detached from the currently associated master.</summary>
		/// <param name="master" type="Item">Item. The item to associate with.</param>
	},
	clearExceptions:  {
		/// <summary>Removes all exceptions of this Recurrence.</summary>
	},
	clone:  {
		/// <summary>Creates an exact copy of this Recurrence object.</summary>
	},
	fromJson: json {
		/// <summary>Deserializes this Recurrence from a JSON string.</summary>
		/// <param name="json" type="String">String. A string created by the toJson method.</param>
	},
	generateItems: startDate, endDate {
		/// <summary>Creates occurrence items for this Recurrence in the specified date range.</summary>
		/// <param name="startDate" type="DateTime">DateTime. The range start date.</param>
		/// <param name="endDate" type="DateTime">DateTime. The range end date.</param>
		/// <returns type="Array">Array. A collection of Item instances representing each occurrence of the recurrent event in the specified date range.</returns>
	},
	getEndDate:  {
		/// <summary>Returns the end date for this Recurrence. The end date is calculated based on the specified repeat number if RecurrenceEnd is set to NumOccurrences.</summary>
		/// <returns type="DateTime">DateTime. The end date of the Recurrence if the recurrence is set to expire or DateTime.MaxValue otherwise.</returns>
	},
	getExceptions:  {
		/// <summary>Gets a list with all Recurrence exceptions.</summary>
		/// <returns type="Dictionary">Dictionary. A Dictionary with all the Exceptions.</returns>
	},
	getOccurrence: index, refIsDeleted, noException {
		/// <summary>Returns the occurrence with the specified index.</summary>
		/// <param name="index" type="Number">Number. The index of the occurrence to retrieve.</param>
		/// <param name="refIsDeleted" type="*">*. If the specified occurrence is an exception, this parameter indicates, upon function completion, whether the exception is deleted or not.</param>
		/// <param name="noException" type="Boolean">Boolean. Specifies whether to return the original item, in case this occurrence is an exception.</param>
		/// <returns type="Item">Item. A reference to the occurrence with the specified index or null, if there is no such occurrence.</returns>
	},
	loadFromXml: element, context {
		/// <summary>Loads the recurrence content from an XML element.</summary>
		/// <param name="element" type="Element">Element. An XML DOM element that contains the recurrence's serialized content.</param>
		/// <param name="context" type="MindFusion.Scheduling.XmlPersistContext">MindFusion.Scheduling.XmlPersistContext. An object providing contextual information about the serialization process and some helper serialization methods.</param>
	},
	markException: item, deleted, reminder {
		/// <summary>Marks the specified item as an exception in the Recurrence pattern.</summary>
		/// <param name="item" type="Item">Item. The item to be marked as an exception.</param>
		/// <param name="deleted" type="Boolean" optional="true">Optional. Boolean. Specifies whether the exception is created by deleting oneoccurrence from the recurrent pattern or by changing the occurrence time properties.</param>
		/// <param name="reminder" type="*">*. For internal use.</param>
	},
	removeException: item {
		/// <summary>Removes the exception associated with the specified item from the recurrence.</summary>
		/// <param name="item" type="Item">Item. The item whose exception to remove.</param>
	},
	samePatternAs: recurrence {
		/// <summary>Determines whether two Recurrence objects define the same recurrence pattern.</summary>
		/// <param name="recurrence" type="Recurrence">A Recurrence object to compare with this Recurrence.</param>
	},
	saveToXml: element, context {
		/// <summary>Saves the recurrence content into an XML element.</summary>
		/// <param name="element" type="Element">Element. An XML DOM element that will contain the recurrence's data.</param>
		/// <param name="context" type="MindFusion.Diagramming.XmlPersistContext">MindFusion.Diagramming.XmlPersistContext. An object providing contextual information about the serialization process and some helper serialization methods.</param>
	},
	toJson:  {
		/// <summary>Serializes this recurrence into a JSON string.</summary>
		/// <returns type="String">String. A string containing the recurrence's JSON representation.</returns>
	},
	toLocalizedString: formatInfo, localInfo {
		/// <summary>Returns a localized string that represents this Recurrence using the specified date and time formatting info and localization information.</summary>
		/// <param name="formatInfo" type="Object">Object. Specifies how date and time values are formatted and displayed.</param>
		/// <param name="localInfo" type="Object">Object. Specifies localized strings used in the representation.</param>
		/// <returns type="String">A localized string representation of this Recurrence object.</returns>
	}
};
MindFusion.Scheduling.Recurrence.__class = true;

MindFusion.Scheduling.RecurrenceEnd.prototype = {
	EndDate: 0,
	Never: 1,
	NumOccurrences: 2
};
MindFusion.Scheduling.RecurrenceEnd.__enum = true;

MindFusion.Scheduling.RecurrencePattern.prototype = {
	ByTimeInterval: 0,
	Daily: 1,
	Monthly: 2,
	Weekly: 3,
	Yearly: 4
};
MindFusion.Scheduling.RecurrencePattern.__enum = true;

MindFusion.Scheduling.RecurrenceState.prototype = {
	Exception: 0,
	Master: 1,
	None: 2,
	Occurrence: 3
};
MindFusion.Scheduling.RecurrenceState.__enum = true;

MindFusion.Scheduling.Reminder.prototype = {
	clone:  {
		/// <summary>Returns an exact copy of this Reminder object.</summary>
	},
	fromJson: json {
		/// <summary>Deserializes this Reminder from a JSON string.</summary>
		/// <param name="json" type="String">String. A string created by the toJson method.</param>
	},
	loadFromXml: element, context {
		/// <summary>Loads the Reminder content from an XML element.</summary>
		/// <param name="element" type="Element">Element. An XML DOM element that contains the reminder's serialized content.</param>
		/// <param name="context" type="XmlPersistContext">XmlPersistContext. An object providing contextual information about the serialization process and some helper serialization methods.</param>
	},
	saveToXml: element, context {
		/// <summary>Saves the Reminder content into an XML element.</summary>
		/// <param name="element" type="Element">Element. An XML DOM element that will contain the reminder's data.</param>
		/// <param name="context" type="XmlPersistContext">XmlPersistContext. An object providing contextual information about the serialization process and some helper serialization methods.</param>
	},
	toJson:  {
		/// <summary>Serializes this Reminder into a JSON string.</summary>
		/// <returns type="String">String. A string containing the reminder's JSON representation.</returns>
	}
};
MindFusion.Scheduling.Reminder.__class = true;

MindFusion.Scheduling.ReminderType.prototype = {
	Exact: 0,
	Leading: 1
};
MindFusion.Scheduling.ReminderType.__enum = true;

MindFusion.Scheduling.Resource.prototype = {
	fromJson: json {
		/// <summary>Deserializes this Resource from a JSON string.</summary>
		/// <param name="json" type="String">String. A string created by the toJson method.</param>
	},
	loadFromXml: element, context {
		/// <summary>Loads the Resource content from an XML element.</summary>
		/// <param name="element" type="Element">Element. An XML DOM element that contains the resource's serialized content.</param>
		/// <param name="context" type="XmlPersistContext">XmlPersistContext. An object providing contextual information about the serialization process and some helper serialization methods.</param>
	},
	saveToXml: element, context {
		/// <summary>Saves the Resource content into an XML element.</summary>
		/// <param name="element" type="Element">Element. An XML DOM element that will contain the resource's data.</param>
		/// <param name="context" type="XmlPersistContext">XmlPersistContext. An object providing contextual information about the serialization process and some helper serialization methods.</param>
	},
	toJson:  {
		/// <summary>Serializes this Resource into a JSON string.</summary>
		/// <returns type="String">String. A string containing the resource's JSON representation.</returns>
	}
};
MindFusion.Scheduling.Resource.__class = true;

MindFusion.Scheduling.ResourceViewSettings.prototype = {
	copyFrom: settings {
		/// <summary>Copies property values for this ResourceViewSettings instance from another object.</summary>
		/// <param name="settings" type="Object">Object. An object containing property values.</param>
	}
};
MindFusion.Scheduling.ResourceViewSettings.__class = true;

MindFusion.Scheduling.ResourceViewTimeline.prototype = {
	Bottom: 0,
	Middle: 1,
	Top: 2
};
MindFusion.Scheduling.ResourceViewTimeline.__enum = true;

MindFusion.Scheduling.Schedule.prototype = {
	copyFrom: settings {
		/// <summary>Copies property values for this Schedule&#160;from another object.</summary>
		/// <param name="settings" type="Object">Object. An object containing property values.</param>
	},
	fromJson: json {
		/// <summary>Deserializes the Schedule from a JSON string.</summary>
		/// <param name="json" type="String">String. A string created by the toJson method.</param>
	},
	fromXmlDocument: document {
		/// <summary>Loads schedule data from specified XML Document.</summary>
		/// <param name="document" type="Document">Document. A DOM Document object containing XML-serialized schedule data.</param>
	},
	getItemById: id, occurrenceIndex {
		/// <summary>Gets the item with the specified id.</summary>
		/// <param name="id" type="String">String. The id of the item.</param>
		/// <param name="occurrenceIndex" type="Number" optional="true">Optional. Number. The occurrence index of the item.</param>
		/// <returns type="Item">Item. The item; null if no item with the specified id has been found.</returns>
	},
	getMasterById: id {
		/// <summary>In a recurrence, gets the recurrence master item with the specified id.</summary>
		/// <param name="id" type="String">String. The id of the master item.</param>
		/// <returns type="Item">The item; null if no master item with the specified id has been found.</returns>
	},
	getResourceById: id {
		/// <summary>Returns a resource from a schedule resources collection by a specified id.</summary>
		/// <param name="id" type="String">String. The id of the resource.</param>
		/// <returns type="Resource">Resource. The resource object if found, null otherwise.</returns>
	},
	loadFromXml: fileUrl, onLoad, onError {
		/// <summary>Loads the schedule from an XML file.</summary>
		/// <param name="fileUrl" type="String">String. The URL of an XML file where the data should be read from.</param>
		/// <param name="onLoad" type="function" optional="true">Optional. function. A callback that should be invoked if the file is loaded successfully.</param>
		/// <param name="onError" type="function" optional="true">Optional. function. A callback that should be invoked if the file could not be downloaded.</param>
	},
	saveToXml: url {
		/// <summary>Saves the schedule to an XML file.</summary>
		/// <param name="url" type="String">String. A URL specifying where the schedule's XML should be posted to.</param>
	},
	toJson:  {
		/// <summary>Serializes the schedule into a JSON string.</summary>
		/// <returns type="String">String. A string containing the schedule's JSON representation.</returns>
	},
	toXmlDocument:  {
		/// <summary>Saves the schedule into an XML Document.</summary>
		/// <returns type="Document">Document. A DOM Document object containing XML-serialized schedule contents.</returns>
	},
	getAllItems: startTime, endTime, resource {
		/// <summary>Retrieves all events, including recurrent item instances, scheduled to occur in the specified time interval.</summary>
		/// <param name="startTime" type="DateTime">DateTime. Time interval start.</param>
		/// <param name="endTime" type="DateTime" optional="true">Optional. DateTime. Time interval end.</param>
		/// <param name="resource" type="Resource" optional="true">Optional. Resource. A resource that must be related to the event.</param>
		/// <returns type="List">List. The list of events scheduled to occur in the specified period.</returns>
	}
};
MindFusion.Scheduling.Schedule.__class = true;

MindFusion.Scheduling.Selection.prototype = {
	clear:  {
		/// <summary>Clears the selection.</summary>
	},
	getRange:  {
		/// <summary>Gets the selection range.</summary>
		/// <returns type="TimeRange">The selected TimeRange.</returns>
	},
	isEmpty:  {
		/// <summary>Checks if the selection is empty.</summary>
		/// <returns type="Boolean">Boolean. true if the selection is empty; otherwise false.</returns>
	},
	setRange: start, end, resource {
		/// <summary>Sets the selection range.</summary>
		/// <param name="start" type="DateTime">DateTime. A DateTime that specifies the&#160;start time of the selection.</param>
		/// <param name="end" type="DateTime" optional="true">Optional. DateTime. Specifies the end time of the selection.</param>
		/// <param name="resource" type="Resource" optional="true">Optional. Resource. The associated resource.</param>
	}
};
MindFusion.Scheduling.Selection.__class = true;

MindFusion.Scheduling.SelectionEventArgs.prototype = {
};
MindFusion.Scheduling.SelectionEventArgs.__class = true;

MindFusion.Scheduling.Task.prototype = {
	fromJson: json {
		/// <summary>Deserializes this task from a JSON string.</summary>
		/// <param name="json" type="String">String. A string created by the toJson method.</param>
	},
	loadFromXml: element, context {
		/// <summary>Loads the task content from an XML element.</summary>
		/// <param name="element" type="Element">Element. An XML DOM element that contains the task's serialized content.</param>
		/// <param name="context" type="XmlPersistContext">XmlPersistContext. An object providing contextual information about the serialization process and some helper serialization methods.</param>
	},
	saveToXml: element, context {
		/// <summary>Saves the Task content into an XML element.</summary>
		/// <param name="element" type="Element">Element. An XML DOM element that will contain the task's data.</param>
		/// <param name="context" type="XmlPersistContext">XmlPersistContext. An object providing contextual information about the serialization process and some helper serialization methods.</param>
	},
	toJson:  {
		/// <summary>Serializes this task into a JSON string.</summary>
		/// <returns type="String">String. A string containing the task's JSON representation.</returns>
	}
};
MindFusion.Scheduling.Task.__class = true;

MindFusion.Scheduling.TaskEventArgs.prototype = {
};
MindFusion.Scheduling.TaskEventArgs.__class = true;

MindFusion.Scheduling.TaskPriority.prototype = {
	High: 0,
	Low: 1,
	Normal: 2
};
MindFusion.Scheduling.TaskPriority.__enum = true;

MindFusion.Scheduling.TaskStatus.prototype = {
	Completed: 0,
	Deferred: 1,
	InProgress: 2,
	NotStarted: 3,
	WaitingOther: 4
};
MindFusion.Scheduling.TaskStatus.__enum = true;

MindFusion.Scheduling.TimelineSettings.prototype = {
	copyFrom: settings {
		/// <summary>Copies property values for this TimelineSettings object from another object.</summary>
		/// <param name="settings" type="Object">Object. An object containing property values.</param>
	}
};
MindFusion.Scheduling.TimelineSettings.__class = true;

MindFusion.Scheduling.TimeRange.prototype = {
	contains: range {
		/// <summary>Checks if the current range contains the specified range.</summary>
		/// <param name="range" type="TimeRange">TimeRange. The range of DateTime values to check.</param>
		/// <returns type="Boolean">Boolean. true if the current range contains the specified range; otherwise false.</returns>
	},
	equals: range {
		/// <summary>Checks if the specified range contains the same date-time as the current instance.</summary>
		/// <param name="range" type="TimeRange">TimeRange. The range of DateTime values to check.</param>
		/// <returns type="Boolean">Boolean. true if the ranges are equal; otherwise false.</returns>
	},
	intersects: range {
		/// <summary>Checks if the current range intersects with the specified range.</summary>
		/// <param name="range" type="TimeRange">TimeRange. The range of DateTime values to check.</param>
		/// <returns type="Boolean">Boolean. true if the current range intersects with the specified range; otherwise false.</returns>
	},
	sameEnd: range {
		/// <summary>Checks if the current range ends at the same time as the specified range.</summary>
		/// <param name="range" type="TimeRange">TimeRange. The range of DateTime values to compare to.</param>
		/// <returns type="Boolean">Boolean. true if the current range ends at the same time with the specified range; otherwise false.</returns>
	},
	sameStart: range {
		/// <summary>Checks if the current range starts at the same time as the specified range.</summary>
		/// <param name="range" type="TimeRange">TimeRange. The range of DateTime values to compare to.</param>
		/// <returns type="Boolean">Boolean. true if the current range starts at the same time with the specified range; otherwise false.</returns>
	}
};
MindFusion.Scheduling.TimeRange.__class = true;

MindFusion.Scheduling.TimeSpan.prototype = {
	add: timespan {
		/// <summary>Returns a new TimeSpan object whose value is the sum of the specified TimeSpan object and this instance.</summary>
		/// <param name="timespan" type="TimeSpan">TimeSpan. The TimeSpan object to add.</param>
		/// <returns type="TimeSpan">TimeSpan. The resulting time span.</returns>
	},
	clone:  {
		/// <summary>Creates a copy of the time span.</summary>
		/// <returns type="TimeSpan">TimeSpan. The resulting time span.</returns>
	},
	equals: timespan {
		/// <summary>Checks if the time span object represents the same time value as the current instance.</summary>
		/// <param name="timespan" type="TimeSpan">TimeSpan. The TimeSpan to check.</param>
		/// <returns type="Boolean">Boolean. True if the time spans represent the same time value, otherwise false.</returns>
	},
	fromDays: days {
		/// <summary>Returns a TimeSpan that represents a specified number of days.</summary>
		/// <param name="days" type="Number">Number. The number of days.</param>
		/// <returns type="TimeSpan">TimeSpan. The resulting time span.</returns>
	},
	fromHours: hours {
		/// <summary>Returns a TimeSpan that represents a specified number of hours.</summary>
		/// <param name="hours" type="Number">Number. The number of hours.</param>
		/// <returns type="TimeSpan">TimeSpan. The resulting time span.</returns>
	},
	fromMilliseconds: milliseconds {
		/// <summary>Returns a TimeSpan that represents a specified number of milliseconds.</summary>
		/// <param name="milliseconds" type="Number">Number. The number of milliseconds.</param>
		/// <returns type="TimeSpan">TimeSpan. The resulting time span.</returns>
	},
	fromMinutes: minutes {
		/// <summary>Returns a TimeSpan that represents a specified number of minutes.</summary>
		/// <param name="minutes" type="Number">Number. The number of minutes.</param>
		/// <returns type="TimeSpan">TimeSpan. The resulting time span.</returns>
	},
	fromSeconds: seconds {
		/// <summary>Returns a TimeSpan that represents a specified number of seconds.</summary>
		/// <param name="seconds" type="Number">Number. The number of seconds.</param>
		/// <returns type="TimeSpan">TimeSpan. The resulting time span.</returns>
	},
	subtract: timespan {
		/// <summary>Returns a new TimeSpan object whose value is the difference between the specified TimeSpan object and this instance.</summary>
		/// <param name="timespan" type="TimeSpan">TimeSpan. The TimeSpan object to subtract.</param>
		/// <returns type="TimeSpan">TimeSpan. The resulting time span.</returns>
	}
};
MindFusion.Scheduling.TimeSpan.__class = true;

MindFusion.Scheduling.TimetableSettings.prototype = {
	copyFrom: settings {
		/// <summary>Copies property values for this TimetableSettings instance&#160;from another object.</summary>
		/// <param name="settings" type="Object">Object. An object containing property values.</param>
	}
};
MindFusion.Scheduling.TimetableSettings.__class = true;

MindFusion.Scheduling.TimeUnit.prototype = {
	Day: 0,
	Hour: 1,
	Minute: 2,
	Month: 3,
	Second: 4,
	Week: 5,
	Year: 6
};
MindFusion.Scheduling.TimeUnit.__enum = true;

MindFusion.Scheduling.VerticalHeaderStyle.prototype = {
	Left: 0,
	None: 1,
	Right: 2
};
MindFusion.Scheduling.VerticalHeaderStyle.__enum = true;

MindFusion.Scheduling.ViewCell.prototype = {
};
MindFusion.Scheduling.ViewCell.__class = true;

MindFusion.Scheduling.WeekRangeSettings.prototype = {
	copyFrom: settings {
		/// <summary>Copies the property values for this WeekRangeSettings instance from another object.</summary>
		/// <param name="settings" type="Object">Object. An object containing property values.</param>
	}
};
MindFusion.Scheduling.WeekRangeSettings.__class = true;

MindFusion.Scheduling.WeekRangeViewStyle.prototype = {
	SingleWeek: 0,
	WeekPerRow: 1
};
MindFusion.Scheduling.WeekRangeViewStyle.__enum = true;

MindFusion.Scheduling.YearlyRecurrence.prototype = {
	ByDayType: 0,
	SpecificDate: 1
};
MindFusion.Scheduling.YearlyRecurrence.__enum = true;
