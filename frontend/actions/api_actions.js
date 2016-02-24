var AppDispatcher = require('../dispatcher/dispatcher');
var ArtistConstants = require('../constants/artist_constants');

ApiActions = {
  receiveAll: function(artists){
    AppDispatcher.dispatch({
      actionType: ArtistConstants.ARTISTS_RECEIVED,
      artists: artists
    });
  },
  receiveSingleArtist: function(artist){
    console.log('action initializes');
    AppDispatcher.dispatch({
      actionType: ArtistConstants.SINGLE_ARTIST_RECEIVED,
      artist: artist
    });
  }
};

module.exports = ApiActions;
