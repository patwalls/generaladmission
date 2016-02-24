var React = require('react');
var ReactRouter = require('react-router');

var ActivityItem = React.createClass({
  render: function () {
    return (
        <div className='activity-item'>
          <ul>
            <li>User {this.props.attend.user_id} saw this artist on {this.props.attend.date}</li>
            <li>{this.props.attend.rating} Stars out of 5</li>
            <li>{this.props.attend.review}</li>
          </ul>
        </div>
      );
  }
});

module.exports = ActivityItem;
