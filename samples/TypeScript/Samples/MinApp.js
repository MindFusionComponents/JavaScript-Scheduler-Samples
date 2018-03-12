// <reference path="jsplanner.d.ts" />
var MinApp;
(function (MinApp) {
    var p = MindFusion.Scheduling;
    // create a new instance of the calendar 
    var calendar = new p.Calendar(document.getElementById("calendar"));
    var date = new p.DateTime();
    for (var i = 0; i < 5; i++) {
        var item = new p.Item();
        item.subject = "calendar item" + i.toString();
        item.startTime = date.clone().addDays(Math.floor((Math.random() * 30) + 1));
        item.endTime = item.startTime.clone().addDays(Math.floor(Math.random() * 5));
        calendar.schedule.items.add(item);
    }
    // render the calendar control
    calendar.render();
    function changeView(value) {
        calendar.currentView = value;
    }
    MinApp.changeView = changeView;
    var theme = document.getElementById("theme");
    theme.onchange = function () {
        calendar.theme = theme.value;
    };
})(MinApp || (MinApp = {}));
//# sourceMappingURL=MinApp.js.map