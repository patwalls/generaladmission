var Store = require('flux/utils').Store;

var FollowConstants = require('../constants/follow_constants');
var AppDispatcher = require('../dispatcher/dispatcher');
var ApiUtil = require('../util/api_util.js');

var FollowStore = new Store(AppDispatcher);

var _follows = {};


var resetFollows = function (follows) {
  _follows = {};
  follows.forEach(function (follow) {
    _follows[follow.id] = follow;
  });
};

FollowStore.all = function () {
  var follows = [];
  for (var id in _follows) {
    follows.push(_follows[id]);
  }
  return follows;
};

FollowStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case FollowConstants.FOLLOWS_RECEIVED_FOR_USER:
      var result = resetFollows(payload.follows);
      FollowStore.__emitChange();
      break;
  }
};

window.FollowStore = FollowStore;


module.exports = FollowStore;
