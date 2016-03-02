var React = require('react');
var ReactRouter = require('react-router');

var UserActivityStats = require('./user_stats');
var UserAddFollow = require('./user_add_follow');
var UserAlreadyFollow = require('./user_already_follow');

var UserHeader = React.createClass({
  follows: function () {
    this.follow = false;
    if (typeof this.props.user.following !== 'undefined') {
      this.props.user.following.forEach( function (follow) {
        if (follow.id === window.getCurrentUserId) {
          this.follow = true;
        }
      }.bind(this));
    }
  },
  render: function () {
    var addFollowButton;
    this.follows();
    if (this.follow === false) {
      if (this.props.user.id === window.getCurrentUserId) {
        addFollowButton = <div> You! </div>;
      } else {
      addFollowButton = <UserAddFollow user={this.props.user}/>;
      }
    } else {
      addFollowButton = <UserAlreadyFollow />;
    }
    return (
        <div className='user-header'>
          <div className='user-photo-text-name'>{this.props.user.name}</div>
          <div className='user-photo-text-username'>{this.props.user.username}</div>
          <div className='photo'>
            <img src={this.props.user.photo} className="img-circle" alt="Cinque Terre" width="250" height="250"></img>
          </div>
          {addFollowButton}
          <UserActivityStats user={this.props.user}/>
        </div>
      );
  }
});

module.exports = UserHeader;
