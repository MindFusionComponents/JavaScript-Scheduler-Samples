import React from 'react';

export function Info() {
  return <div>
    <h1>About JsPlanner</h1>
    <p>JsPlanner is fully interactive scheduling control for the web, that can be used to present calendars and timetables to users and
	let them edit the schedule information interactively. JsPlanner can display a schedule in several view types, such as:</p>
    <ul>
      <li>Single and multiple month views</li>
      <li>Single and multiple week views</li>
      <li>Horizontal and vertical lists of time intervals</li>
      <li>Horizontal and vertical timetables</li>
      <li>Resource view, displaying the distribution of resources over a period of time</li>
    </ul>
    <h2>Features</h2>
    <ul>
      <li>Several different view types</li>
      <li>Interactive item creation and modification</li>
      <li>Filtering and grouping</li>
      <li>Recurring events</li>
      <li>Localization support</li>
      <li>Themes</li>
      <li>XML and JSON schedule serialization</li>
    </ul>
    <p>JsPlanner is written 100% in JavaScript and can easily be integrated into any web application. It uses Flexible Box for layout.</p>
  </div>
}

export function Foot() {
  return <div className="footer">
    <p>Copyright 2017-2020 MindFusion LLC.</p>
  </div>
}