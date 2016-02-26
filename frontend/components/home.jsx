var React = require('react');
var ArtistIndex = require('./artists/artist_index.jsx');
var ArtistSearch = require('./artists/artist_search_filter.jsx');

var Home = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  render: function () {
    return (
      <div id='home-page'>
        <div id='search-and-results'>
          <div id='search-box'><ArtistSearch /></div>
          <div id='search-results'><ArtistIndex /></div>
        </div>
      </div>
    );
  }
});

module.exports = Home;
