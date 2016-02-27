var React = require('react');
var ReactRouter = require('react-router');

var ArtistHeader = React.createClass({
  upperCaseName: function () {
    if (typeof this.props.artist.name !== 'undefined') {
      return this.props.artist.name.toUpperCase();
    }
  },
  render: function () {
    return (
        <div className='row'>
          <img src={this.props.artist.photo} className='img-responsive' alt='Responsive Image'>
            <div className='artist-photo-text'>{this.upperCaseName()}</div>
          </img>
        </div>
      );
  }
});

module.exports = ArtistHeader;
