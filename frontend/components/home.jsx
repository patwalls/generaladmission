var React = require('react');
var ArtistSearch = require('./artists/artist_search.jsx');

var Home = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  componentWillMount: function () {
    document.body.classList.add('bg-body');
  },
  render: function () {
    return (
      <div className='home-components'>
        <div className='site-title'>GENERAL ADMISSION</div>
        <div className='tagline'>YOUR RESOURCE FOR CONCERT REVIEWS</div>
        <ArtistSearch />
      </div>
    );
  }
});

module.exports = Home;
