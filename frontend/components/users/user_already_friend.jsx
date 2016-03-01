var React = require('react');
var ReactRouter = require('react-router');

var UserAlreadyFriend = React.createClass({
  render: function () {
    return (
      <a href='#' className="check-in-box">
        FOLLOWING
      </a>
      );
  }
});

module.exports = UserAlreadyFriend;
