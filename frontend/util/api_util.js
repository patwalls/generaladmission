var ApiActions = require('../actions/api_actions');

var ApiUtil = {
  fetchArtists: function(){
    $.get('api/artists', function(artists){
      ApiActions.receiveAll(artists);
    });
  }
  // createBench: function(data){
  //   $.post('api/benches', { bench: data }, function(bench) {
  //     ApiActions.receiveAll([bench]);
  //   });
  // },
  // createReview: function(data) {
  //   $.post('api/reviews', { review: data }, function (bench) {
  //     ApiActions.receiveAll([bench]);
  //   });
  // }
};
window.ApiUtil = ApiUtil;
module.exports = ApiUtil;
