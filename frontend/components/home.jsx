var React = require('react');
var ArtistIndex = require('./artists/artist_index.jsx');
var ArtistSearch = require('./artists/artist_search_filter.jsx');

var Home = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  render: function () {
    return (
      <div className='container-fluid search-container'>
        <img className='bgimage' src='http://www.diyphotography.net/wordpress/wp-content/uploads/2014/03/adam-elmakias-08.jpg' />
        <div className='search-bar'>
          <ArtistSearch />
          <ArtistIndex />
        </div>
      </div>
    );
  }
});

module.exports = Home;
