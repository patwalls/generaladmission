var React = require('react');
var ReactRouter = require('react-router');

var ActivityItem = React.createClass({
  render: function () {
    return (
        <div className='activity-item'>
          <ul>
            <li>Pat Walls saw this artist on 9/23/15</li>
            <li>4 Stars out of 5</li>
            <li>This is one of the best concerts I have ever been to! So much fun.</li>
          </ul>
        </div>
      );
  }
});

module.exports = ActivityItem;
