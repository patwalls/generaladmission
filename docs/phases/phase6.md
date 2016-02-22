### Phase 6: User Profiles & Friends (1.5 days)

**Objective:** Users have profiles that show their activity and stats and users have friends.

- [ ] Add friend button/action on user profiles.
- build out API, Flux loop, and components for:
  - [ ] get recent activity
  - [ ] statistics about attendance
  - [ ] user details
- [ ] Style new elements


# Phase 6: User Profiles & Friends (1.5 days)

## Rails
### Models

### Controllers
* UsersController (create, new)

### Views

## Flux
### Views (React Components)

### Stores
* Friends Store

### Actions
* ApiActions.receiveAllFriends -> triggered by ApiUtil
* ApiActions.receiveSingleFriend
* ApiActions.deleteFriend
* FriendActions.fetchAllFriends -> triggers ApiUtil
* FriendActions.fetchSingleFriend
* FriendActions.createFriend
* FriendActions.editFriend
* FriendActions.destroyFriend

### ApiUtil
* ApiUtil.fetchAllFriends
* ApiUtil.fetchSingleFriend
* ApiUtil.createFriend
* ApiUtil.editFriend
* ApiUtil.destroyFriend

## Gems/Libraries
* react-quill (npm)
