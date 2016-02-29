var React = require('react');
var ReactRouter = require('react-router');
var ActivityItem = require('../activity/activity_item');
var AttendStore = require('../../stores/attend');
var ApiUtil = require('../../util/api_util');
var UserActivityFeed = require('./user_activity_feed');
var UserActivityStats = require('./user_stats');

var UserActivity = React.createClass({
  getInitialState: function () {
    return { attends: AttendStore.all() };
  },

  componentDidMount: function () {
    this.attendsListener = AttendStore.addListener(this._attendsChanged);
  },

  componentWillUnmount: function () {
    this.attendsListener.remove();
  },

  componentWillReceiveProps: function (newProps) {
    ApiUtil.fetchAttendsForUser(newProps.user.id);
    return { attends: AttendStore.all() };
  },

  _attendsChanged: function () {
    this.setState({ attends: AttendStore.all() })
  },

  render: function () {
    return (
        <div className='user-activity'>
          <UserActivityFeed attends={this.state.attends} />
        </div>
      );
    }
});

module.exports = UserActivity;
