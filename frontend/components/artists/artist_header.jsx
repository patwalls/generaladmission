var React = require('react');
var ReactRouter = require('react-router');
var ArtistStats = require('./artist_stats');

var ArtistHeader = React.createClass({
  upperCaseName: function () {
    if (typeof this.props.artist.name !== 'undefined') {
      return this.props.artist.name.toUpperCase();
    }
  },
  render: function () {
    var photoDivStyle = {
      backgroundImage: 'url(' + this.props.artist.photo + ')'
    };
    return (
        <div className='row'>
          <div>
            <div className='artist-header' style={photoDivStyle}>
              <div className='artist-photo-text'>{this.upperCaseName()}</div>
              <NewActivityItem artist={this.props.artist}/>
              <ArtistStats artist={this.props.artist} />
            </div>
          </div>
        </div>
      );
  }
});

module.exports = ArtistHeader;
