var Store = require('flux/utils').Store;

var FriendConstants = require('../constants/friend_constants');
var AppDispatcher = require('../dispatcher/dispatcher');
var ApiUtil = require('../util/api_util.js');

var FriendStore = new Store(AppDispatcher);

var _friends = {};


var resetFriends = function (friends) {
  _friends = {};
  friends.forEach(function (friend) {
    _friends[friend.id] = friend;
  });
};

FriendStore.all = function () {
  var friends = [];
  for (var id in _friends) {
    friends.push(_friends[id]);
  }
  return friends;
};

FriendStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case FriendConstants.FRIENDS_RECEIVED_FOR_USER:
      var result = resetFriends(payload.friends);
      FriendStore.__emitChange();
      break;
  }
};

window.FriendStore = FriendStore;


module.exports = FriendStore;
