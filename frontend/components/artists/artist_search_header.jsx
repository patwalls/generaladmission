var React = require('react');
var ArtistSearchFilterHeader = require('./artist_search_filter_header.jsx');
var ArtistIndexHeader = require('./artist_index_header.jsx');


var ArtistSearchHeader = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  render: function () {
    return (
        <div className='search'>
          <ArtistSearchFilterHeader />
          <ArtistIndexHeader />
        </div>
    );
  }
});

module.exports = ArtistSearchHeader;
