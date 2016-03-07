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
  componentWillMount: function () {
    document.body.classList.remove('bg-body');
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
    <div>
      <div className='container-fluid nopadding'>
        <div className='row artist-header'>
          <UserHeader user={this.state.user} />
        </div>
      </div>
      <div className='container-fluid page-content'>
        <div className='row'>
          <div className='col-lg-8 col-md-8 col-sm-12 col-xs-12 nopadding testy'>
            <div className='inner'>
            <div className='row module'>
              <UserActivity user={this.state.user} />
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12 nopadding testy'>
            <div className='inner'>
              <UserFollows user={this.state.user} />
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  }
});

module.exports = UserShow;
