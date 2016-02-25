var React = require('react');
var ArtistIndex = require('./artists/artist_index.jsx');
var ArtistSearch = require('./artists/artist_search_filter.jsx');

var Home = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  render: function () {
    return (
      <div id='general-admission'>
        <ArtistSearch />
        <ArtistIndex />
      </div>
    );
  }
});

module.exports = Home;
