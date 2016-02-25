var ApiActions = require('../actions/api_actions');

var ApiUtil = {
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
  createAttend: function(data){
    $.post('api/attends', { attend: data }, function(attend) {
      ApiActions.receiveSingleAttend([attend]);
    });
  },
};
window.ApiUtil = ApiUtil;
module.exports = ApiUtil;
