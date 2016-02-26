var React = require('react');
var ReactRouter = require('react-router');

var ArtistHeader = React.createClass({
  render: function () {
    return (
        <div className='jumbotron'>
          <div className='page-header'>
            <h2>Name: {this.props.artist.name}</h2>
          </div>
          <h3>Average Rating:</h3>
          <img src={this.props.artist.photo} className='img-responsive' alt='Responsive Image'></img>
        </div>
      );
  }
});

module.exports = ArtistHeader;
