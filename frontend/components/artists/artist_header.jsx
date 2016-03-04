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
      backgroundImage: 'url(http://images.sk-static.com/images/media/profile_images/artists/' + this.props.artist.songkick_id + '/huge_avatar)'
    };
    var avatarPhoto = 'http://images.sk-static.com/images/media/profile_images/artists/' + this.props.artist.songkick_id + '/huge_avatar';
    return (
        <div className='artist-header'>
          <div className='overflow'>
            <div className='bg-photo-cool' style={photoDivStyle}></div>
          </div>
          <div className='col-lg-12 inner-header'>
            <div className='artist-photo-text'>{this.upperCaseName()}</div>
            <NewActivityItem artist={this.props.artist}/>
            <ArtistStats artist={this.props.artist} />
            <img className='artist-header-avatar'
              src={avatarPhoto}
              height='250px'
              width='250px'
            />
          </div>
        </div>
      );
  }
});

module.exports = ArtistHeader;
