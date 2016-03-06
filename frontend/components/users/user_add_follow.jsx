var React = require('react');
var ReactRouter = require('react-router');

var UserFollow = React.createClass({
  follow: function () {
    if (typeof window.getCurrentUserId === 'undefined')  {
      window.location.href = '/session/new';
    }
    var user_id = window.getCurrentUserId;
    var follower_id = this.props.user.id;
    ApiUtil.follow({ user_id: follower_id, follower_id: user_id });
    this.props.changeFollowStatus();
  },
  render: function () {
    return (
      <div className="add-follow" onClick={this.follow}>
        {'Follow ' + this.props.user.name}
      </div>
      );
  }
});

module.exports = UserFollow;
