var React = require('react');
var ReactRouter = require('react-router');
var ReactSlider = require('react-slider');

var ArtistStore = require('../../stores/artist');
var AttendStore = require('../../stores/attend');
var ApiUtil = require('../../util/api_util');
var SearchStore = require('../../stores/search');

var ArtistHeader = require('./artist_header');
var ArtistAbout = require('./artist_about');

var NewActivityItem = require('../activity/new_activity_item');
var NewActivityItemModal = require('../activity/new_activity_item_modal');
var ArtistActivity = require('./artist_activity.jsx');
var ArtistUpcomingShows = require('./artist_upcoming_shows.jsx');



var ArtistShow = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  getInitialState: function () {
    var artistId = this.props.params.artistId;
    var artist = this._findArtistById(artistId) || {} ;
    return { artist: artist };
  },
  _findArtistById: function (id) {
    var res;
     ArtistStore.all().forEach(function (artist) {
      if (id == artist.id) {
        res = artist;
      }
    }.bind(this));
     return res;
  },
  componentWillMount: function () {
    document.body.classList.remove('bg-body');
    ApiUtil.resetResults();
  },
  componentDidMount: function () {
    this.artistListener = ArtistStore.addListener(this._artistChanged);
    var artistId = this.props.params.artistId;
    ApiUtil.fetchSingleArtist(artistId);
  },
  componentWillReceiveProps: function (newProps) {
    var artistId = newProps.params.artistId;
    var artist = this._findArtistById(artistId) || {} ;
    ApiUtil.fetchSingleArtist(artistId);
  },
  componentWillUnmount: function () {
    this.artistListener.remove();
  },
  _artistChanged: function () {
    var artistId = this.props.params.artistId;
    var artist = this._findArtistById(artistId);
    this.setState({ artist: artist });
  },
  render: function () {
    var photoDivStyle = {
      backgroundImage: 'url(http://images.sk-static.com/images/media/profile_images/artists/' + 5004833 + '/huge_avatar)'
    };
    return (
      <div>
      <div className='container-fluid nopadding '>
        <div className='row'>
            <ArtistHeader artist={this.state.artist}/>
        </div>
        <div className='row'>
          <div className='col-md-12 nopadding about-artist'>
            <ArtistAbout artist={this.state.artist}/>
          </div>
        </div>
      </div>
      <div className='container-fluid page-content'>
        <div className='row'>
          <div className='col-lg-8 col-md-8 col-sm-12 col-xs-12 nopadding testy'>
          <div className='inner'>
            <div className='row module'>
              <ArtistActivity artist={this.state.artist}/>
            </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12 nopadding testy'>
            <div className='inner'>
              <ArtistUpcomingShows artist={this.state.artist}/>
              <div className='module tbd'>Loyal Fans</div>
            </div>
          </div>
        </div>
      </div>
      // modal
      <NewActivityItemModal artist={this.state.artist} />
      </div>
      );
  }
});

module.exports = ArtistShow;
