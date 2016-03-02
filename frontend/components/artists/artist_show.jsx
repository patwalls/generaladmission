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
  // upperCaseName: function () {
  //
  // },
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
    var photoDivStyle = {
      backgroundImage: 'url(' + this.state.artist.photo + ')'
    };
    return (
      <div>
      <div className='container-fluid nopadding'>
        <div className='row'>
          <div className='col-md-12 nopadding header-photo' style={photoDivStyle}>
            <ArtistHeader artist={this.state.artist}/>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12 nopadding about-artist'>
            <ArtistAbout artist={this.state.artist}/>
          </div>
        </div>
      </div>
      <div className='container-fluid nopadding'>
        <div className='row'>
          <div className='col-lg-8 col-md-8 col-sm-12 col-xs-12 nopadding testy'>
            <div className='inner'>
              <ArtistActivity artist={this.state.artist}/>
            </div>
          </div>
          <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12 nopadding testy'>
            <div className='inner'>
              <div className='module tbd'>Upcoming Shows</div>
              <div className='module tbd'>Loyal Fans</div>
              <div className='module tbd'>Similar Artists</div>
              <div className='module tbd'>Popular Venues</div>
            </div>
          </div>
        </div>
      </div>
      </div>
      );
  }
});

module.exports = ArtistShow;
