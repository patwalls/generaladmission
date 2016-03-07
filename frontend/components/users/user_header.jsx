var React = require('react');
var ReactRouter = require('react-router');

var UserActivityStats = require('./user_stats');
var UserAddFollow = require('./user_add_follow');
var UserAlreadyFollow = require('./user_already_follow');

var UserHeader = React.createClass({
  render: function () {
    var addFollowButton;
    if ((typeof this.props.user !== 'undefined') && (Object.keys(this.props.user).length !== 0)) {
      this.props.user.following.forEach( function (follow) {
        if (follow.id === window.getCurrentUserId) {
          addFollowButton = <UserAlreadyFollow user={this.props.user} />;
        }
      }.bind(this));
    }


    if (typeof addFollowButton === 'undefined') {
      addFollowButton = <UserAddFollow user={this.props.user}/>;
    }

    if ((typeof this.props.user !== 'undefined') || (Object.keys(this.props.user).length !== 0)) {
      if (this.props.user.id === window.getCurrentUserId) {
        addFollowButton = <div className='follow-yourself'></div>;
      }
    }

    var photoDivStyle = {
      backgroundImage: 'url(https://c2.staticflickr.com/4/3936/15617350755_ecaab550f0_b.jpg)'
    };

    var userPhoto;

    if (this.props.user.photo === null) {
      userPhoto = 'http://cdn3.rd.io/user/no-user-image-square.jpg';
    } else {
      userPhoto = this.props.user.photo;
    }
    return (
      <div className='artist-header'>
      <div className='overflow'>
        <div className='bg-photo-cool' style={photoDivStyle}></div>
      </div>
        <div className='inner-header'>
            <div className='user-photo-text-name'>{this.props.user.name}</div>
            <span className="glyphicon glyphicon-user" aria-hidden="true"></span>
            <div className='user-photo-text-username'>{this.props.user.username}</div>
            {addFollowButton}
            <UserActivityStats user={this.props.user}/>

            <img className='user-header-avatar'
              src={userPhoto}
              height='250px'
              width='250px'
            />
          </div>
          <div className='user-dropdown'></div>
        </div>
      );
  }
});

module.exports = UserHeader;
