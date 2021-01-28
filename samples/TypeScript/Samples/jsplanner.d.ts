// Type definitions for MindFusion.Scheduling for JavaScript
// Project: https://www.mindfusion.eu/javascript-scheduler.html
// Definitions by: MindFusion <https://www.mindfusion.eu>

// Copyright (c) 2018-2020, MindFusion LLC - Bulgaria.

declare module "scheduler-library"
{
export = MindFusion.Scheduling;
}

declare namespace MindFusion.Scheduling
{
	/** Describes the action that caused a CollectionChanged event. */
	enum NotifyCollectionChangedAction
	{
		/** Represents adding to the collection. */
		Add = 1,
		/** Represents removing from the collection. */
		Remove = -1,
		/** Represents resetting the collection. */
		Reset = 0
	}
	/** Specifies the type of view to display in a calendar control. */
	enum CalendarView
	{
		/** The calendar displays several months in a grid. The days of each month are visible too. */
		MonthRange = 0,
		/** The calendar displays a single month at a time. The days of the month are displayed in a grid. */
		SingleMonth = 1,
		/** The calendar displays a grid of days, with the columns representing the week days from Monday to Sunday and the rows representing weeks. */
		WeekRange = 2,
		/** The calendar displays several seconds, minutes, hours, days, weeks, months or years in a row. */
		List = 3,
		/** The calendar displays a timetable where each row represents a fixed arbitrary time interval and each column represents a day. */
		Timetable = 4,
		/** The calendar displays the distribution of resources over a period of time. */
		ResourceView = 5
	}
	/** Specifies the type of a timeline in a Resource view. */
	enum ResourceViewTimeline
	{
		/** Indicates the top timeline. */
		Top = 0,
		/** Indicates the middle timeline. */
		Middle = 1,
		/** Indicates the bottom timeline. */
		Bottom = 2
	}
	/** Specifies a time resolution. */
	enum TimeUnit
	{
		/** Specifies seconds. */
		Second = 0,
		/** Specifies minutes. */
		Minute = 1,
		/** Specifies hours. */
		Hour = 2,
		/** Specifies days. */
		Day = 3,
		/** Specifies weeks. */
		Week = 4,
		/** Specifies months. */
		Month = 5,
		/** Specifies years. */
		Year = 6
	}
	/** Specifies the display format of a day of the week. */
	enum DayOfWeekFormat
	{
		/** Only the first letter of the name of the day is displayed. */
		SingleLetter = 0,
		/** The first three letters of the day of the week are displayed. */
		Abbreviated = 1,
		/** The complete name of the day of the week is displayed. */
		Full = 2
	}
	/** Specifies the appearance of the calendar's main header. */
	enum MainHeaderStyle
	{
		/** The header is not displayed. */
		None = 0,
		/** The header displays a title. */
		Title = 1,
		/** The header displays navigation buttons.. */
		Buttons = 2
	}
	/** Specifies the appearance of a vertical header in the calendar. */
	enum VerticalHeaderStyle
	{
		/** The header is not displayed. */
		None = 0,
		/** The header is displayed to the left side of the calendar. */
		Left = 1,
		/** The header is displayed to the right side of the calendar. */
		Right = 2
	}
	/** Specifies the appearance of a horizontal header in the calendar. */
	enum HorizontalHeaderStyle
	{
		/** The header is not displayed. */
		None = 0,
		/** The header is displayed to the top side of the calendar. */
		Top = 1,
		/** The header is displayed to the bottom side of the calendar. */
		Bottom = 2
	}
	/** Specifies orientation for calendar elements. */
	enum Orientation
	{
		/** Indicates a horizontal orientation. */
		Horizontal = 0,
		/** Indicates a vertical orientation. */
		Vertical = 1
	}
	/** Specifies the priority of a task. */
	enum TaskPriority
	{
		/** Indicates low task priority. */
		Low = 0,
		/** Indicates normal task priority. */
		Normal = 1,
		/** Indicates high task priority. */
		High = 2
	}
	/** Specifies status values for a task. */
	enum TaskStatus
	{
		/** Indicates that the task has not started yet. */
		NotStarted = 0,
		/** Indicates a task in progress. */
		InProgress = 1,
		/** Indicates a completed task. */
		Completed = 2,
		/** Indicates a task that depends on another task. */
		WaitingOther = 3,
		/** Indicates a deferred task. */
		Deferred = 4
	}
	/** Specifies the type of a reminder. */
	enum ReminderType
	{
		/** Trigger the reminder at the exact time specified in its Date property. */
		Exact = 0,
		/** Trigger the reminder at the specified TimeInterval before the item's scheduled start time. */
		Leading = 1
	}
	/** Specifies the recurrence state of items. */
	enum RecurrenceState
	{
		/** Specifies an one-time non-recurring event. */
		None = 0,
		/** Specifies a single occurrence of a recurring event. */
		Occurrence = 1,
		/** Specifies an exception of a recurring event. */
		Exception = 1,
		/** Specifies a recurring event. */
		Master = 1
	}
	/** Specifies the interval at which recurring events occur. */
	enum RecurrencePattern
	{
		/** Repeats an event every day. */
		Daily = 0,
		/** Repeats an event every week. */
		Weekly = 1,
		/** Repeats an event every month. */
		Monthly = 2,
		/** Repeats an event every year. */
		Yearly = 3,
		/** Repeats an event over a specified time interval. */
		ByTimeInterval = 4
	}
	/** Specifies daily recurrence patterns. */
	enum DailyRecurrence
	{
		/** Repeats the item at regular intervals specified in the Recurrence.Days property. */
		ByDayInterval = 0,
		/** Repeats the item each workday, Monday through Friday. */
		EveryWorkday = 1,
		/** Repeats the item each Saturday and Sunday. */
		EveryWeekend = 2
	}
	/** Specifies monthly recurrence patterns. */
	enum MonthlyRecurrence
	{
		/** The event occurs on the given day of the month. */
		ByDayNumber = 0,
		/** The event occurs on a given type of day in the specified week of the month. */
		ByDayType = 1
	}
	/** Specifies yearly recurrence patterns. */
	enum YearlyRecurrence
	{
		/** The event occurs on a specific date of the year. */
		SpecificDate = 0,
		/** The event occurs on a specific type of day of the specified  week and month of the year. */
		ByDayType = 1
	}
	/** Specifies the index of occurrence. */
	enum Occurrence
	{
		/** Indicates the first occurrence. */
		First = 0,
		/** Indicates the second occurrence. */
		Second = 1,
		/** Indicates the third occurrence. */
		Third = 2,
		/** Indicates the fourth occurrence. */
		Fourth = 3,
		/** Indicates the last occurrence. */
		Last = 4
	}
	/** Specifies the type of week day to use with ByDayType monthly and yearly recurrence patterns. */
	enum DayOfWeekType
	{
		/** Indicates any day. */
		AnyDay = 0,
		/** Indicates a workday. */
		Workday = 1,
		/** Indicates a weekend day. */
		Weekend = 2,
		/** Indicates Sunday. */
		Sunday = 3,
		/** Indicates Monday. */
		Monday = 4,
		/** Indicates Tuesday. */
		Tuesday = 5,
		/** Indicates Wednesday. */
		Wednesday = 6,
		/** Indicates Thursday. */
		Thursday = 7,
		/** Indicates Friday. */
		Friday = 8,
		/** Indicates Saturday. */
		Saturday = 9
	}
	/** Specifies when to stop repeating recurring events. */
	enum RecurrenceEnd
	{
		/**  Never stop repeating events. */
		Never = 0,
		/** Stop repeating events after a specified number of occurrences. */
		NumOccurrences = 1,
		/** The recurrence ends at a specified date. */
		EndDate = 2
	}
	/** Specifies the day of the week. */
	enum DayOfWeek
	{
		/** Indicates Sunday. */
		Sunday = 0,
		/** Indicates Monday. */
		Monday = 1,
		/** Indicates Tuesday. */
		Tuesday = 2,
		/** Indicates Wednesday. */
		Wednesday = 3,
		/** Indicates Thursday. */
		Thursday = 4,
		/** Indicates Friday. */
		Friday = 5,
		/** Indicates Saturday. */
		Saturday = 6
	}
	/** Specifies the day of the week. This enum allows bitwise combination of its members. */
	enum DaysOfWeek
	{
		/** Indicates an undefined day value. */
		None = 0,
		/** Indicates Sunday. */
		Sunday = 1,
		/** Indicates Monday. */
		Monday = 2,
		/** Indicates Tuesday. */
		Tuesday = 4,
		/** Indicates Wednesday. */
		Wednesday = 8,
		/** Indicates Thursday. */
		Thursday = 16,
		/** Indicates Friday. */
		Friday = 32,
		/** Indicates Saturday. */
		Saturday = 64,
		/** Indicates all days of the week. */
		All = 127
	}
	/** Specifies the type of modification action used, when an item is modified. */
	enum ItemModifyAction
	{
		/** Specifies that the item was modified through a modification of one or more of its properties, excluding drag and resize interactive operations. */
		Edit = 0,
		/** Specifies that the item is modified through an interactive drag operation. */
		Drag = 1,
		/** Specifies that the item is modified through an interactive resize operation. */
		Resize = 2,
		/** Specifies that the item is modified through an interactive inplace-edit operation. */
		InplaceEdit = 3
	}
	/** Specifies grouping or filtering criteria for views that support grouping. */
	enum GroupType
	{
		/** No grouping or filtering. */
		None = 0,
		/** Group by contacts. */
		GroupByContacts = 1,
		/** Group by resources. */
		GroupByResources = 2,
		/** Group by locations. */
		GroupByLocations = 3,
		/** Group by tasks. */
		GroupByTasks = 4,
		/** Filter by contacts. */
		FilterByContacts = 5,
		/** Filter by locations. */
		FilterByLocations = 6,
		/** Filter by tasks. */
		FilterByTasks = 7,
		/** Filter by resources. */
		FilterByResources = 8
	}
	/** Specifies whether there are multiple weeks displayed in WeekRange view. */
	enum WeekRangeViewStyle
	{
		/** The calendar view displays several weeks at a time. */
		WeekPerRow = 0,
		/** The calendar view displays a single week at a time. */
		SingleWeek = 1
	}
	/** Identifies special Keys. */
	enum Keys
	{
		/** No key pressed. */
		None = 0,
		/** Indicates the SHIFT modifier key. */
		Shift = 1,
		/** Indicates the CTRL modifier key. */
		Control = 2,
		/** Indicates the ALT modifier key. */
		Alt = 3
	}
	/** Specifies the type of a calendar header. */
	enum HeaderType
	{
		/** Indicates a date cell header. */
		Cell = 0,
		/** Indicates the main view header. */
		Main = 1,
		/** Indicates the group header. */
		Group = 2,
		/** Indicates the timeline header. */
		Timeline = 3,
		/** Indicates the day names header. */
		DayNames = 4,
		/** Indicates the week numbers header. */
		WeekNumbers = 5
	}
	/** Specifies the type of calendar repaint */
	enum RepaintType
	{
		/** Indicates all calendar element should be repainted */
		Full = 1,
		/** Indicates only dynamic calendar elements should be repainted. */
		View = 1
	}
	/** Represents an array of arbitrary objects. */
	class IEnumerable
	{
		/** Initializes a new instance of the IEnumerable class.
		 * @param items The underlying array data structure of the collection.
		*/
		constructor(items?: Array<any>);
		/** Gets the collection as an array. */
		items(): Array<any>;
		/** Gets the collection as an array in reverse order. */
		reverse(): Array<any>;
		/** Gets the element at the given index.
		 * @param index The index.
		*/
		item(index: number): any;
		/** Gets the number of elements. */
		count(): number;
		/** Checks if the given element is present in the collection.
		 * @param item The object to check for.
		*/
		contains(item: any): boolean;
		/** Adds an object to the end of the collection.
		 * @param item The object to add.
		*/
		add(item: any): void;
		/** Adds a range of elements to the end of the collection.
		 * @param range The range to add.
		*/
		addRange(range: Array<any>): void;
		/** Removes an element from the collection.
		 * @param item The object to remove.
		*/
		remove(item: any): void;
		/** Removes a range of elements starting from the given index.
		 * @param index The starting index of the range.
		 * @param count The length of the range.
		*/
		removeRange(index: number, count: number): void;
		/** Removes  the element at the given index.
		 * @param index The index.
		*/
		removeAt(index: number): void;
		/** Clears the collection. */
		clear(): void;
		/** Creates a copy of the collection. */
		clone(): IEnumerable;
		/** Copies a range of elements from this collection to a destination collection.
		 * @param destination The destination collection.
		 * @param length The length of the range to copy.
		 * @param sourceIndex The starting index of the range to copy.
		 * @param destinationIndex The index at which the range should be copied.
		*/
		copyTo(destination: IEnumerable, length: number, sourceIndex?: number, destinationIndex?: number): void;
		/** Sorts the underlying array.
		 * @param compareFn The comparing function.
		*/
		sort(compareFn: Function): void;
		/** Gets the index of a given object in a collection.
		 * @param obj The object to look for.
		 * @param fromIndex The starting index to search from.
		*/
		indexOfItem(obj: any, fromIndex?: number): number;
		/** Adds an element to the collection at the specified index.
		 * @param index The index.
		 * @param item The item.
		*/
		insert(index: number, item: any): void;
		/** Returns a new Object array, containing the contents of the collection. */
		toArray(): Array<any>;
		/** Invokes a transform function on each item and returns the maximum value in a sequence of numbers.
		 * @param selector A transform function to invoke on each element.
		*/
		max(selector: Function): number;
		/** Invokes a transform function on each item and returns the minimum value in a sequence of numbers.
		 * @param selector A transform function to invoke on each element.
		*/
		min(selector: Function): number;
		/** Computes the sum of the sequence of number values that are obtained by invoking a transform function on each element.
		 * @param selector A transform function to invoke on each element.
		*/
		sum(selector: Function): number;
		/** Projects each element of a sequence into a new form.
		 * @param selector A transform function to invoke on each element.
		*/
		select(selector: Function): IEnumerable;
		/** Filters a sequence of values based on a predicate.
		 * @param selector A function to test each element for a condition.
		*/
		where(selector: Function): IEnumerable;
		/** Executes a provided function once for each element.
		 * @param callback A function to execute for each element.
		 * @param context The invokation context.
		*/
		forEach(callback: Function, context: any): void;
		/** Returns the first element in the collection. */
		first(): any;
		/** Returns the last element in the collection. */
		last(): any;
	}
	/** Represents an array of arbitrary objects. */
	class List extends IEnumerable
	{
		/** Initializes a new instance of the List class.
		 * @param items The underlying array data structure of the collection.
		*/
		constructor(items?: Array<any>);
	}
	/** Represents an collection of arbitrary objects. */
	class ObservableCollection extends List
	{
		/** Initializes a new instance of the ObservableCollection class.
		 * @param items The underlying array data structure of the collection.
		*/
		constructor(items?: Array<any>);
	}
	/** Represents a collection of keys and values. */
	class Dictionary
	{
		/** Initializes a new instance of the Dictionary class. */
		constructor();
		/** Associates the specified value with the specified key within the dictionary.
		 * @param key The key to associate the value with.
		 * @param value The value to associate.
		*/
		set(key: any, value: any): void;
		/** Gets the value associated with the specified key within the dictionary.
		 * @param key The key whose value to get.
		*/
		get(key: any): any;
		/** Determines whether the dictionary contains a specific key.
		 * @param key The key to locate in the dictionary.
		*/
		contains(key: any): boolean;
		/** Removes the element with the specified key from the dictionary.
		 * @param key The key of the element to remove.
		*/
		remove(key: any): any;
		/** Gets an array with all keys in the dictionary. */
		keys: Array<any>;
		/** Gets an array with all values in the dictionary. */
		values: Array<any>;
		/** Gets the number of key/value pairs contained in the dictionary. */
		count: number;
	}
	/** epresents a dispatcher for an event. */
	class EventDispatcher
	{
		/** Subcribes an event listener to this event.
		 * @param handler The object which receives a notification.
		*/
		addEventListener(handler: any): void;
		/** Removes an event listener from this event.
		 * @param handler The object to remove.
		*/
		removeEventListener(handler: any): void;
		/** Raises this event.
		 * @param sender The sender object.
		 * @param args The event argument.
		*/
		raiseEvent(sender: any, args: any): void;
	}
	/** The base type of classes that define arguments passed to event handler functions. */
	class EventArgs
	{
	}
	/** Provides a value to use with events that do not have event data. */
	class EmptyEventArgs extends EventArgs
	{
	}
	/** Provides a value to use with cancellable events. */
	class CancelEventArgs extends EventArgs
	{
		/** Gets or sets a value indicating whether to allow the current operation. */
		cancel: boolean;
	}
	/** Provides data for PropertyChanged events. */
	class PropertyChangedEventArgs extends EventArgs
	{
		/** Gets the name of the property that changed. */
		propertyName: string;
	}
	/** Provides data for PropertyValueChanged events. */
	class PropertyEventArgs extends EventArgs
	{
		/** Gets the name of the property that changed. */
		propertyName: string;
		/** Gets the old value of the property. */
		oldValue: any;
		/** Gets the new value of the property. */
		newValue: any;
	}
	/** Provides data for CollectionChanging events. */
	class NotifyCollectionChangingEventArgs extends CancelEventArgs
	{
		/** Gets the action that caused the event. */
		action: NotifyCollectionChangedAction;
		/** Get sthe list of old items involved in the change. */
		oldItems: Array<any>;
		/** Gets the list of new items involved in the change. */
		newItems: Array<any>;
	}
	/** Provides data for CollectionChanging events. */
	class NotifyCollectionChangedEventArgs extends EventArgs
	{
		/** Gets the action that caused the event. */
		action: NotifyCollectionChangedAction;
		/** Gets the list of old items involved in the change. */
		oldItems: Array<any>;
		/** Gets the list of new items involved in the change. */
		newItems: Array<any>;
	}
	/** A Javascript Date object wrapper that extends the functionality of the JavaScript Date object. */
	class DateTime
	{
		/** Initializes a new instance of the DateTime class.
		 * @param date A JavaScript Date object
		*/
		constructor(date?: Date);
		/** Creates a new DateTime object, by specifying its different date and time components.
		 * @param year The year component.
		 * @param month The month component.
		 * @param day The day component.
		 * @param hours The hours component.
		 * @param minutes The minutes component.
		 * @param seconds The seconds component.
		 * @param milliseconds The milliseconds component.
		*/
		static fromDateParts(year: number, month: number, day?: number, hours?: number, minutes?: number, seconds?: number, milliseconds?: number): DateTime;
		/** Creates a new DateTime object from a provided date string.
		 * @param dateString The date string to create the DateTime from.
		*/
		static fromDateString(dateString: string): DateTime;
		/** Creates a new DateTime object from the number of milliseconds since Jan 1st 1970.
		 * @param milliseconds The number of milliseconds since Jan 1st 1970.
		*/
		static fromMilliseconds(milliseconds: number): DateTime;
		/** Combines the date component of a DateTime object and the time component of another DateTime object into a new DateTime object.
		 * @param date A DateTime object to get the date part from.
		 * @param time A DateTime object to get the time part from.
		*/
		static combine(date: DateTime, time: DateTime): DateTime;
		/** Returns the latter of two DateTime objects.
		 * @param date1 A DateTime object
		 * @param date2 A DateTime object
		*/
		static maxDate(date1: DateTime, date2: DateTime): DateTime;
		/** Returns the former of two DateTime objects.
		 * @param date1 A DateTime object
		 * @param date2 A DateTime object
		*/
		static minDate(date1: DateTime, date2: DateTime): DateTime;
		/** Returns the number of milliseconds between the specified dates.
		 * @param date1 A DateTime object to subtract from
		 * @param date2 A DateTime object to subtract
		*/
		static subtract(date1: DateTime, date2: DateTime): number;
		/** Returns the lowest possible DateTime value. */
		static minValue(): DateTime;
		/** Returns the highest possible DateTime value. */
		static maxValue(): DateTime;
		/** Returns a DateTime object representing the current DateTime. */
		static now(): DateTime;
		/** Returns a DateTime object representing the current Date. */
		static today(): DateTime;
		/** Returns the year component of the specified DateTime.
		 * @param date A DateTime instance
		*/
		static getYear(date: DateTime): number;
		/** Returns the month component of the specified DateTime.
		 * @param date A DateTime instance
		*/
		static getMonth(date: DateTime): number;
		/** Returns the number of days in the month of the specified DateTime.
		 * @param date A DateTime instance
		*/
		static getDaysInMonth(date: DateTime): number;
		/** Returns the day of the month of the specified DateTime.
		 * @param date A DateTime instance
		*/
		static getDayOfMonth(date: DateTime): number;
		/** Returns the day of the week of the specified DateTime.
		 * @param date A DateTime instance
		*/
		static getDayOfWeek(date: DateTime): number;
		/** Returns the beginning of the week of the specified DateTime.
		 * @param date A DateTime instance
		 * @param formatInfo The formatInfo object
		*/
		static getWeekFirstDate(date: DateTime, formatInfo?: any): DateTime;
		/** Adds the specified number of milliseconds to the specified DateTime object.
		 * @param date The DateTime instance to modify.
		 * @param milliseconds The number of milliseconds to add.
		*/
		static addMilliseconds(date: DateTime, milliseconds: number): DateTime;
		/** Adds the specified number of seconds to the specified DateTime object.
		 * @param date The DateTime instance to modify.
		 * @param seconds The number of seconds to add.
		*/
		static addSeconds(date: DateTime, seconds: number): DateTime;
		/** Adds the specified number of minutes to the specified DateTime object.
		 * @param date The DateTime instance to modify.
		 * @param minutes The number of minutes to add.
		*/
		static addMinutes(date: DateTime, minutes: number): DateTime;
		/** Adds the specified number of hours to the specified DateTime object.
		 * @param date The DateTime instance to modify.
		 * @param hours The number of hours to add.
		*/
		static addHours(date: DateTime, hours: number): DateTime;
		/** Adds the specified number of days to the specified DateTime object.
		 * @param date The DateTime instance to modify.
		 * @param days The number of days to add.
		*/
		static addDays(date: DateTime, days: number): DateTime;
		/** Adds the specified number of months to the specified DateTime object.
		 * @param date The DateTime instance to modify.
		 * @param months The number of months to add.
		*/
		static addMonths(date: DateTime, months: number): DateTime;
		/** Adds the specified number of years to the specified DateTime object.
		 * @param date The DateTime instance to modify.
		 * @param years The number of years to add.
		*/
		static addYears(date: DateTime, years: number): DateTime;
		/** The milliseconds in one second. */
		static MillisPerSecond: number;
		/** The milliseconds in one minute. */
		static MillisPerMinute: number;
		/** The milliseconds in one hour. */
		static MillisPerHour: number;
		/** The milliseconds in one day. */
		static MillisPerDay: number;
		/** The ticks in one millisecond. */
		static TicksPerMillisecond: number;
		/** The ticks in one second. */
		static TicksPerSecond: number;
		/** The ticks in one minute. */
		static TicksPerMinute: number;
		/** The ticks in one hour. */
		static TicksPerHour: number;
		/** The ticks in one day. */
		static TicksPerDay: number;
		/** Returns a string representation of the current DateTime object.
		 * @param format The DateTime format used for the string representation.
		 * @param formatInfo The formatInfo object used for the string representation
		*/
		toString(format: string, formatInfo: any): string;
		/** Returns a copy of the current DateTime object. */
		clone(): DateTime;
		/** Returns a value indicating whether the values of two DateTime objects are equal.
		 * @param date The DateTime object to compare with.
		*/
		equals(date: DateTime): boolean;
		/** Subtracts the specified date from the current date and returns the number of milliseconds between them.
		 * @param date The DateTime object to subtract.
		*/
		subtract(date: DateTime): number;
		/** Checks if this DateTime object is greater than the specified DateTime object.
		 * @param date The DateTime object to compare with.
		*/
		greaterThan(date: DateTime): boolean;
		/** Checks if this DateTime object is greater than or equal to the specified DateTime object.
		 * @param date The DateTime object to compare with.
		*/
		greaterThanOrEqual(date: DateTime): boolean;
		/** Checks if this DateTime object is less than the specified DateTime object.
		 * @param date The DateTime object to compare with.
		*/
		lessThan(date: DateTime): boolean;
		/** Checks if this DateTime object is less than or equal to the specified DateTime object.
		 * @param date The DateTime object to compare with.
		*/
		lessThanOrEqual(date: DateTime): boolean;
		/** Compares the current DateTime instance with another DateTime object and returns an integer that indicates whether the current instance precedes, follows, or occurs in the same position in the sort order as the other object.
		 * @param date The DateTime object to compare with.
		*/
		compareTo(date: DateTime): number;
		/** Returns the number of milliseconds between two DateTime instances.
		 * @param date1 A DateTime instance.
		 * @param date2 A DateTime instance.
		*/
		static millisecondsBetween(date1: DateTime, date2: DateTime): number;
		/** Returns the number of seconds between two DateTime instances.
		 * @param date1 A DateTime instance.
		 * @param date2 A DateTime instance.
		*/
		static secondsBetween(date1: DateTime, date2: DateTime): number;
		/** Returns the number of minutes between two DateTime instances.
		 * @param date1 A DateTime instance.
		 * @param date2 A DateTime instance.
		*/
		static minutesBetween(date1: DateTime, date2: DateTime): number;
		/** Returns the number of hours between two DateTime instances.
		 * @param date1 A DateTime instance.
		 * @param date2 A DateTime instance.
		*/
		static hoursBetween(date1: DateTime, date2: DateTime): number;
		/** Returns the number of days between two DateTime instances.
		 * @param date1 A DateTime instance.
		 * @param date2 A DateTime instance.
		*/
		static daysBetween(date1: DateTime, date2: DateTime): number;
		/** Returns the number of weeks between two DateTime instances.
		 * @param date1 A DateTime instance.
		 * @param date2 A DateTime instance.
		*/
		static weeksBetween(date1: DateTime, date2: DateTime): number;
		/** Returns the number of months between two DateTime instances.
		 * @param date1 A DateTime instance.
		 * @param date2 A DateTime instance.
		*/
		static monthsBetween(date1: DateTime, date2: DateTime): number;
		/** Returns the number of years between two DateTime instances.
		 * @param date1 A DateTime instance.
		 * @param date2 A DateTime instance.
		*/
		static yearsBetween(date1: DateTime, date2: DateTime): number;
		/** Adds the specified number of milliseconds to the current DateTime object.
		 * @param milliseconds The number of milliseconds to add.
		*/
		addMilliseconds(milliseconds: number): DateTime;
		/** Adds the specified number of seconds to the current DateTime object.
		 * @param seconds The number of seconds to add.
		*/
		addSeconds(seconds: number): DateTime;
		/** Adds the specified number of minutes to the current DateTime object.
		 * @param minutes The number of minutes to add.
		*/
		addMinutes(minutes: number): DateTime;
		/** Adds the specified number of hours to the current DateTime object.
		 * @param hours The number of hours to add.
		*/
		addHours(hours: number): DateTime;
		/** Adds the specified number of days to the current DateTime object.
		 * @param days The number of days to add.
		*/
		addDays(days: number): DateTime;
		/** Adds the specified number of months to the current DateTime object.
		 * @param months The number of months to add.
		*/
		addMonths(months: number): DateTime;
		/** Adds the specified number of years to the current DateTime object.
		 * @param years The number of years to add.
		*/
		addYears(years: number): DateTime;
		/** Returns the Javascript Date object, corresponding to the current DateTime object. */
		getDate(): Date;
		/** Returns the month component of the current DateTime object. */
		getMonth(): number;
		/** Returns the number of days in the month of the current DateTime instance. */
		getDaysInMonth(): number;
		/** Returns a value indicating whether the year of the current DateTime instance is a leap year. */
		isLeapYear(): boolean;
		/** Gets the millisecond component of the date represented by this instance. */
		millisecond: number;
		/** Gets the second component of the date represented by this instance. */
		second: number;
		/** Gets the minute component of the date represented by this instance. */
		minute: number;
		/** Gets the hour component of the date represented by this instance. */
		hour: number;
		/** Gets the day component of the date represented by this instance. */
		day: number;
		/** Gets the month component of the date represented by this instance. */
		month: number;
		/** Gets the year component of the date represented by this instance. */
		year: number;
		/** Gets the date component of the date represented by this instance. */
		date: DateTime;
		/** Gets the time component of the date represented by this instance. */
		timeOfDay: number;
		/** Gets the day of the month represented by this date. */
		dayOfMonth: number;
		/** Gets the day of the week represented by this date. */
		dayOfWeek: number;
		/** Gets the number of days in the month represented by this date. */
		daysInMonth: number;
		/** Gets the year component of this DateTime instance. */
		__getFullYear(): number;
		/** Gets the month component of this DateTime instance. */
		__getMonth(): number;
		/** Gets the day component of this DateTime instance. */
		__getDate(): number;
		/** Gets the day of the week component of this DateTime instance. */
		__getDay(): number;
		/** Gets the hours component of this DateTime instance. */
		__getHours(): number;
		/** Gets the minutes component of this DateTime instance. */
		__getMinutes(): number;
		/** Gets the seconds component of this DateTime instance. */
		__getSeconds(): number;
		/** Gets the milliseconds component of this DateTime instance. */
		__getMilliseconds(): number;
		/** Gets the number of milliseconds between Jan 1 1970 00:00:00 and this DateTime instance. */
		__getTime(): number;
		/** Gets the difference between GMT and local time in minutes. */
		__getTimezoneOffset(): number;
		/** Gets the year component of this DateTime instance, according to universal time. */
		__getUTCFullYear(): number;
		/** Gets the month component of this DateTime instance, according to universal time. */
		__getUTCMonth(): number;
		/** Gets the day component of this DateTime instance, according to universal time. */
		__getUTCDate(): number;
		/** Gets the day of the week component of this DateTime instance, according to universal time. */
		__getUTCDay(): number;
		/** Gets the hours component of this DateTime instance, according to universal time. */
		__getUTCHours(): number;
		/** Gets the minutes component of this DateTime instance, according to universal time. */
		__getUTCMinutes(): number;
		/** Gets the seconds component of this DateTime instance, according to universal time. */
		__getUTCSeconds(): number;
		/** Gets the milliseconds component of this DateTime instance, according to universal time. */
		__getUTCMilliseconds(): number;
		/** Sets the year component of this DateTime instance.
		 * @param year A four-digit value representing the year.
		 * @param month  An integer between 0 and 11 representing the month.
		 * @param day  An integer between 1 and 31 representing the date.
		*/
		__setFullYear(year: number, month?: number, day?: number): void;
		/** Sets the day component of this DateTime instance.
		 * @param day The day of month (1-31).
		*/
		__setDate(day: number): void;
		/** Sets the hours component of this DateTime instance.
		 * @param hour An integer between 0 and 23 representing the hour.
		 * @param min An integer between 0 and 59 representing the minute.
		 * @param sec An integer between 0 and 59 representing the second.
		 * @param millisec An integer between 0 and 999 representing the millisecond.
		*/
		__setHours(hour: number, min?: number, sec?: number, millisec?: number): void;
		/** Sets the minutes component of this DateTime instance.
		 * @param min An integer between 0 and 59 representing the minute.
		 * @param sec An integer between 0 and 59 representing the second.
		 * @param millisec An integer between 0 and 999 representing the millisecond.
		*/
		__setMinutes(min: number, sec?: number, millisec?: number): void;
		/** Sets the seconds component of this DateTime instance.
		 * @param sec An integer between 0 and 59 representing the second.
		 * @param millisec An integer between 0 and 999 representing the millisecond.
		*/
		__setSeconds(sec: number, millisec?: number): void;
		/** Sets the milliseconds component of this DateTime instance.
		 * @param millisec An integer between 0 and 999 representing the millisecond.
		*/
		__setMilliseconds(millisec: number): void;
		/** Sets a date and time by adding or subtracting a specified number of milliseconds to/from midnight 1 Jan 1970.
		 * @param millisec The number of milliseconds to be added to, or subtracted from, midnight 1 Jan 1970.
		*/
		__setTime(millisec: number): void;
		/** Sets the year component of this DateTime instance, according to universal time.
		 * @param year A four-digit value representing the year.
		 * @param month  An integer between 0 and 11 representing the month.
		 * @param day  An integer between 1 and 31 representing the date.
		*/
		__setUTCFullYear(year: number, month?: number, day?: number): void;
		/** Sets the day component of this DateTime instance, according to universal time.
		 * @param day The day of month (1-31).
		*/
		__setUTCDate(day: number): void;
		/** Sets the hours component of this DateTime instance, according to universal time.
		 * @param hour An integer between 0 and 23 representing the hour.
		 * @param min An integer between 0 and 59 representing the minute.
		 * @param sec An integer between 0 and 59 representing the second.
		 * @param millisec An integer between 0 and 999 representing the millisecond.
		*/
		__setUTCHours(hour: number, min?: number, sec?: number, millisec?: number): void;
		/** Sets the minutes component of this DateTime instance, according to universal time.
		 * @param min An integer between 0 and 59 representing the minute.
		 * @param sec An integer between 0 and 59 representing the second.
		 * @param millisec An integer between 0 and 999 representing the millisecond.
		*/
		__setUTCMinutes(min: number, sec?: number, millisec?: number): void;
		/** Sets the seconds component of this DateTime instance, according to universal time.
		 * @param sec An integer between 0 and 59 representing the second.
		 * @param millisec An integer between 0 and 999 representing the millisecond.
		*/
		__setUTCSeconds(sec: number, millisec?: number): void;
		/** Sets the milliseconds component of this DateTime instance, according to universal time.
		 * @param millisec An integer between 0 and 999 representing the millisecond.
		*/
		__setUTCMilliseconds(millisec: number): void;
		/** Converts the date component of this DateTime instance to a readable string. */
		__toDateString(): string;
		/** Converts the date component of this DateTime instance to a readable string, using locale conventions. */
		__toLocaleDateString(): string;
		/** Converts the time component of this DateTime instance to a readable string, using locale conventions. */
		__toLocaleTimeString(): string;
		/** Converts this DateTime instance to a readable string, using locale conventions. */
		__toLocaleString(): string;
		/** Converts this DateTime instance to a readable string. */
		__toString(): string;
		/** Converts the time component of this DateTime instance to a readable string. */
		__toTimeString(): string;
		/** Converts this DateTime instance to a readable string, according to universal time. */
		__toUTCString(): string;
		/** Represents the primitive value of this DateTime object. */
		__valueOf(): number;
	}
	/** Represents a time interval. */
	class TimeSpan
	{
		/** Initializes a new instance of the TimeSpan class.
		 * @param ticks The number of ticks that represent the value of the time span.
		*/
		constructor(ticks: number);
		/** Returns a new TimeSpan object whose value is the sum of the specified TimeSpan object and this instance.
		 * @param timespan The TimeSpan object to add.
		 * @return The resulting time span.
		*/
		add(timespan: TimeSpan): TimeSpan;
		/** Returns a new TimeSpan object whose value is the difference of the specified TimeSpan object and this instance.
		 * @param timespan The TimeSpan object to subtract.
		 * @return The resulting time span.
		*/
		subtract(timespan: TimeSpan): TimeSpan;
		/** Gets the number of ticks that represent the value of the time span. */
		ticks: number;
		/** Gets the number of milliseconds that represent the value of the time span. */
		milliseconds: number;
		/** Gets the number of seconds that represent the value of the time span. */
		seconds: number;
		/** Gets the number of minutes that represent the value of the time span. */
		minutes: number;
		/** Gets the number of hours that represent the value of the time span. */
		hours: number;
		/** Gets the number of days that represent the value of the time span. */
		days: number;
		/** Creates a copy of the time span.
		 * @return The resulting time span.
		*/
		clone(): TimeSpan;
		/** Checks if the time span object represents the same time value as the current instance.
		 * @param timespan The TimeSpan object to compare.
		 * @return True if the time spans represent the same time value, otherwise false.
		*/
		equals(timespan: TimeSpan): boolean;
		/** Returns a TimeSpan that represents a specified number of milliseconds.
		 * @param milliseconds The number of milliseconds.
		*/
		static fromMilliseconds(milliseconds: number): TimeSpan;
		/** Returns a TimeSpan that represents a specified number of seconds.
		 * @param seconds The number of seconds.
		*/
		static fromSeconds(seconds: number): TimeSpan;
		/** Returns a TimeSpan that represents a specified number of minutes.
		 * @param minutes The number of minutes.
		*/
		static fromMinutes(minutes: number): TimeSpan;
		/** Returns a TimeSpan that represents a specified number of hours.
		 * @param hours The number of hours.
		*/
		static fromHours(hours: number): TimeSpan;
		/** Returns a TimeSpan that represents a specified number of days.
		 * @param days The number of days.
		*/
		static fromDays(days: number): TimeSpan;
	}
	/** Represents a date-time range. */
	class TimeRange
	{
		/** Initializes a new instance of the TimeRange class.
		 * @param start The beginning of the range.
		 * @param end The end of the range.
		*/
		constructor(start: DateTime, end: DateTime);
		/** Gets or sets the beginning of the range. */
		start: DateTime;
		/** Gets or sets the end of the range. */
		end: DateTime;
		/** Gets a value indicating whether the range is empty */
		isEmpty: boolean;
		/** Checks if the specified range contains the same date-time as the current instance.
		 * @param range The TimeRange object to compare.
		 * @return True if the ranges are equal; otherwise false.
		*/
		equals(range: TimeRange): boolean;
		/** Checks if the current range contains the specified range.
		 * @param range The TimeRange object to check.
		 * @return True if the current range contains the specified range; otherwise false.
		*/
		contains(range: TimeRange): boolean;
		/** Checks if the current range intersects with the specified range.
		 * @param range The TimeRange object to check.
		 * @return True if the current range intersects with the specified range; otherwise false.
		*/
		intersects(range: TimeRange): boolean;
	}
	/** Represents reminders associated with schedule items. */
	class Reminder
	{
		/** Initializes a new instance of the Reminder class. */
		constructor();
		/** Gets or sets the type of this reminder. */
		type: ReminderType;
		/** Gets or sets the time interval of the reminder. */
		timeInterval: TimeSpan;
		/** Gets or sets the time when the Reminder is triggered */
		time: DateTime;
		/** Gets or sets the message to display as a reminder. */
		message: string;
	}
	/** Instances of the Resource class contain information about arbitrary resources. */
	class Resource
	{
		/** Initializes a new instance of the Resource class. */
		constructor();
		/** Gets or sets the string identifier for this resource. */
		id: string;
		/** Gets or sets the name of the resource. */
		name: string;
		/** Gets or sets custom data associated with the resource. */
		tag: any;
		/** Saves the resource content into an XML element.
		 * @param element An XML DOM element that will contain the resource's data.
		 * @param context An object providing contextual information about the serialization process and some helper serialization methods.
		*/
		saveToXml(element: Element, context: XmlPersistContext): void;
		/** Loads the resource content from an XML element.
		 * @param element An XML DOM element that contains the resource's serialized content.
		 * @param context An object providing contextual information about the serialization process and some helper serialization methods.
		*/
		loadFromXml(element: Element, context: XmlPersistContext): void;
		/** Serializes this resource into a JSON string.
		 * @param context The serialization context.
		*/
		toJson(context: JsonPersistContext): string;
		/** Deserializes this resource from a JSON string.
		 * @param json A string created by the toJson method.
		 * @param context The serialization context.
		*/
		fromJson(json: string, context: JsonPersistContext): void;
	}
	/** Represents an object that holds contact data for a person. */
	class Contact extends Resource
	{
		/** Initializes a new instance of the Contact class. */
		constructor();
		/** Gets or sets the first name of the contact */
		firstName: string;
		/** Gets or sets the middle name of the contact */
		middleName: string;
		/** Gets or sets the last name of the contact */
		lastName: string;
		/** Gets or sets the address of the contact */
		address: string;
		/** Gets or sets the phone of the contact */
		phone: string;
		/** Gets or sets the email of the contact */
		email: string;
	}
	/** Specifies data that identifies a location. */
	class Location extends Resource
	{
		/** Initializes a new instance of the Location class. */
		constructor();
		/** Gets or sets the address of the location */
		address: string;
		/** Gets or sets the country of the location */
		country: string;
		/** Gets or sets the city of the location */
		city: string;
		/** Gets or sets the state of the location */
		state: string;
		/** Gets or sets the zipCode of the location */
		zipCode: string;
	}
	/** Represents a task in the calendar. */
	class Task extends Resource
	{
		/** Initializes a new instance of the Task class. */
		constructor();
		/** Gets or sets the due date of the task */
		dueDate: DateTime;
		/** Gets or sets the start date of the task */
		startDate: DateTime;
		/** Gets or sets the actual start date of the task */
		actualStart: DateTime;
		/** Gets or sets the actual end date of the task */
		actualEnd: DateTime;
		/** Gets or sets the subject of the task */
		subject: string;
		/** Gets or sets the details of the task */
		details: string;
		/** Gets or sets the priority of the task */
		priority: TaskPriority;
		/** Gets or sets the status of the task */
		status: TaskStatus;
		/** Gets or sets the progress of the task */
		progress: number;
		/** Gets or sets the estimated duration of the task */
		estimatedDuration: number;
		/** Gets or sets the actual duration of the task */
		actualDuration: number;
		/** Gets or sets the estimated cost of the task */
		estimatedCost: number;
		/** Gets or sets the actual cost of the task */
		actualCost: number;
		/** Gets or sets the reminder of the task */
		reminder: Reminder;
	}
	/** Encapsulates data for a datetime cell in a calendar view. */
	class ViewCell
	{
		/** Gets the index of the cell. */
		index: number;
		/** Gets the start time of the cell. */
		startTime: DateTime;
		/** Gets the end time of the cell. */
		endTime: DateTime;
		/** Gets the resource associated with the cell. */
		resource: Resource;
		/** Gets the the DOM element of the cell's content */
		bgCell: HTMLDivElement;
		/** Gets the the DOM element of the cell's header */
		title: HTMLDivElement;
		/** Gets a value indicating whether this cell is a header cell. */
		isHeader: boolean;
	}
	/** Represents appointments within a schedule. */
	class Item
	{
		/** Initializes a new instance of the Item class. */
		constructor();
		/** Gets or sets the item's scheduled start time. */
		startTime: DateTime;
		/** Gets or sets the item's scheduled end time. */
		endTime: DateTime;
		/** Gets or sets a value indicating whether users are allowed to change the item's start time. */
		allowChangeStart: boolean;
		/** Gets or sets a value indicating whether users are allowed to change the item's end time. */
		allowChangeEnd: boolean;
		/** Gets or sets a value indicating whether users are allowed to move the item. */
		allowMove: boolean;
		/** Gets or sets a value indicating whether the item represents an all day event. */
		allDayEvent: boolean;
		/** Gets or sets the text rendered in the header for this item by the scheduling control. */
		subject: string;
		/** Gets or sets the description rendered for this item by the scheduling control. */
		details: string;
		/** Gets or sets a value indicating whether users are forbidden to modify this item. */
		locked: boolean;
		/** Gets or sets the css class of the item. */
		cssClass: string;
		/** Gets or sets the reminder of the item. */
		reminder: Reminder;
		/** Gets or sets the location of the item. */
		location: Location;
		/** Gets or sets the task of the item. */
		task: Task;
		/** Gets the collection of contacts associated with this item. */
		contacts: ObservableCollection;
		/** Gets the collection of resources associated with this item. */
		resources: ObservableCollection;
		/** Gets or sets a value indicating whether this item is visible. */
		visible: boolean;
		/** Gets or sets the recurrence of the item. */
		recurrence: Recurrence;
		/** Gets the recurrence state of the item. */
		recurrenceState: RecurrenceState;
		/** Gets the occurrence index state of the item. */
		occurrenceIndex: number;
		/** Gets or sets the priorityof the item. */
		priority: number;
		/** Gets or sets the custom data associated with the item. */
		tag: any;
		/** Creates an exact copy of this item. */
		clone(): Item;
		/** Saves the item content into an XML element.
		 * @param element An XML DOM element that will contain the item's data.
		 * @param context An object providing contextual information about the serialization process and some helper serialization methods.
		*/
		saveToXml(element: Element, context: XmlPersistContext): void;
		/** Loads the item content from an XML element.
		 * @param element An XML DOM element that contains the item's serialized content.
		 * @param context An object providing contextual information about the serialization process and some helper serialization methods.
		*/
		loadFromXml(element: Element, context: XmlPersistContext): void;
		/** Serializes this item into a JSON string.
		 * @param context The serialization context.
		*/
		toJson(context: JsonPersistContext): string;
		/** Deserializes this item from a JSON string.
		 * @param json A string created by the toJson method.
		 * @param context The serialization context.
		*/
		fromJson(json: string, context: JsonPersistContext): void;
	}
	/** Defines recurrence patterns for items scheduled to repeat over and over again. */
	class Recurrence
	{
		/** Initializes a new instance of the Recurrence class. */
		constructor();
		/** Gets or sets the recurrence pattern. */
		pattern: RecurrencePattern;
		/** Gets or sets the type of daily recurrence. */
		daily: DailyRecurrence;
		/** Gets or sets the type of monthly recurrence. */
		monthly: MonthlyRecurrence;
		/** Gets or sets the type of yearly recurrence. */
		yearly: YearlyRecurrence;
		/** Gets or sets the number of days between two consecutive occurrences of the same event. */
		days: number;
		/** Gets or sets the day of the month when the event occurs. */
		dayOfMonth: number;
		/** Gets or sets the number of weeks between two consecutive occurrences of the event. */
		weeks: number;
		/** Gets or sets the days of the week when the event occurs. */
		daysOfWeek: DaysOfWeek;
		/** Gets or sets the number of months between two consecutive occurrences of the same event. */
		months: number;
		/** Gets or sets the month of the year when the event occurs. */
		monthOfYear: number;
		/** Gets or sets a value on which occurrence of the week within the month the event occurs. */
		occurrence: Occurrence;
		/** Gets or sets a value indicating the day of the week when the event occurs. */
		day: DayOfWeekType;
		/** Gets or sets the interval of recurrence. */
		interval: number;
		/** Gets or sets the date and time of the event's first occurrence. */
		startDate: DateTime;
		/** Gets or sets the last time when the event occurs. */
		recurrenceEnd: RecurrenceEnd;
		/** Gets or sets a value indicating how many times a recurring event should occur. */
		numOccurrences: number;
		/** Gets or sets the end date of the recurrence. */
		endDate: DateTime;
		/** Gets a list with all recurrence exceptions. */
		exceptions: Dictionary;
		/** Gets the  master item for the recurrence. */
		master: Item;
		/** Creates an exact copy of this Recurrence object. */
		clone(): Recurrence;
		/** Determines whether two Recurrence objects define the same recurrence pattern.
		 * @param recurrence The Recurrence object to compare
		*/
		samePatternAs(recurrence: Recurrence): boolean;
		/** Copies the property values of the specified Recurrence object as values for the properties of this Recurrence object.
		 * @param recurrence The Recurrence object whose fields to copy.
		*/
		applyPattern(recurrence: Recurrence): void;
		/** Returns the end date for this recurrence. */
		getEndDate(): DateTime;
		/** Associates the recurrence with the specified item.
		 * @param master The item to associate with.
		*/
		associateWith(master: Item): void;
		/** Returns the occurrence with the specified index.
		 * @param index The index of the occurrence to retrieve.
		*/
		getOccurrence(index: number): Item;
		/** Creates occurrence items for this Recurrence in the specified date range.
		 * @param startDate The range start date.
		 * @param endDate The range end date.
		*/
		generateItems(startDate: DateTime, endDate: DateTime): Array<Item>;
		/** Removes all exceptions of this Recurrence. */
		clearExceptions(): void;
		/** Marks the specified item as an exception in the Recurrence pattern.
		 * @param item The item to be marked as an exception.
		 * @param deleted Specifies whether the exception is created by deleting the occurrence.
		*/
		markException(item: Item, deleted?: boolean): void;
		/** Removes the exception associated with the specified item from the recurrence.
		 * @param item The item whose exception to remove.
		*/
		removeException(item: Item): void;
		/** Returns a localized string that represents this Recurrence using the specified date and time formatting info and localization information.
		 * @param formatInfo Specifies how date and time values are formatted and displayed.
		 * @param localInfo Specifies localized strings used in the representation.
		*/
		toLocalizedString(formatInfo: any, localInfo: any): string;
	}
	/** Represents a selected date-time range. */
	class Selection
	{
		/** Gets the selection range. */
		getRange(): TimeRange;
		/** Sets the selection range.
		 * @param start The start time of the selection.
		 * @param end The end time of the selection.
		 * @param resource The associated resource.
		*/
		setRange(start: DateTime, end?: DateTime, resource?: Resource): void;
		/** Clears the selection. */
		clear(): void;
		/** Checks if the selection is empty. */
		isEmpty(): boolean;
		/** Gets or sets a value indicating whether users are allowed to select date cells. */
		enabled: boolean;
		/** Gets or sets a value indicating whether users are allowed to select more than one date cell at a time. */
		allowMultiple: boolean;
	}
	/** Defines properties that allow customization of the appearance of a Month view. */
	class MonthSettings
	{
		/** Copies property values from another object.
		 * @param settings An object containing property values.
		*/
		copyFrom(settings: any): void;
		/** Gets or sets the style of the view header. */
		headerStyle: MainHeaderStyle;
		/** Gets or sets the style of the view week numbers header. */
		weekHeaderStyle: VerticalHeaderStyle;
		/** Gets or sets the style of the view day names header. */
		dayNamesHeaderStyle: HorizontalHeaderStyle;
		/** Gets or sets the format of the day names displayed in the day names header. */
		dayOfWeekFormat: DayOfWeekFormat;
		/** Gets or sets the string used to format the header title. */
		titleFormat: string;
		/** Gets or sets a value indicating whether to hide trailing weeks, which do not contain days from the current month. */
		hideTrailingWeeks: boolean;
		/** Gets or sets the number of full weeks to display from the next month. */
		trailingWeekCount: number;
		/** Gets or sets the number of full weeks to display from the previous month. */
		leadingWeekCount: number;
		/** Gets or sets a value indicating whether to display days from the previous and next months at the beginning and the end of the current one, in order to fill the whole grid of day cells. */
		showPaddingDays: boolean;
		/** Gets or sets a value indicating whether items are shown in padding days. */
		showPaddingItems: boolean;
		/** Gets or sets the string used to format cells' headers. */
		generalFormat: string;
		/** Gets or sets the string used to format the cell header of the first day of each month. */
		firstDayOfMonthFormat: string;
		/** Gets or sets the string used to format the cell header of the first day of each year. */
		firstDayOfYearFormat: string;
		/** Gets or sets the maximum number of items to display in a cell. */
		maxItems: number;
		/** Gets or sets a value indicating whether day headers should fill the whole day cell. */
		expandDayHeaders: boolean;
	}
	/** Defines properties that allow customization of the appearance of a MonthRange view. */
	class MonthRangeSettings
	{
		/** Copies property values from another object.
		 * @param settings An object containing property values.
		*/
		copyFrom(settings: any): void;
		/** Gets or sets the style of the view header. */
		headerStyle: MainHeaderStyle;
		/** Gets or sets the total number of months to be displayed in the view. */
		numberOfMonths: number;
		/** Gets or sets the number of months to be displayed in a row. */
		monthsPerRow: number;
		/** Gets or sets the number of months visible at the same time. */
		visibleRows: number;
		/** Gets or sets the string used to format the header title. */
		titleFormat: string;
		/** Gets or sets the string used as a title separator. */
		titleSeparator: string;
	}
	/** Defines properties that allow customization of the appearance of a List view. */
	class ListSettings
	{
		/** Copies property values from another object.
		 * @param settings An object containing property values.
		*/
		copyFrom(settings: any): void;
		/** Gets or sets the style of the view header. */
		headerStyle: MainHeaderStyle;
		/** Gets or sets the orientation of the view. */
		orientation: Orientation;
		/** Gets or sets the resolution of the list view. */
		cellUnits: TimeUnit;
		/** Gets or sets the total number of cells to be displayed in the view. */
		numberOfCells: number;
		/** Gets or sets the number of cells visible at the same time. */
		visibleCells: number;
		/** Gets or sets the string used to format the header title. */
		titleFormat: string;
		/** Gets or sets the string used to format cells' headers. */
		generalFormat: string;
		/** Gets or sets the string used to format the cell header of the first day of each month. */
		firstDayOfMonthFormat: string;
		/** Gets or sets the string used to format the cell header of the first day of each year. */
		firstDayOfYearFormat: string;
		/** Gets or sets the maximum number of items to display in a cell. */
		maxItems: number;
	}
	/** Defines properties that allow customization of the appearance of a WeekRange view. */
	class WeekRangeSettings
	{
		/** Copies property values from another object.
		 * @param settings An object containing property values.
		*/
		copyFrom(settings: any): void;
		/** Gets or sets the style of the view header. */
		headerStyle: MainHeaderStyle;
		/** Gets or sets the style of the view. */
		viewStyle: WeekRangeViewStyle;
		/** Gets or sets the number of rows visible at the same time. */
		visibleRows: number;
		/** Gets or sets the string used to format the header title. */
		titleFormat: string;
		/** Gets or sets the string used as a title separator. */
		titleSeparator: string;
		/** Gets or sets the style of the view day names header. */
		dayNamesHeaderStyle: HorizontalHeaderStyle;
		/** Gets or sets the format of the day names displayed in the day names header. */
		dayOfWeekFormat: DayOfWeekFormat;
		/** Gets or sets the string used to format cells' headers. */
		generalFormat: string;
		/** Gets or sets the string used to format the cell header of the first day of each month. */
		firstDayOfMonthFormat: string;
		/** Gets or sets the string used to format the cell header of the first day of each year. */
		firstDayOfYearFormat: string;
		/** Gets or sets the maximum number of items to display in a cell. */
		maxItems: number;
		/** Gets or sets a value indicating whether day headers should fill the whole day cell. */
		expandDayHeaders: boolean;
	}
	/** Defines properties that allow customization of the appearance of a Timetable view. */
	class TimetableSettings
	{
		/** Copies property values from another object.
		 * @param settings An object containing property values.
		*/
		copyFrom(settings: any): void;
		/** Gets or sets the style of the view header. */
		headerStyle: MainHeaderStyle;
		/** Gets or sets the collection of dates to display in the view. */
		dates: ObservableCollection;
		/** Gets or sets the orientation of the view. */
		orientation: Orientation;
		/** Gets or sets the start time of the timetable, expressed in minutes since the beginning of the day. */
		startTime: number;
		/** Gets or sets the end time of the timetable, expressed in minutes since the beginning of the day. */
		endTime: number;
		/** Gets or sets the size of time cells. */
		cellSize: number;
		/** Gets or sets the time length of a single cell in a timetable view, accurate to the nearest second. */
		cellTime: TimeSpan;
		/** Gets or sets a value indicating whether grouping (if enabled) will be performed first by the resource, and then by the date. */
		reverseGrouping: boolean;
		/** Gets or sets the string used to format the header title. */
		titleFormat: string;
		/** Gets or sets a value indicating whether to show the header displaying all-day items. */
		showDayHeader: boolean;
		/** Gets or sets a value indicating whether hours displayed in the timeline are grouped. */
		groupHours: boolean;
		/** Gets or sets a value indicating whether to use a 12-hour format. */
		twelveHourFormat: boolean;
		/** Gets or sets a value indicating whether to display the minutes of each hour in the timeline header when it displays whole hour cells. */
		showMinutes: boolean;
		/** Gets or sets a value indicating whether the AM and PM suffixes are displayed. */
		showAM: boolean;
		/** Gets or sets the number of days to scroll when the user clicks the navigation buttons. */
		scrollStep: number;
		/** Gets or sets the maximum number of items to display in a cell. */
		maxItems: number;
	}
	/** Defines properties that allow customization of the appearance of timelines in a Resource view. */
	class TimelineSettings
	{
		/** Copies property values from another object.
		 * @param settings An object containing property values.
		*/
		copyFrom(settings: any): void;
		/** Gets or sets the resolution of the timeline. */
		unit: TimeUnit;
		/** Gets or sets the number of units between adjacent ticks in the timeline. */
		unitCount: number;
		/** Gets or sets the string used to format timeline headers. */
		format: string;
	}
	/** Defines properties that allow customization of the appearance of a Resource view. */
	class ResourceViewSettings
	{
		/** Copies property values from another object.
		 * @param settings An object containing property values.
		*/
		copyFrom(settings: any): void;
		/** Gets the settings for the top timeline. */
		topTimelineSettings: TimelineSettings;
		/** Gets the settings for the middle timeline. */
		middleTimelineSettings: TimelineSettings;
		/** Gets the settings for the bottom timeline. */
		bottomTimelineSettings: TimelineSettings;
		/** Gets or sets the number of timelines displayed in the view. */
		timelines: number;
		/** Gets or sets the number of cells visible at the same time. */
		visibleCells: number;
	}
	/** Defines properties that enable appearance customization of schedule items in the calendar views. */
	class ItemSettings
	{
		/** Copies property values from another object.
		 * @param settings An object containing property values.
		*/
		copyFrom(settings: any): void;
		/** Gets or sets the default CSS class for all appointments whose CSS is not explicitly specified. */
		cssClass: string;
		/** Gets or sets the size of schedule items drawn in the calendar. */
		size: number;
		/** Gets or sets the amount of space between adjacent items. */
		spacing: number;
		/** Gets or sets a value indicating whether to display schedule items. */
		showItems: boolean;
		/** Gets or sets a value indicating whether to display small arrows at the beginning or at the end of each incomplete segment to indicate that the schedule item continues in an adjacent calendar cell. */
		showContinuationArrows: boolean;
		/** Gets or sets a value indicating whether to display a 'more items' link in a calendar cell which isn't big enough to contain all of its items. */
		showCues: boolean;
		/** Gets or sets a value indicating how to format and display item tooltips. */
		tooltipFormat: string;
		/** Gets or sets a value indicating how to format and display item titles. */
		titleFormat: string;
	}
	/** Represents a timetable of scheduled events. */
	class Schedule
	{
		/** Copies property values from another object.
		 * @param settings An object containing property values.
		*/
		copyFrom(settings: any): void;
		/** Gets the collection of items in this schedule. */
		items: ObservableCollection;
		/** Gets the collection of tasks in this schedule. */
		tasks: ObservableCollection;
		/** Gets the collection of contacts in this schedule. */
		contacts: ObservableCollection;
		/** Gets the collection of locations in this schedule. */
		locations: ObservableCollection;
		/** Gets the collection of resources in this schedule. */
		resources: ObservableCollection;
		/** Gets the item with the specified id.
		 * @param id The id of the item.
		 * @param occurrenceIndex The occurrence index of the item.
		*/
		getItemById(id: string, occurrenceIndex?: number): Item;
		/** In a recurrence, gets the recurrence master item with the specified id.
		 * @param id The id of the item.
		*/
		getMasterById(id: string): Item;
		/** Returns a resource from a schedule resource collection by a specified id.
		 * @param id The id of the resource.
		*/
		getResourceById(id: string): Resource;
		/** Saves the schedule to an XML file.
		 * @param url A URL specifying where the schedule's XML should be posted to.
		*/
		saveToXml(url: string): void;
		/** Saves the schedule into an XML Document. */
		toXmlDocument(): Document;
		/** Loads the schedule from an XML file.
		 * @param fileUrl The URL of an XML file where the data should be read from.
		 * @param onLoad A callback that should be invoked if the file is loaded successfully.
		 * @param onError A callback that should be invoked if the file could not be downloaded.
		*/
		loadFromXml(fileUrl: string, onLoad: Function, onError: Function): void;
		/** Loads schedule data from specified XML Document.
		 * @param document A DOM Document object containing XML-serialized schedule data.
		*/
		fromXmlDocument(document: Document): void;
		/** Serializes the schedule into a JSON string. */
		toJson(): string;
		/** Deserializes the schedule from a JSON string.
		 * @param json A string created by the toJson method.
		*/
		fromJson(json: string): void;
		/** Retrieves all events, including recurrent item instances, scheduled to occur in the specified time interval.
		 * @param startTime Time interval start.
		 * @param endTime Time interval end.
		 * @param resource A resource that must be related to the event.
		*/
		getAllItems(startTime: DateTime, endTime?: DateTime, resource?: Resource): List;
		/** Raised when the items collection is changing. */
		itemsChanging: EventDispatcher;
		/** Raised when the items collection is changed. */
		itemsChanged: EventDispatcher;
		/** Raised when the schedule is changed. */
		changed: EventDispatcher;
		/** Registers a schedule item or resource class for serialization support.
		 * @param itemClass An object identifying the class.
		 * @param xmlClassId A class identifier to use when saving and loading objects of the specified type to and from XML.
		 * @param jsonClassId A class identifier to use when saving and loading objects of the specified type to and from JSON.
		 * @param classVersion A revision number of the objects's class serialization format.
		*/
		static registerClass(itemClass: any, xmlClassId: string, jsonClassId: string, classVersion: number): void;
	}
	/** The Calendar control serves as a view in document-view architecture, where the document is implemented by the Schedule class */
	class Calendar
	{
		/** Initializes a new instance of the Calendar class.
		 * @param element The element this Calendar is associated with.
		*/
		constructor(element: HTMLDivElement);
		/** Copies property values from another object.
		 * @param settings An object containing property values.
		*/
		copyFrom(settings: any): void;
		/** Gets a reference to the calendar DOM element. */
		element: HTMLDivElement;
		/** Gets a reference to the DOM element of the calendar main header. */
		header: HTMLDivElement;
		/** Gets the collection of cells in the calendar view. */
		cells: List;
		/** Prepares the calendar for user interaction. */
		attach(): void;
		/** Detaches calendar event handlers */
		detach(): void;
		/** Draws the calendar control */
		draw(): HTMLDivElement;
		/** Draws the calendar control and prepares it for user interaction. */
		render(): void;
		/** Repaints the calendar contents
		 * @param full True to recreate calendar items, otherwise false.
		*/
		repaint(full?: boolean): void;
		/** Recalculates calendar's dimensions */
		adjust(): void;
		/** Gets the actual group type */
		realGroupType: GroupType;
		/** Gets or sets the date of the calendar. */
		date: DateTime;
		/** Gets or sets the end date of the calendar. */
		endDate: DateTime;
		/** Gets the start time of the first calendar cell. */
		startTime: DateTime;
		/** Gets the end time of the last calendar cell. */
		endTime: DateTime;
		/** Gets the start time of the first calendar cell, that can contain items. */
		itemsStartTime: DateTime;
		/** Gets the end time of the last calendar cell, that can contain items. */
		itemsEndTime: DateTime;
		/** Gets the tasks whose schedule to display when the GroupType property is set to GroupByTasks or FilterByTasks. */
		tasks: ObservableCollection;
		/** Gets the contacts whose schedule to display when the GroupType property is set to GroupByContacts or FilterByContacts. */
		contacts: ObservableCollection;
		/** Gets the resources whose schedule to display when the GroupType property is set to GroupByResources or FilterByResources. */
		resources: ObservableCollection;
		/** Gets the locations whose schedule to display when the GroupType property is set to GroupByLocations or FilterByLocations. */
		locations: ObservableCollection;
		/** Gets or sets the name of the css class of the calendar. */
		cssClass: string;
		/** Gets or sets a value indicating whether user interactions are allowed in the calendar. */
		enabled: boolean;
		/** Gets or sets the type of the current view of the calendar. */
		currentView: CalendarView;
		/** Gets or sets the current theme of the calendar. */
		theme: string;
		/** Gets or sets the grouping or filtering criteria for the calendar. */
		groupType: GroupType;
		/** Gets or sets a value indicating whether calendar's items can be inplace-edited. */
		allowInplaceEdit: boolean;
		/** Gets or sets a value indicating whether the built-in forms for item editing will be used. */
		useForms: boolean;
		/** Gets or sets a value indicating whether to show tooltips. */
		showTooltips: boolean;
		/** Gets or sets a value indicating how to format and display contact names in view headers. */
		contactNameFormat: string;
		/** Gets or sets the schedule to be displayed inside the calendar. */
		schedule: Schedule;
		/** Gets the current calendar date-time selection. */
		selection: Selection;
		/** Gets the current item selection. */
		itemSelection: ObservableCollection;
		/** Gets the MonthSettings object used to customize the appearance of the SingleMonth view. */
		monthSettings: MonthSettings;
		/** Gets the TimetableSettings object used to customize the appearance of the Timetable view. */
		timetableSettings: TimetableSettings;
		/** Gets the ListSettings object used to customize the appearance of the List view. */
		listSettings: ListSettings;
		/** Gets the WeekRangeSettings object used to customize the appearance of the WeekRange view. */
		weekRangeSettings: WeekRangeSettings;
		/** Gets the ResourceViewSettings object used to customize the appearance of the Resource view. */
		resourceViewSettings: ResourceViewSettings;
		/** Gets the MonthRangeSettings object used to customize the appearance of the MonthRange view. */
		monthRangeSettings: MonthRangeSettings;
		/** Gets the ItemSettings object used to customize the appearance of calendar items. */
		itemSettings: ItemSettings;
		/** Gets or sets the locale object used to format and display localizable information in the calendar. */
		locale: any;
		/** Gets or sets the locale object used to format and display date and time information in the calendar. */
		formatInfo: any;
		/** Gets or sets the locale object used to format and display localizable strings in the calendar. */
		localInfo: any;
		/** Gets or sets the URL of the calendar's license file. */
		licenseLocation: string;
		/** Checks if there are items which reminder has not come yet. */
		hasItemsToRemind(): boolean;
		/** Checks if there are tasks which reminder has not come yet. */
		hasTasksToRemind(): boolean;
		/** Gets the calendar view cell that corresponds to the specified DateTime and resource.
		 * @param time The time to search for.
		 * @param isEndTime true if the index of the first interval is returned when the time is the boundary between two consecutive intervals
		 * @param resource The resource to search for.
		*/
		getTimeCell(time: DateTime, isEndTime?: boolean, resource?: Resource): ViewCell;
		/** Gets the calendar view cells that corresponds to the specified DateTime range and the specified resource.
		 * @param startTime The start time of the range.
		 * @param endTime The end start time of the range.
		 * @param isEndTime true if the index of the first interval is returned when the time is the boundary between two consecutive intervals
		 * @param resource The resource to search for.
		*/
		getTimeCells(startTime: DateTime, endTime?: DateTime, isEndTime?: boolean, resource?: Resource): Array<ViewCell>;
		/** Gets the calendar view cell that contains the specified coordinates.
		 * @param x The X-coordinate of the point.
		 * @param y The Y-coordinate of the point.
		*/
		getCellAt(x: number, y: number): ViewCell;
		/** Gets the specified item's visual elements.
		 * @param item The item.
		*/
		getItemDom(item: Item): Array<HTMLDivElement>;
		/** Gets the calendar view cells that hold the specified item's visual elements.
		 * @param item The item.
		*/
		getItemCells(item: Item): Array<ViewCell>;
		/** Gets the items, whose visual elements are contained in the specified calendar cell.
		 * @param cell The cell to check.
		*/
		getCellItems(cell: ViewCell): Array<Item>;
		/** Raised when the schedule is changed. */
		scheduleChanged: EventDispatcher;
		/** Raised when the control is loaded. */
		calendarLoad: EventDispatcher;
		/** Raised when the calendar date is changed. */
		visibleDateChanged: EventDispatcher;
		/** Raised when a selection is started. */
		selectionStart: EventDispatcher;
		/** Raised when a selection changes. */
		selectionChanged: EventDispatcher;
		/** Raised when a selection has ended. */
		selectionEnd: EventDispatcher;
		/** Raised while an item is being created. */
		itemCreating: EventDispatcher;
		/** Raised when an item is created. */
		itemCreated: EventDispatcher;
		/** Raised while an item is being modified. */
		itemModifying: EventDispatcher;
		/** Raised when an item is modified. */
		itemModified: EventDispatcher;
		/** Raised while an item is being deleted. */
		itemDeleting: EventDispatcher;
		/** Raised when an item is deleted. */
		itemDeleted: EventDispatcher;
		/** Raised while a recurring item is being deleted. */
		recurringItemDeleting: EventDispatcher;
		/** Raised when an item remider is triggered. */
		itemReminderTriggered: EventDispatcher;
		/** Raised when an task remider is triggered. */
		taskReminderTriggered: EventDispatcher;
		/** Raised when an item is clicked. */
		itemClick: EventDispatcher;
		/** Raised when an item is double-clicked. */
		itemDoubleClick: EventDispatcher;
		/** Raised when an item is drawn. */
		itemDraw: EventDispatcher;
		/** Raised when a popup form is shown. */
		formShow: EventDispatcher;
		/** Raised when a popup form is closed. */
		formClose: EventDispatcher;
		/** Raised when a navigation button is clicked. */
		buttonClick: EventDispatcher;
		/** Raised when a calendar time cell is clicked. */
		cellClick: EventDispatcher;
		/** Raised when a calendar time cell is double-clicked. */
		cellDoubleClick: EventDispatcher;
		/** Raised when a calendar header is clicked. */
		headerClick: EventDispatcher;
		/** Raised when a calendar header is double-clicked. */
		headerDoubleClick: EventDispatcher;
		/** Raised when an item cue is clicked. */
		cueClick: EventDispatcher;
	}
	/** The BaseForm class is the base class for all built-in forms. */
	class BaseForm
	{
		/** Initializes a new instance of the BaseForm class.
		 * @param calendar The calendar parent object of this form.
		 * @param item The item instance associated with this form.
		*/
		constructor(calendar: Calendar, item: Item);
		/** Adds the specified control to the collection of controls.
		 * @param control The control to add.
		*/
		addControl(control: any): void;
		/** Removes the specified control from the collection of controls.
		 * @param control The control to remove.
		*/
		removeControl(control: any): void;
		/** Clears all items from the collection of controls.    */
		clearControls(): void;
		/** Gets the value of the control with the specified id.
		 * @param controlId The id of the control to check.
		*/
		getControlValue(controlId: string): any;
		/** Renders the form. */
		showForm(): void;
		/** Renders the form.
		 * @param formId The Id of the form to be closed
		*/
		closeForm(formId?: string): void;
		/** Creates a button with the specified options.
		 * @param options An object, containing data for the new control.
		*/
		createButton(options?: any): any;
		/** Creates a text area with the specified options.
		 * @param options An object, containing data for the new control.
		*/
		createTextArea(options?: any): any;
		/** Creates a text box with the specified options.
		 * @param options An object, containing data for the new control.
		*/
		createTextBox(options?: any): any;
		/** Creates a drop-down list with the specified options.
		 * @param options An object, containing data for the new control.
		*/
		createDropDownList(options?: any): any;
		/** Creates a check-box with the specified options.
		 * @param options An object, containing data for the new control.
		*/
		createCheckBox(options?: any): any;
		/** Creates a check-box list with the specified options.
		 * @param options An object, containing data for the new control.
		*/
		createCheckBoxList(options?: any): any;
		/** Creates a edit box with the specified options.
		 * @param options An object, containing data for the new control.
		*/
		createEditBox(options?: any): any;
		/** Creates a radio button with the specified options.
		 * @param options An object, containing data for the new control.
		*/
		createRadioButton(options?: any): any;
		/** Renders the form header. */
		drawHeader(): void;
		/** Renders the form content. */
		drawContent(): void;
		/** Renders the form buttons. */
		drawButtons(): void;
		/** Renders a row element. */
		row(): HTMLDivElement;
		/** Renders a column element. */
		col(): HTMLDivElement;
		/** Renders a horizontal line divider. */
		divider(): HTMLHRElement;
		/** Gets a reference to the schedule item, whose information is displayed in the form. */
		item: Item;
		/** Gets a reference to the parent Calendar control. */
		calendar: Calendar;
		/** Gets the controls collection. */
		controls: Dictionary;
		/** Gets the locale object used to format and display date and time information in the form. */
		formatInfo: any;
		/** Gets the locale object used to format and display localizable strings in the form. */
		localInfo: any;
		/** Gets a value indicating the type of the form. */
		type: string;
		/** Gets a value indicating the id of the form. */
		id: string;
		/** Gets or sets the text which is displayed in the header of the form. */
		headerText: string;
		/** Returns a reference to the form DOM element. */
		element: HTMLDivElement;
		/** Returns a reference to the DOM element of the form content. */
		content: HTMLDivElement;
		/** Returns a reference to the DOM element of the form header. */
		header: HTMLDivElement;
	}
	/** Specifies data for form related events. */
	class FormEventArgs extends CancelEventArgs
	{
		/** Gets the form instance related to the event. */
		form: BaseForm;
	}
	/** Specifies data for the ButtonClick event. */
	class ButtonEventArgs extends CancelEventArgs
	{
		/** Gets a value indicating which navigation button is clicked. */
		button: number;
	}
	/** Specifies data for cell related events. */
	class CellEventArgs extends EventArgs
	{
		/** Gets the  calendar view cell related to the event. */
		cell: ViewCell;
	}
	/** Specifies data for header related events. */
	class HeaderEventArgs extends EventArgs
	{
		/** Gets the type of the header related to the event. */
		type: HeaderType;
	}
	/** Specifies data for selection related events. */
	class SelectionEventArgs extends CancelEventArgs
	{
		/** Gets the start time of the selection. */
		startTime: DateTime;
		/** Gets the end time of the selection. */
		endTime: DateTime;
		/** Gets the resource related to the event. */
		resource: Resource;
	}
	/** Specifies data for item related events. */
	class ItemEventArgs extends EventArgs
	{
		/** Gets the item related to the event. */
		item: Item;
		/** Gets the Javascript event data. */
		rawEventArgs: any;
	}
	/** Specifies data for the ItemModifying event. */
	class ItemModifyingEventArgs extends CancelEventArgs
	{
		/** Gets the item related to the event. */
		item: Item;
		/** Gets the changed properties of the item, associated with the event. */
		changes: any;
		/** Gets the type of action that is modifying the item. */
		action: ItemModifyAction;
	}
	/** Specifies data for the ItemModified event. */
	class ItemModifiedEventArgs extends EventArgs
	{
		/** Gets the item that was modified. */
		item: Item;
		/** Gets the item before the modification has occurred. */
		oldItem: Item;
		/** Gets the type of action that is modifying the item. */
		action: ItemModifyAction;
	}
	/** Specifies data for task related events. */
	class TaskEventArgs extends CancelEventArgs
	{
		/** Gets the task for which the event is raised. */
		task: Task;
	}
	/** Specifies data the VisibleDateChanged event. */
	class DateChangedEventArgs extends EventArgs
	{
		/** Gets the new visible date. */
		newDate: DateTime;
		/** Gets the previous visible date. */
		prevDate: DateTime;
	}
	/** Provides methods that read/write schedule data to and from XML. */
	class XmlPersistContext
	{
		/** Writes a string value with the specified name.
		 * @param stringValue The string that should be saved in current XML document.
		 * @param elementName A string specifying the name of the new element.
		 * @param parentElement The parent DOM Element object.
		*/
		writeString(stringValue: string, elementName: string, parentElement: Element): Element;
		/** Reads a string value with the specified name.
		 * @param elementName The name of the string's XML element.
		 * @param parentElement The parent DOM Element object.
		 * @param defaultValue The default string to return if specified child XML element does not exist.
		*/
		readString(elementName: string, parentElement: Element, defaultValue?: string): string;
		/** Writes a floating-point number with the specified name.
		 * @param floatValue The number that should be saved in current XML document.
		 * @param elementName A string specifying the name of the new element.
		 * @param parentElement The parent DOM Element object.
		*/
		writeFloat(floatValue: number, elementName: string, parentElement: Element): Element;
		/** Reads a floating-point number with the specified name.
		 * @param elementName A string specifying the name of the number XML element.
		 * @param parentElement The parent DOM Element object.
		 * @param defaultValue The default number to return if specified child XML element does not exist.
		*/
		readFloat(elementName: string, parentElement: Element, defaultValue?: number): number;
		/** Writes a Boolean value with the specified name.
		 * @param boolValue The Boolean value that should be saved in current XML document.
		 * @param elementName A string specifying the name of the new element.
		 * @param parentElement The parent DOM Element object.
		*/
		writeBool(boolValue: boolean, elementName: string, parentElement: Element): Element;
		/** Reads a  Boolean value with the specified name.
		 * @param elementName A string specifying the name of the Boolean XML element.
		 * @param parentElement The parent DOM Element object.
		 * @param defaultValue The default value to return if specified child XML element does not exist.
		*/
		readBool(elementName: string, parentElement: Element, defaultValue?: boolean): number;
		/** Writes an integer number with the specified name.
		 * @param intValue The number that should be saved in current XML document.
		 * @param elementName A string specifying the name of the new element.
		 * @param parentElement The parent DOM Element object.
		*/
		writeInt(intValue: number, elementName: string, parentElement: Element): Element;
		/** Reads an integer number with the specified name.
		 * @param elementName A string specifying the name of the number XML element.
		 * @param parentElement The parent DOM Element object.
		 * @param defaultValue The default number to return if specified child XML element does not exist.
		*/
		readInt(elementName: string, parentElement: Element, defaultValue?: number): number;
		/** Writes a DateTime value with the specified name.
		 * @param dateTimeValue The DateTime value that should be saved in current XML document.
		 * @param elementName A string specifying the name of the new element.
		 * @param parentElement The parent DOM Element object.
		*/
		writeDateTime(dateTimeValue: DateTime, elementName: string, parentElement: Element): Element;
		/** Reads a DateTime value with the specified name.
		 * @param elementName A string specifying the name of the number XML element.
		 * @param parentElement The parent DOM Element object.
		 * @param defaultValue The default DateTime value to return if specified child XML element does not exist.
		*/
		readDateTime(elementName: string, parentElement: Element, defaultValue?: DateTime): DateTime;
	}
	/** Provides methods that read/write schedule data to and from JSON. */
	class JsonPersistContext
	{
		/** Writes a DateTime value.
		 * @param value The DateTime value that should be saved.
		*/
		writeDateTime(value: DateTime): string;
		/** Reads a DateTime value.
		 * @param value A string representing the DateTime.
		*/
		readDateTime(value: string): DateTime;
	}
}
