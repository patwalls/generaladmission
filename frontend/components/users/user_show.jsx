var React = require('react');
var ReactRouter = require('react-router');

var UserStore = require('../../stores/user');
var AttendStore = require('../../stores/attend');
var ApiUtil = require('../../util/api_util');

var UserHeader = require('./user_header');
var UserStats = require('./user_stats');
var UserActivity = require('./user_activity');
var UserFriends = require('./user_friends');


var UserShow = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  getInitialState: function () {
    var userId = this.props.params.userId;
    var user = this._findUserById(userId) || {} ;
    return { user: user };
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
    var userId = this.props.params.userId;
    ApiUtil.fetchUser(userId);
  },
  componentWillReceiveProps: function (newProps) {
    var userId = newProps.params.userId;
    ApiUtil.fetchUser(userId);
  },
  componentWillUnmount: function () {
    this.userListener.remove();
  },
  _userChanged: function () {
    var userId = this.props.params.userId;
    var user = this._findUserById(userId);
    this.setState({ user: user });
  },
  render: function () {
    return(
      <div className='user-show'>
        <div className='user-top'>
          <UserHeader user={this.state.user} />
          <button>Add Friend!</button>
        </div>
        <div className='user-left'>
          <UserActivity user={this.state.user} />
        </div>
        <div className='user-right'>
          <UserFriends user={this.state.user} />
          <div className='top-artists'>Top Artists</div>
          <div className='top-venues'>Top Venues</div>
        </div>
      </div>
    );
  }
});

module.exports = UserShow;
