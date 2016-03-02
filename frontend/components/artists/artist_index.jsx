var React = require('react');
var ArtistStore = require('../../stores/artist');
var ApiUtil = require('../../util/api_util');
var SearchStore = require('../../stores/search');

var ArtistIndexItem = require('./artist_index_item');

var ArtistIndex = React.createClass({

  getInitialState: function() {
    return {artists: SearchStore.all().slice(0,5)};
  },

  _onChange: function() {
    this.setState({artists: SearchStore.all().slice(0,5)});
  },

  componentDidMount: function (callback) {
    this.listenerToken = SearchStore.addListener(this._onChange);
  },

  componentWillUnmount: function () {
    this.listenerToken.remove();
  },

  render: function () {
    return(
      <ul className='results'>
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
