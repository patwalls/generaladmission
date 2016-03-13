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
    var userImage = {
      backgroundImage: 'url(' + this.props.follow.followed_photo + ')'
    };
    return (
        <div className='follow-item' onClick={this.showDetail}>
          <div className='follow-left-pane'>
            <div className='user-image' style={userImage} />
            <div className='user-name'>{this.props.follow.followed_name}</div>
          </div>
          <div className='border'>
          </div>
          <div className='follow-stats'>
            <div className='follow-activity-rating'>
              <div className='score'>
                SHOWS
              </div>
              <div className='calc'>
                {this.props.follow.followed_shows_amt}
              </div>
            </div>
            <div className='follow-activity-rating'>
              <div className='score'>
                FOLLOWERS
              </div>
              <div className='calc'>
                {this.props.follow.followed_followers_amt}
              </div>
            </div>
          </div>
        </div>
      );
  }
});
module.exports = FollowItem;
