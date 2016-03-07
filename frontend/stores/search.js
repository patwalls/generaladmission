var Store = require('flux/utils').Store;

var SearchConstants = require('../constants/search_constants');
var AppDispatcher = require('../dispatcher/dispatcher');
var ApiUtil = require('../util/api_util.js');

var SearchStore = new Store(AppDispatcher);

var _results = {};

var resetSearch = function(results){
  _results = {};
  if (typeof results !== 'undefined') {
    for (var i = 0; i < results.length; i++) {
        _results[results[i].id] = results[i];
      }
  }
};

SearchStore.all = function () {
  var _returnSearch = [];
  Object.keys(_results).map(function(key) {
    _returnSearch.push(_results[key]);
  });
  return _returnSearch;
};

SearchStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case SearchConstants.RESULTS_RECEIVED:
      var result = resetSearch(payload.results.resultsPage.results.artist);
      SearchStore.__emitChange();
      break;
    case SearchConstants.RESET_RESULTS:
      _results = {};
      this.__emitChange();
      break;
  }
};

window.SearchStore = SearchStore;


module.exports = SearchStore;
