var React = require('react');
var ReactRouter = require('react-router');

var UserAlreadyFollow = React.createClass({
  render: function () {
    return (
      <a href='#' className="check-in-box">
        FOLLOWING
      </a>
      );
  }
});

module.exports = UserAlreadyFollow;
