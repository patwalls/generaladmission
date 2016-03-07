var React = require('react');
var ReactRouter = require('react-router');
var ShowStore = require('../../stores/show');
var ArtistShowItem = require('./artist_show_item');

var ArtistUpcomingShows = React.createClass({
  getInitialState: function () {
    return { shows: ShowStore.all().slice(0,5) };
  },

  componentDidMount: function () {
    this.showsListener = ShowStore.addListener(this._showsChanged);
  },

  componentWillUnmount: function () {
    this.showsListener.remove();
  },

  componentWillReceiveProps: function (newProps) {
    var songKickId = newProps.artist.songkick_id;
    ApiUtil.upcomingEventsForArtist(songKickId);
    return { shows: ShowStore.all().slice(0,5) };
  },

  _showsChanged: function () {
    this.setState ({ shows: ShowStore.all().slice(0,5) });
  },

  render: function () {
    return (
      <div className='module'>
        Upcoming Shows
        <hr />
        <div className='shows'>
          <ul>
            {
              this.state.shows.map( function (show) {
                  return <ArtistShowItem key={show.id} show={show}/>
              }, this)
            }
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = ArtistUpcomingShows;
