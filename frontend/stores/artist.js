var Store = require('flux/utils').Store;

var ArtistConstants = require('../constants/artist_constants');
var AppDispatcher = require('../dispatcher/dispatcher');
var ApiUtil = require('../util/api_util.js');

var ArtistStore = new Store(AppDispatcher);

var _artists = [];

var resetArtists = function(artists){
  _artists = artists.slice(0);
};

ArtistStore.all = function () {
  return _artists.slice(0);
};

ArtistStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case ArtistConstants.ARTISTS_RECEIVED:
      var result = resetArtists(payload.artists);
      ArtistStore.__emitChange();
      break;
  }
};

window.ArtistStore = ArtistStore;


module.exports = ArtistStore;
