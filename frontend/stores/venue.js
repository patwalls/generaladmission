var Store = require('flux/utils').Store;

var VenueConstants = require('../constants/venue_constants');
var AppDispatcher = require('../dispatcher/dispatcher');
var ApiUtil = require('../util/api_util.js');

var VenueStore = new Store(AppDispatcher);

var _results = {};

var resetSearch = function(results){
  _results = {};
  for (var i = 0; i < results.length; i++) {
      _results[i] = results[i];
    }
};

VenueStore.all = function () {
  var _returnSearch = [];
  Object.keys(_results).map(function(key) {
    _returnSearch.push(_results[key]);
  });
  return _returnSearch;
};

VenueStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case VenueConstants.VENUE_RESULTS_RECEIVED:
      var result = resetSearch(payload.results.resultsPage.results.venue);
      VenueStore.__emitChange();
      break;
    case VenueConstants.VENUE_RESET_RESULTS:
      _results = {};
      this.__emitChange();
      break;
  }
};

window.SearchStore = VenueStore;


module.exports = VenueStore;
