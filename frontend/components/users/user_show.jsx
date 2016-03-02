var React = require('react');
var ReactRouter = require('react-router');

var UserStore = require('../../stores/user');
var AttendStore = require('../../stores/attend');
var ApiUtil = require('../../util/api_util');

var UserHeader = require('./user_header');
var UserStats = require('./user_stats');
var UserActivity = require('./user_activity');
var UserFollowers = require('./user_followers');
var UserFollows = require('./user_follows');


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
    var photoDivStyle = {
      backgroundImage: 'url(https://c2.staticflickr.com/4/3936/15617350755_ecaab550f0_b.jpg)'
    };
    return(
    <div>
      <div className='container-fluid nopadding'>
        <div className='row'>
          <div className='col-md-12 nopadding header-photo' style={photoDivStyle}>
              <UserHeader user={this.state.user} />
          </div>
        </div>
      </div>
      <div className='container-fluid nopadding'>
        <div className='row'>
          <div className='col-lg-8 col-md-8 col-sm-12 col-xs-12 nopadding'>
            <UserActivity user={this.state.user} />
          </div>
          <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12 right-side'>
            <UserFollows user={this.state.user} />
            <UserFollowers user={this.state.user} />
            <div className='right-sidebar'>Top Artists</div>
            <div className='right-sidebar'>Top Venues</div>
          </div>
        </div>
      </div>
    </div>
    );
  }
});

module.exports = UserShow;
