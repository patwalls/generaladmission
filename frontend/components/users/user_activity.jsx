var React = require('react');
var ReactRouter = require('react-router');
var ActivityItem = require('../activity/activity_item');
var AttendStore = require('../../stores/attend');
var ApiUtil = require('../../util/api_util');
var UserActivityStats = require('./user_stats');
var UserActivityItem = require('../activity/user_activity_item');

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
      <div>
        <div className='activity-header'>
          <span> {this.props.user.name}'s Activity </span>
          <hr />
        </div>
        <ul className='nopadding'>
          {
            this.state.attends.map( function (attend) {
                return <UserActivityItem attend={attend} key={attend.id}/>
            }, this)
          }
        </ul>
      </div>
      );
    }
});

module.exports = UserActivity;
