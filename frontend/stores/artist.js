var Store = require('flux/utils').Store;

var ArtistConstants = require('../constants/artist_constants');
var AppDispatcher = require('../dispatcher/dispatcher');
var ApiUtil = require('../util/api_util.js');

var ArtistStore = new Store(AppDispatcher);

var _artists = {};

var resetArtists = function(artists){
  _artists = {};
  for (var i = 0; i < artists.length; i++) {
      _artists[artists[i].id] = artists[i];
    }
};

var resetArtist = function(artist){
  _artists = artist;
};

ArtistStore.artist = function () {
  return _artists;
};

ArtistStore.all = function () {
  var _returnArtist = [];
  Object.keys(_artists).map(function(key) {
    _returnArtist.push(_artists[key]);
  });
  return _returnArtist;
};

ArtistStore.updateArtist = function(artist) {
  _artists[artist.id] = artist;
};

ArtistStore.find = function (id) {
  return _artists[id];
};

ArtistStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case ArtistConstants.ARTISTS_RECEIVED:
      console.log(payload.artists);
      var result = resetArtist(payload.artists);
      ArtistStore.__emitChange();
      break;
    case ArtistConstants.SINGLE_ARTIST_RECEIVED:
      this.updateArtist(payload.artist);
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
