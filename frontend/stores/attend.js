var Store = require('flux/utils').Store;

var AttendsConstants = require('../constants/attends_constants');
var AppDispatcher = require('../dispatcher/dispatcher');
var ApiUtil = require('../util/api_util.js');

var AttendStore = new Store(AppDispatcher);

var _attends = {};

var resetAttends = function (attends) {
  _attends = {};
  attends.forEach(function (attend) {
    _attends[attend.id] = attend;
  });
};

AttendStore.all = function () {
  var attends = [];
  for (var id in _attends) {
    attends.push(_attends[id]);
  }
  return attends;
};

AttendStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case AttendsConstants.ATTENDS_RECEIVED:
      var result = resetAttends(payload.attends);
      AttendStore.__emitChange();
      break;
  }
};

window.AttendStore = AttendStore;


module.exports = AttendStore;
