var React = require('react');
var ReactRouter = require('react-router');

var ArtistStore = require('../../stores/artist');
var ApiUtil = require('../../util/api_util');

var ArtistShow = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  getInitialState: function () {
    var artistId = this.props.params.artistId;
    var artist = this._findArtistById(artistId) || {} ;
    return { artist: artist };
  },
  _findArtistById: function (id) {
    var res;
     ArtistStore.all().forEach(function (artist) {
      if (id == artist.id) {
        res = artist;
      }
    }.bind(this));
     return res;
  },
  componentDidMount: function () {
    this.artistListener = ArtistStore.addListener(this._artistChanged);
    ApiUtil.fetchArtists();
  },
  componentWillUnmount: function () {
    this.artistListener.remove();
  },
  _artistChanged: function () {
    var artistId = this.props.params.artistId;
    var artist = this._findArtistById(artistId);
    this.setState({ artist: artist });
  },
  render: function () {
    return (
        <div className='artist-show'>
          Name: {this.state.artist.name}
          <img src={this.state.artist.photo} width="500"/>
          Genre: {this.state.artist.genre}
          Description: {this.state.artist.description}
          SongKick ID: {this.state.artist.songkick_id}
        </div>
      );
  }
});

module.exports = ArtistShow;
