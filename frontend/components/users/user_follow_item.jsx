var React = require('react');
var ReactRouter = require('react-router');
var History = require('react-router').History;


var FollowItem = React.createClass({
  mixins: [History],

  showDetail: function () {
    this.history.push("/users/" + this.props.follow.user_id);
    ApiUtil.fetchUser(this.props.follow.follower_id);
    ApiUtil.fetchFollowsForUser(this.props.follow.follower_id);
  },

  render: function () {
    return (
        <div className='follow-item' onClick={this.showDetail}>
          <div className='follow-photo'>
            <img src={this.props.follow.followed_photo} className="img-circle" alt="Cinque Terre" width="60" height="60"></img>
          </div>
          <div className='follow-details'>
            <span>{this.props.follow.followed_name}</span>
            <span>Total Shows: {this.props.follow.followed_shows_amt}</span>
            <span>Followers: {this.props.follow.followed_followers_amt}</span>
          </div>
        </div>
      );
  }
});

module.exports = FollowItem;
