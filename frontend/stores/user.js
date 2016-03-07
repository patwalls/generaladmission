var Store = require('flux/utils').Store;

var UserConstants = require('../constants/user_constants');
var AppDispatcher = require('../dispatcher/dispatcher');
var ApiUtil = require('../util/api_util.js');

var UserStore = new Store(AppDispatcher);

var _users = {};

var resetUsers = function (users) {
  _users = {};
  if (typeof users !== 'undefined') {
    users.forEach(function (user) {
      _users[user.id] = user;
    });
  }
};

UserStore.all = function () {
  var users = [];
  for (var id in _users) {
    users.push(_users[id]);
  }
  return users;
};

UserStore.updateUser = function(user) {
  _users[user.id] = user;
};

UserStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case UserConstants.USER_RECEIVED:
      UserStore.updateUser(payload.user);
      UserStore.__emitChange();
      break;
  }
};

window.UserStore = UserStore;


module.exports = UserStore;
