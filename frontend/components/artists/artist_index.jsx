var React = require('react');
var ArtistStore = require('../../stores/artist');
var ApiUtil = require('../../util/api_util');

var ArtistIndexItem = require('./artist_index_item');

var ArtistIndex = React.createClass({

  getInitialState: function() {
    return {artists: ArtistStore.all()};
  },

  _onChange: function() {
    this.setState({artists: ArtistStore.all()});
  },

  componentDidMount: function (callback) {
    this.listenerToken = ArtistStore.addListener(this._onChange);
  },

  componentWillUnmount: function () {
    this.listenerToken.remove();
  },

  render: function () {
    return(
      <ul>
        {
          this.state.artists.map( function (artist) {
              return <ArtistIndexItem artist={artist} key={artist.id} />
          }, this)
        }
      </ul>
    );
  }
});

module.exports = ArtistIndex;
