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
  fetchArtists: function(query){
    var searchParam = {name: query};
    $.get('api/artists', searchParam, function(artists) {
      ApiActions.receiveAll(artists);
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
  createArtist: function(data){
    $.post('api/artists', { artist: data }, function(artist) {
      ApiActions.receiveAll([artist]);
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
      ApiActions.receiveAllFriendsForUser(friends);
    });
  },
  addFriend: function(data){
    $.post('api/friends', { friend: data }, function(friend) {
      console.log('success!');
    });
  }
};
window.ApiUtil = ApiUtil;
module.exports = ApiUtil;
