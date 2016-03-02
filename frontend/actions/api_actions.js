var AppDispatcher = require('../dispatcher/dispatcher');
var ArtistConstants = require('../constants/artist_constants');
var AttendsConstants = require('../constants/attends_constants');
var UserConstants = require('../constants/user_constants');
var FollowConstants = require('../constants/follow_constants');
var SearchConstants = require('../constants/search_constants');

ApiActions = {
  receiveAllResults: function(results){
    AppDispatcher.dispatch({
      actionType: SearchConstants.RESULTS_RECEIVED,
      results: results
    });
  },
  resetAllResults: function(){
    AppDispatcher.dispatch({
      actionType: SearchConstants.RESET_RESULTS,
    });
  },
  receiveAll: function(artists){
    AppDispatcher.dispatch({
      actionType: ArtistConstants.ARTISTS_RECEIVED,
      artists: artists
    });
  },
  resetAllArtists: function(){
    AppDispatcher.dispatch({
      actionType: ArtistConstants.RESET_ARTISTS,
    });
  },
  receiveSingleArtist: function(artist){
    AppDispatcher.dispatch({
      actionType: ArtistConstants.SINGLE_ARTIST_RECEIVED,
      artist: artist
    });
  },
  receiveAllAttendsForArtist: function(attends){
    AppDispatcher.dispatch({
      actionType: AttendsConstants.ATTENDS_RECEIVED,
      attends: attends
    });
  },
  receiveAllAttendsForUser: function(attends){
    AppDispatcher.dispatch({
      actionType: AttendsConstants.ATTENDS_RECEIVED_FOR_USER,
      attends: attends
    });
  },
  receiveSingleAttend: function(attend){
    AppDispatcher.dispatch({
      actionType: AttendsConstants.SINGLE_ATTEND_RECEIVED,
      attend: attend
    });
  },
  receiveUser: function(user){
    AppDispatcher.dispatch({
      actionType: UserConstants.USER_RECEIVED,
      user: user
    });
  },
  receiveAllFollowsForUser: function(follows){
    AppDispatcher.dispatch({
      actionType: FollowConstants.FOLLOWS_RECEIVED_FOR_USER,
      follows: follows
    });
  }
  // receiveSingleAddFollow: function(follow){
  //   AppDispatcher.dispatch({
  //     actionType: UserConstants.SINGLE_ADD_FRIEND_RECEIVED,
  //     follow: follow
  //   });
  // },
};

module.exports = ApiActions;
