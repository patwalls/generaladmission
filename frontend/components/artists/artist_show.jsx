var React = require('react');
var ReactRouter = require('react-router');

var ArtistStore = require('../../stores/artist');
var ApiUtil = require('../../util/api_util');

var ArtistHeader = require('./artist_header');
var ArtistAbout = require('./artist_about');

var ArtistActivity = require('./artist_activity.jsx');

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
    var artistId = this.props.params.artistId;
    ApiUtil.fetchSingleArtist(artistId);
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
          <ArtistHeader artist={this.state.artist}/>
          <ArtistAbout artist={this.state.artist}/>
          <ArtistActivity params={this.props.params} artist={this.state.artist}/>
        </div>
      );
  }
});

module.exports = ArtistShow;
