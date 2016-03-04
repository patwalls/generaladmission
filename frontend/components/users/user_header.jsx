var React = require('react');
var ReactRouter = require('react-router');

var UserActivityStats = require('./user_stats');
var UserAddFollow = require('./user_add_follow');
var UserAlreadyFollow = require('./user_already_follow');

var UserHeader = React.createClass({
  getInitialState: function () {
    return { followstatus: false };
  },
  follows: function (newProps) {
    this.followStatus = false;
    if (typeof newProps.user.following !== 'undefined') {
      newProps.user.following.forEach( function (follow) {
        if (follow.id === window.getCurrentUserId) {
          this.followStatus = true;
          this.changeFollowStatus();
        }
      }.bind(this));
    }
  },
  componentWillMount: function () {
    // this.props = 'undefined';
  },
  componentWillReceiveProps: function (newProps) {
    console.log(newProps.user.id);
    this.follows(newProps);
  },
  changeFollowStatus: function () {
    this.setState({ followstatus: true });
  },
  render: function () {
    var photoDivStyle = {
      backgroundImage: 'url(https://c2.staticflickr.com/4/3936/15617350755_ecaab550f0_b.jpg)'
    };
    var addFollowButton;
    if (this.state.followstatus === false) {
      if (this.props.user.id === window.getCurrentUserId) {
        addFollowButton = <div></div>;
      } else {
      addFollowButton = <UserAddFollow user={this.props.user} changeFollowStatus={this.changeFollowStatus}/>;
      }
    } else {
      addFollowButton = <UserAlreadyFollow user={this.props.user} />;
    }
    return (
      <div className='user-header'>
      <div className='overflow'>
        <div className='bg-photo-cool' style={photoDivStyle}></div>
      </div>
        <div className='col-md-12 inner-header'>
            <div className='user-photo-text-name'>{this.props.user.name}</div>
            <div className='user-photo-text-username'>{this.props.user.username}</div>
            {addFollowButton}
            <UserActivityStats user={this.props.user}/>
            <img className='user-header-avatar'
              src={this.props.user.photo}
              height='250px'
              width='250px'
            />
          </div>
        </div>
      );
  }
});

module.exports = UserHeader;
