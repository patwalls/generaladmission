var React = require('react');
var ReactRouter = require('react-router');

var UserAddFriend = React.createClass({
  addFriend: function () {
    var user_id = window.getCurrentUserId;
    var friend_id = this.props.user.id;
    ApiUtil.addFriend({ user_id: user_id, friend_id: friend_id });
  },
  render: function () {
    return (
      <div className="check-in-box" onClick={this.addFriend}>
        FOLLOW
      </div>
      );
  }
});

module.exports = UserAddFriend;
