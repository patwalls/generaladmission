var React = require('react');
var ReactRouter = require('react-router');
var FriendItem = require('./user_friend_item');
var FriendStore = require('../../stores/friend');

var UserFriends = React.createClass({
  getInitialState: function () {
    return { friends: FriendStore.all() };
  },

  componentDidMount: function () {
    this.friendsListener = FriendStore.addListener(this._friendsChanged);
  },

  componentWillUnmount: function () {
    this.friendsListener.remove();
  },

  componentWillReceiveProps: function (newProps) {
    ApiUtil.fetchFriendsForUser(newProps.user.id);
    return { friends: FriendStore.all() };
  },

  _friendsChanged: function () {
    this.setState ({ friends: FriendStore.all() });
  },

  render: function () {
    return (
        <div className='user-friends'>
          <h3>Friends</h3>
          <ul>
          {
            this.state.friends.map( function (friend) {
                return <FriendItem friend={friend} />
            }, this)
          }
          </ul>
        </div>
      );
  }
});

module.exports = UserFriends;
