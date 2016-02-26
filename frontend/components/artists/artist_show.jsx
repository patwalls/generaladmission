var React = require('react');
var ReactRouter = require('react-router');

var ArtistStore = require('../../stores/artist');
var AttendStore = require('../../stores/attend')
var ApiUtil = require('../../util/api_util');

var ArtistHeader = require('./artist_header');
var ArtistAbout = require('./artist_about');

var NewActivityItem = require('../activity/new_activity_item');
var ArtistActivity = require('./artist_activity.jsx');


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
  // getAverageRating: function () {
  //   var totalRating = 0;
  //   var ratings = 0;
  //   this.state.attends.map( function (attend) {
  //     totalRating = totalRating + attend.rating;
  //     ratings = ratings + 1;
  //   }, this)
  //   if (ratings > 0) {
  //     this.averageRating =  totalRating / ratings;
  //   } else {
  //     this.averageRating =  'Not Yet Rated';
  //   }
  // },
  render: function () {
    // this.getAverageRating();
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-lg-9 col-md-9 col-sm-12 col-xs-12'>
            <ArtistHeader artist={this.state.artist}/>
            <ArtistAbout artist={this.state.artist}/>
            <NewActivityItem artist={this.state.artist}/>
            <ArtistActivity artist={this.state.artist}/>
          </div>
          <div class='clearfix visible-sm'></div>
          <div className='col-lg-3 col-md-3 col-sm-12 col-xs-12'>
            <div className='upcoming-shows'>Upcoming Shows</div>
            <div className='loyal-fans'>Loyal Fans</div>
            <div className='similar-artists'>Similar Artists</div>
            <div className='popular-venues'>Popular Venues</div>
          </div>
        </div>
      </div>
      );
  }
});

module.exports = ArtistShow;
