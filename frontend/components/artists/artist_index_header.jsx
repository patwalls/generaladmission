var React = require('react');
var ApiUtil = require('../../util/api_util');
var HeaderSearchStore = require('../../stores/header_search');

var HeaderArtistIndexItem = require('./header_artist_index_item');

var HeaderArtistIndex = React.createClass({

  getInitialState: function() {
    return {artists: HeaderSearchStore.all().slice(0,5)};
  },

  _onChange: function() {
    this.setState({artists: HeaderSearchStore.all().slice(0,5)});
  },

  componentDidMount: function (callback) {
    this.listenerToken = HeaderSearchStore.addListener(this._onChange);
  },

  componentWillUnmount: function () {
    this.listenerToken.remove();
  },

  render: function () {
    return(
      <ul className='results'>
        {
          this.state.artists.map( function (artist) {
              return <HeaderArtistIndexItem artist={artist} key={artist.id} />
          }, this)
        }
      </ul>
    );
  }
});

module.exports = HeaderArtistIndex;
