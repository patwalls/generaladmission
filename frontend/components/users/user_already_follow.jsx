var React = require('react');
var ReactRouter = require('react-router');

var UserAlreadyFollow = React.createClass({
  render: function () {
    return (
      <div className="check-in-box">
        <span className="glyphicon glyphicon-ok check-in" aria-hidden="true"></span>
      </div>
      );
  }
});

module.exports = UserAlreadyFollow;
