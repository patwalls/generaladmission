var React = require('react');
var ReactRouter = require('react-router');

var ArtistHeader = React.createClass({
  render: function () {
    return (
        <div className='artist-header'>
          <h2>Name: {this.props.artist.name}</h2>
          <h3>Average Rating:</h3>
          <img src={this.props.artist.photo} width='500'></img>
        </div>
      );
  }
});

module.exports = ArtistHeader;
