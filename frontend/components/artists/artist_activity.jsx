var React = require('react');
var ReactRouter = require('react-router');

var ActivityItem = require('../activity/activity_item');

var ArtistActivity = React.createClass({
  render: function () {
    return (
        <div className='artist-activity'>
          <h2>Artist Activity:</h2>
          <ActivityItem />
          <ActivityItem />
          <ActivityItem />
        </div>
      );
  }
});

module.exports = ArtistActivity;
