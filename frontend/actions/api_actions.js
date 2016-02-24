var AppDispatcher = require('../dispatcher/dispatcher');
var ArtistConstants = require('../constants/artist_constants');
var AttendsConstants = require('../constants/attends_constants');

ApiActions = {
  receiveAll: function(artists){
    AppDispatcher.dispatch({
      actionType: ArtistConstants.ARTISTS_RECEIVED,
      artists: artists
    });
  },
  receiveSingleArtist: function(artist){
    AppDispatcher.dispatch({
      actionType: ArtistConstants.SINGLE_ARTIST_RECEIVED,
      artist: artist
    });
  },
  receiveAllAttendsForArtist: function(attends){
    AppDispatcher.dispatch({
      actionType: AttendsConstants.ATTENDS_RECEIVED,
      attends: attends
    });
  }
};

module.exports = ApiActions;
