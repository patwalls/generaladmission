var ApiActions = require('../actions/api_actions');

var ApiUtil = {
  signOut: function() {
    $.ajax({
      url: '/session',
      type: 'DELETE',
      success: function(result) {
          console.log(result);
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
      console.log('success');
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
  fetchFriendsForUser: function(id) {
    var data = {user_id: id};
    $.get('api/friends', data, function(friends) {
      console.log('successful get request');
      ApiActions.receiveAllFriendsForUser(friends);
    });
  },
  addFriend: function(data){
    $.post('api/friends', { friend: data }, function(friend) {
      console.log('success!');
    });
  },
  searchResults: function(query) {
    var searchUrl = 'http://api.songkick.com/api/3.0/search/artists.json?query=' + query + '&apikey=n3h6YMv9J87oRnq9';
    $.getJSON(searchUrl, function(data) {
      ApiActions.receiveAllResults(data);
    });
  },
  resetResults: function() {
    ApiActions.resetAllArtists();
  },
  artistExistsInDb: function(songkickId) {

  }
};
window.ApiUtil = ApiUtil;
module.exports = ApiUtil;
