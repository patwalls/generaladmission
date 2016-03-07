var React = require('react');
var ReactRouter = require('react-router');
var ArtistStats = require('./artist_stats');
var ArtistAbout = require('./artist_about');
var ArtistStore = require('../../stores/artist');
var ApiUtil = require('../../util/api_util');


var ArtistHeader = React.createClass({
  upperCaseName: function () {
    if (typeof this.props.artist.name !== 'undefined') {
      return this.props.artist.name.toUpperCase();
    }
  },
  render: function () {
    if (Object.keys(this.props.artist).length !== 0) {
      var photoDivStyle = {
        backgroundImage: 'url(http://images.sk-static.com/images/media/profile_images/artists/' + this.props.artist.songkick_id + '/huge_avatar)'
      };
      var avatarPhoto = 'http://images.sk-static.com/images/media/profile_images/artists/' + this.props.artist.songkick_id + '/huge_avatar';
    }
    return (
        <div className='artist-header'>
          <div className='overflow'>
            <div className='bg-photo-cool' style={photoDivStyle}/>
          </div>
          <div className='inner-header'>
            <div className='artist-photo-text'>{this.upperCaseName()}</div>
            <ArtistStats artist={this.props.artist} />
            <img className='artist-header-avatar'
              src={avatarPhoto}
              height='250px'
              width='250px'
            />
          </div>
          <div className='about-dropdown'></div>
        </div>
      );
  }
});

module.exports = ArtistHeader;
