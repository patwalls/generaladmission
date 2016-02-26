var React = require('react');
var ReactRouter = require('react-router');
var History = require('react-router').History;


var FriendItem = React.createClass({
  mixins: [History],

  showDetail: function () {
    this.history.push("/users/" + this.props.friend.friend_id);
    ApiUtil.fetchUser(this.props.friend.friend_id);
    ApiUtil.fetchFriendsForUser(this.props.friend.friend_id);
  },

  render: function () {
    return (
        <ul className='friend-item' onClick={this.showDetail}>
          <li>{this.props.friend.friend_user_name}</li>
          <li> 100 Shows </li>
        </ul>
      );
  }
});

module.exports = FriendItem;
