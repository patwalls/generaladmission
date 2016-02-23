var React = require('react');
var ArtistStore = require('../../stores/artist');
var ApiUtil = require('../../util/api_util');

var ArtistIndex = React.createClass({

  getInitialState: function() {
    return {artists: ArtistStore.all()};
  },

  _onChange: function() {
    this.setState({artists: ArtistStore.all()});
  },

  componentDidMount: function (callback) {
    ApiUtil.fetchArtists();
    this.listenerToken = ArtistStore.addListener(this._onChange);
  },

  componentWillUnmount: function () {
    this.listenerToken.remove();
  },

  render: function () {
    console.log(this.state.artists)
    return(
      <ul>
        {
          this.state.artists.map( function (artist) {
            return <li>{artist.name}</li>;
          }, this)
        }
      </ul>
    );
  }
});

module.exports = ArtistIndex;
