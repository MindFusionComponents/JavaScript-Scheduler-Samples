import React, { Component } from 'react';
import { Info, Foot } from './Info';
import { ReactCalendar } from './Calendar';
import p from 'scheduler-library';
import './themes/blue.css';
import './themes/business.css';
import './themes/earth.css';
import './themes/gray.css';
import './themes/green.css';
import './themes/light.css';
import './themes/peach.css';
import './themes/standard.css';
import './themes/pastel.css';

import { locale as en } from 'scheduler-library/localization/en';
import { locale as de } from 'scheduler-library/localization/de';
import { locale as ru } from 'scheduler-library/localization/ru';

class MinApp extends Component {
  constructor(props) {
    super(props);

    var date = new p.DateTime();
    var items = new p.ObservableCollection();

    for (var i = 0; i < 5; i++) {
      var item = new p.Item();
      item.subject = "calendar item" + i.toString();
      item.startTime = date.clone().addDays(Math.floor((Math.random() * 30) + 1));
      item.endTime = item.startTime.clone().addDays(Math.floor(Math.random() * 5));
      items.add(item);
    }

    this.calProps = {
      currentView: p.CalendarView.SingleMonth,
      schedule:
      {
        items: items
      }
    }
  }

  changeView(value) {
    this.reactCalendar.setState({ currentView: value });
  }

  onThemeChanged(e) {
    this.reactCalendar.setState({ theme: e.target.value });
  }

  onLocaleChanged(e) {
    var l;
    switch (e.target.value) {
      case "de": l = de; break;
      case "ru": l = ru; break;
      default: l = en; break;
    }
    this.reactCalendar.setState({ locale: l });
  }

  render() {
    return (

      <div className="App">

        <div className="header">
          <button onClick={(e) => this.changeView(1, e)}>Single Month</button>
          <button onClick={(e) => this.changeView(0, e)}>MonthRange</button>
          <button onClick={(e) => this.changeView(3, e)}>List</button>
          <button onClick={(e) => this.changeView(2, e)}>Week Range</button>
          <button onClick={(e) => this.changeView(4, e)}>Timetable</button>
          <select id="theme" onChange={this.onThemeChanged.bind(this)}>
            <option value="">none</option>
            <option value="standard">standard</option>
            <option value="light">light</option>
            <option value="business">business</option>
            <option value="green">green</option>
            <option value="blue">blue</option>
            <option value="gray">gray</option>
            <option value="peach">peach</option>
            <option value="earth">earth</option>
            <option value="pastel">pastel</option>
          </select>
          <select id="locale" onChange={this.onLocaleChanged.bind(this)}>
            <option value="en">english(default)</option>
            <option value="de">german</option>
            <option value="ru">russian</option>
          </select>
        </div>

        <div className="container">
          <div className="main">
            <ReactCalendar {...this.calProps} ref={(ref) => this.reactCalendar = ref} />
          </div>
          <div className="sidebar">
            <h1>About this sample</h1>
            <p>A sample program that shows everything needed to embed MindFusion.Scheduling in	a web page.</p>
            <Info />
          </div>
        </div>
        <Foot />
      </div>
    );
  }
}


export default MinApp;
