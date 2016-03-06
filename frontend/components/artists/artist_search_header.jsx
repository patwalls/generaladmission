var React = require('react');
var ArtistSearchFilterHeader = require('./artist_search_filter_header.jsx');
var ArtistIndex = require('./artist_index.jsx');



var ArtistSearch = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  render: function () {
    return (
        <div className='search'>
          <ArtistSearchFilterHeader />
          <ArtistIndex />
        </div>
    );
  }
});

module.exports = ArtistSearch;
