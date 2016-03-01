var React = require('react');
var ReactRouter = require('react-router');
var UserActivityItem = require('../activity/user_activity_item');

var UserActivityFeed = React.createClass({
  render: function () {
    return (
        <div className='user-activity'>
          <ul>
            {
              this.props.attends.map( function (attend) {
                  return <UserActivityItem attend={attend} key={attend.id}/>
              }, this)
            }
          </ul>
        </div>
      );
    }
});

module.exports = UserActivityFeed;
