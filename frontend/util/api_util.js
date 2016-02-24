var ApiActions = require('../actions/api_actions');

var ApiUtil = {
  fetchArtists: function(query){
    var searchParam = {name: query};
    $.get('api/artists', searchParam, function(artists) {
      ApiActions.receiveAll(artists);
    });
  },
  fetchSingleArtist: function(id){
    console.log('fetch initializes');
    $.get('api/artists/' + id, function(artist) {
      console.log(artist);
      ApiActions.receiveSingleArtist(artist);
    });
  },
  createArtist: function(data){
    $.post('api/artists', { artist: data }, function(artist) {
      ApiActions.receiveAll([artist]);
    });
  }
  // createReview: function(data) {
  //   $.post('api/reviews', { review: data }, function (bench) {
  //     ApiActions.receiveAll([bench]);
  //   });
  // }
};
window.ApiUtil = ApiUtil;
module.exports = ApiUtil;
