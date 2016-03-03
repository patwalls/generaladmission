var Store = require('flux/utils').Store;

var ShowConstants = require('../constants/show_constants');
var AppDispatcher = require('../dispatcher/dispatcher');
var ApiUtil = require('../util/api_util.js');

var ShowStore = new Store(AppDispatcher);

var _shows = {};

var resetShows = function(shows){
  _shows = {};
  for (var i = 0; i < shows.length; i++) {
      _shows[shows[i].id] = shows[i];
    }
};

ShowStore.all = function () {
  var _returnShows = [];
  Object.keys(_shows).map(function(key) {
    _returnShows.push(_shows[key]);
  });
  return _returnShows;
};

ShowStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case ShowConstants.SHOWS_RECEIVED:
      var result = resetShows(payload.shows.resultsPage.results.event);
      ShowStore.__emitChange();
      break;
  }
};

window.ShowStore = ShowStore;


module.exports = ShowStore;
