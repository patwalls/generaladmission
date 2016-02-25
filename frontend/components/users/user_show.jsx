var React = require('react');
var ReactRouter = require('react-router');

var UserStore = require('../../stores/user');
var AttendStore = require('../../stores/attend');
var ApiUtil = require('../../util/api_util');

var UserHeader = require('./user_header');
var UserStats = require('./user_stats');
var UserActivity = require('./user_activity');


var UserShow = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  getInitialState: function () {
    var userId = this.props.params.userId;
    ApiUtil.fetchUser(userId);
    var user = this._findUserById(userId) || {} ;
    ApiUtil.fetchAttendsForUser(userId);
    return { user: user , attends: AttendStore.all()};
  },
  _findUserById: function (id) {
    var res;
     UserStore.all().forEach(function (user) {
      if (id == user.id) {
        res = user;
      }
    }.bind(this));
     return res;
  },
  componentDidMount: function () {
    this.userListener = UserStore.addListener(this._userChanged);
    this.attendListener = AttendStore.addListener(this._artistChanged);
    var userId = this.props.params.userId;
    ApiUtil.fetchUser(userId);
  },
  componentWillUnmount: function () {
    this.userListener.remove();
    this.attendListener.remove();
  },
  _userChanged: function () {
    var userId = this.props.params.userId;
    var user = this._findUserById(userId);
    this.setState({ user: user , attends: AttendStore.all()});
  },
  totalShows: function() {
    return this.state.attends.length;
  },
  render: function () {
    console.log(this.state.attends);
    return(
      <div className='user-show'>
        <UserHeader user={this.state.user} />
        <UserStats attends={this.state.attends} />
        <UserActivity attends={this.state.attends} />
      </div>
    );
  }
});

module.exports = UserShow;
