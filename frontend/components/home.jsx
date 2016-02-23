var React = require('react');
var ArtistIndex = require('./artists/artist_index.jsx');

var Home = React.createClass({
  render: function () {
    return (
      <div id='general-admission'>
        <ArtistIndex />
      </div>
    );
  }
});

module.exports = Home;
