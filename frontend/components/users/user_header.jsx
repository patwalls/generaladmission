var React = require('react');
var ReactRouter = require('react-router');

var UserActivityStats = require('./user_stats');

var UserHeader = React.createClass({
  render: function () {
    return (
        <div className='user-header'>
          <div className='user-photo-text-name'>Pat Walls</div>
          <div className='user-photo-text-username'>{this.props.user.username}</div>
          <div className='photo'>
            <img src="http://i.imgur.com/wEml88p.png" className="img-circle" alt="Cinque Terre" width="250" height="250"></img>
          </div>
          <a href='#' className="check-in-box">
            ADD FRIEND
          </a>
          <UserActivityStats />
        </div>
      );
  }
});

module.exports = UserHeader;
