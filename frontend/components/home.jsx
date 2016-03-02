var React = require('react');
var ArtistSearch = require('./artists/artist_search.jsx');

var Home = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  render: function () {
    return (
      <div className='home-components'>
        <div className='site-title'>GENERAL ADMISSION</div>
        <div className='tagline'>YOUR RESOURSE FOR THE BEST CONCERTS</div>
        <ArtistSearch />
      </div>
    );
  }
});

module.exports = Home;
