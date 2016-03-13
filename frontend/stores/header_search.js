var Store = require('flux/utils').Store;

var HeaderSearchConstants = require('../constants/header_search_constants');
var AppDispatcher = require('../dispatcher/dispatcher');
var ApiUtil = require('../util/api_util.js');

var HeaderSearchStore = new Store(AppDispatcher);

var _headerResults = {};

var resetSearch = function(results){
  _headerResults = {};
  if (typeof results !== 'undefined') {
    for (var i = 0; i < results.length; i++) {
        _headerResults[results[i].id] = results[i];
      }
  }
};

HeaderSearchStore.all = function () {
  var _returnSearch = [];
  Object.keys(_headerResults).map(function(key) {
    _returnSearch.push(_headerResults[key]);
  });
  return _returnSearch;
};

HeaderSearchStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case HeaderSearchConstants.HEADER_RESULTS_RECEIVED:
      var result = resetSearch(payload.results.resultsPage.results.artist);
      HeaderSearchStore.__emitChange();
      break;
    case HeaderSearchConstants.HEADER_RESET_RESULTS:
      _headerResults = {};
      this.__emitChange();
      break;
  }
};

window.HeaderSearchStore = HeaderSearchStore;


module.exports = HeaderSearchStore;
