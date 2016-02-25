var React = require('react');
var ReactRouter = require('react-router');

var AttendStore = require('../../stores/attend');
var ApiUtil = require('../../util/api_util');

var ActivityItem = require('../activity/activity_item');

var ArtistActivity = React.createClass({
  render: function () {
    return (
        <ul>
          {
            this.props.attends.map( function (attend) {
                return <ActivityItem attend={attend} key={attend.id}/>
            }, this)
          }
        </ul>
      );
  }
});

window.ArtistActivity = ArtistActivity;
module.exports = ArtistActivity;
