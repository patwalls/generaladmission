var React = require('react');
var ArtistSearchFilter = require('./artist_search_filter.jsx');
var ArtistIndex = require('./artist_index.jsx');



var ArtistSearch = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  render: function () {
    return (
        <div className='search'>
          <ArtistSearchFilter />
          <ArtistIndex />
        </div>
    );
  }
});

module.exports = ArtistSearch;
