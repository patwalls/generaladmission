var React = require('react');
var ReactRouter = require('react-router');

var UserHeader = React.createClass({
  render: function () {
    return (
        <div className='artist-header'>
          <h2>Name: {this.props.user.username}</h2>
          <h2>Name: {this.props.user.name}</h2>
          <h3>Photo: TBD </h3>
        </div>
      );
  }
});

module.exports = UserHeader;
