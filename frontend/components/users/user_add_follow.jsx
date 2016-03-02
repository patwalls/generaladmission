var React = require('react');
var ReactRouter = require('react-router');

var UserFollow = React.createClass({
  follow: function () {
    var user_id = window.getCurrentUserId;
    var follower_id = this.props.user.id;
    ApiUtil.follow({ user_id: follower_id, follower_id: user_id });
  },
  render: function () {
    return (
      <div className="check-in-box" onClick={this.follow}>
        FOLLOW
      </div>
      );
  }
});

module.exports = UserFollow;
