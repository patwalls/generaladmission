var Store = require('flux/utils').Store;

var ArtistConstants = require('../constants/artist_constants');
var AppDispatcher = require('../dispatcher/dispatcher');
var ApiUtil = require('../util/api_util.js');

var ArtistStore = new Store(AppDispatcher);

var _artists = {};

var resetArtists = function(artists){
  for (var i = 0; i < artists.length; i++) {
      _artists[artists[i].id] = artists[i];
    }
};

ArtistStore.all = function () {
  var _returnArtist = [];
  Object.keys(_artists).map(function(key) {
    _returnArtist.push(_artists[key]);
  });
  return _returnArtist;
};

ArtistStore.updateArtist = function(artist) {
  console.log(artist);
  _artists[artist.id] = artist;
};

ArtistStore.find = function (id) {
  return _artists[id];
};

ArtistStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case ArtistConstants.ARTISTS_RECEIVED:
      var result = resetArtists(payload.artists);
      ArtistStore.__emitChange();
      break;
    case ArtistConstants.SINGLE_ARTIST_RECEIVED:
      console.log('case works');
      this.updateArtist(payload.artist);
      console.log(payload.artist);
      this.__emitChange();
      break;
    case ArtistConstants.RESET_ARTISTS:
      _artists = {};
      this.__emitChange();
      break;
  }
};

window.ArtistStore = ArtistStore;


module.exports = ArtistStore;
