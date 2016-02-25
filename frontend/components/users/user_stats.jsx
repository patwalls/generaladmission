var React = require('react');
var ReactRouter = require('react-router');

var UserStats = React.createClass({
  totalShows: function () {
    return this.props.attends.length;
  },
  totalUniqueShows: function () {
    var unique_shows = [];
    for (var i = 0; i < this.props.attends.length; i++) {
      var artist = this.props.attends[i].artist_id;
      if (!unique_shows.includes(artist)) {
        unique_shows.push(this.props.attends[i].artist_id)
      }
    }
    return unique_shows.length;
  },
  render: function () {
    return (
        <div className='user-stats'>
          Total Shows: {this.totalShows()}
          Total Unique Shows: {this.totalUniqueShows()}
          Total Friends: 0
        </div>
      );
  }
});

module.exports = UserStats;
