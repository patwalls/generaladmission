var React = require('react');
var ReactRouter = require('react-router');
var FollowItem = require('./user_follow_item');
var FollowStore = require('../../stores/follow');

var UserFollows = React.createClass({
  getInitialState: function () {
    return { follows: FollowStore.all() };
  },

  componentDidMount: function () {
    this.followsListener = FollowStore.addListener(this._followsChanged);
  },

  componentWillUnmount: function () {
    this.followsListener.remove();
  },

  componentWillReceiveProps: function (newProps) {
    ApiUtil.fetchFollowsForUser(newProps.user.id);
    return { follows: FollowStore.all() };
  },

  _followsChanged: function () {
    this.setState ({ follows: FollowStore.all() });
  },

  render: function () {
    return (
        <div className='container-fluid follows'>
            <h3>Followers</h3>
            <ul>
            {
              this.state.follows.map( function (follow) {
                  return <FollowItem key={follow.id} follow={follow} />
              }, this)
            }
            </ul>
        </div>
      );
  }
});

module.exports = UserFollows;
