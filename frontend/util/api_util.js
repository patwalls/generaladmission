var ApiActions = require('../actions/api_actions');

var ApiUtil = {
  fetchArtists: function(){
    $.get('api/artists', function(artists){
      ApiActions.receiveAll(artists);
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
