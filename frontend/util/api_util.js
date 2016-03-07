var ApiActions = require('../actions/api_actions');

var ApiUtil = {
  signOut: function() {
    $.ajax({
      url: '/session',
      type: 'DELETE',
      success: function(result) {
      }
    });
  },
  fetchArtistFromDB: function(songkickId, cb){
    var searchParam = {songkick_id: songkickId};
    $.get('api/artists', searchParam, function(artists) {
      ApiActions.receiveAll(artists);
      cb && cb(artists);
    });
  },
  resetArtists: function(){
    ApiActions.resetAllArtists();
  },
  fetchSingleArtist: function(id){
    $.get('api/artists/' + id, function(artist) {
      ApiActions.receiveSingleArtist(artist);
    });
  },
  createArtist: function(data, cb){
    $.post('api/artists', { artist: data }, function(artist) {
      cb && cb(artist.id);
    });
  },
  fetchAttendsForArtist: function(id) {
    var data = {artist_id: id};
    $.get('api/attends', data, function(attends) {
      ApiActions.receiveAllAttendsForArtist(attends);
    });
  },
  fetchAttendsForUser: function(id) {
    var data = {user_id: id};
    $.get('api/attends', data, function(attends) {
      ApiActions.receiveAllAttendsForUser(attends);
    });
  },
  createAttend: function(data){
    $.post('api/attends', { attend: data }, function(attend) {
      ApiActions.receiveSingleAttend([attend]);
    });
  },
  fetchUser: function(id) {
    $.get('api/users/' + id, function(user) {
      ApiActions.receiveUser(user);
    });
  },
  fetchFollowsForUser: function(id) {
    var data = {follower_id: id};
    $.get('api/followers', data, function(follows) {
      ApiActions.receiveAllFollowsForUser(follows);
    });
  },
  follow: function(data){
    $.post('api/followers', { follower: data }, function(follow) {
      // callback
    });
  },
  searchResults: function(query) {
    var searchUrl = 'https://api.songkick.com/api/3.0/search/artists.json?query=' + query + '&apikey=n3h6YMv9J87oRnq9';
    $.getJSON(searchUrl, function(data) {
      ApiActions.receiveAllResults(data);
    });
  },
  upcomingEventsForArtist: function(songKickId) {
    var url = 'https://api.songkick.com/api/3.0/artists/' + songKickId + '/calendar.json?apikey=n3h6YMv9J87oRnq9';
    $.getJSON(url, function(data) {
      ApiActions.receiveAllShows(data);
    });
  },
  venueSearchResults: function(query) {
    var searchUrl = 'https://api.songkick.com/api/3.0/search/venues.json?query=' + query + '&apikey=n3h6YMv9J87oRnq9';
    $.getJSON(searchUrl, function(data) {
      ApiActions.receiveAllVenueResults(data);
    });
  },
  resetResults: function() {
    ApiActions.resetAllResults();
  },
  resetVenueResults: function() {
    ApiActions.resetAllVenueResults();
  },
  artistExistsInDb: function(songkickId) {

  }
};
window.ApiUtil = ApiUtil;
module.exports = ApiUtil;
