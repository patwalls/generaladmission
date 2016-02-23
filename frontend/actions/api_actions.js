var AppDispatcher = require('../dispatcher/dispatcher');
var ArtistConstants = require('../constants/artist_constants');

ApiActions = {
  receiveAll: function(artists){
    AppDispatcher.dispatch({
      actionType: ArtistConstants.ARTISTS_RECEIVED,
      artists: artists
    });
  }
};

module.exports = ApiActions;
