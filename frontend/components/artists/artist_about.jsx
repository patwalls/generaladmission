var React = require('react');
var ReactRouter = require('react-router');

var ArtistAbout = React.createClass({
  render: function () {
    return (
        <div className='artist-about'>
          <ul>
            <li>Genre: {this.props.artist.genre}</li>
            <li>Description: {this.props.artist.description}</li>
            <li>SongKick ID: {this.props.artist.songkick_id}</li>
          </ul>
        </div>
      );
  }
});

module.exports = ArtistAbout;
