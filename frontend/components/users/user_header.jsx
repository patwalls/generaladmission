var React = require('react');
var ReactRouter = require('react-router');

var UserActivityStats = require('./user_stats');
var UserAddFriend = require('./user_add_friend');
var UserAlreadyFriend = require('./user_already_friend');

var UserHeader = React.createClass({
  follows: function () {
    if (typeof this.props.user.friends !== 'undefined') {
      this.props.user.friends.forEach( function (friend) {
        console.log(friend.friend_id);
      }.bind(this));
    }
  },
  render: function () {
    var addFriendButton;
    if (this.follows() === false) {
      addFriendButton = <UserAddFriend user={this.props.user}/>;
    } else if (this.follows()) {
      addFriendButton = <UserAlreadyFriend />
    }
    return (
        <div className='user-header'>
          <div className='user-photo-text-name'>{this.props.user.name}</div>
          <div className='user-photo-text-username'>{this.props.user.username}</div>
          <div className='photo'>
            <img src={this.props.user.photo} className="img-circle" alt="Cinque Terre" width="250" height="250"></img>
          </div>
          {addFriendButton}
          <UserActivityStats user={this.props.user}/>
        </div>
      );
  }
});

module.exports = UserHeader;
