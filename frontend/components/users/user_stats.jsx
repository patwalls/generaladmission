var React = require('react');
var ReactRouter = require('react-router');

var UserStats = React.createClass({
  totalShows: function () {
    if (this.props.attends.length > 0) {
      return this.props.attends.length;
    }
  },
  totalUniqueShows: function () {
    if (this.props.attends.length > 0) {
      var unique_shows = [];
      for (var i = 0; i < this.props.attends.length; i++) {
        var artist = this.props.attends[i].artist_id;
        if (!unique_shows.includes(artist)) {
          unique_shows.push(this.props.attends[i].artist_id)
        }
      }
      return unique_shows.length;
    }
  },
  render: function () {
    return (
      <div className='artist-stats'>
        <div className='stat'>
          <div className='header'>
            SHOWS
          </div>
          <div className='calc'>
            20
          </div>
        </div>
        <div className='stat'>
          <div className='header'>
            UNIQUE
          </div>
          <div className='calc'>
            17
          </div>
        </div>
        <div className='stat'>
          <div className='header'>
            FRIENDS
          </div>
          <div className='calc'>
            25
          </div>
        </div>
      </div>
      );
  }
});

module.exports = UserStats;
