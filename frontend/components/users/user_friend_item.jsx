var React = require('react');
var ReactRouter = require('react-router');
var History = require('react-router').History;


var FriendItem = React.createClass({
  mixins: [History],

  showDetail: function () {
    this.history.push("/users/" + this.props.friend.friend_id);
    ApiUtil.fetchUser(this.props.friend.friend_id);
    ApiUtil.fetchFriendsForUser(this.props.friend.friend_id);
  },

  render: function () {
    return (
        <div className='friend-item' onClick={this.showDetail}>
          <div className='friend-photo'>
            <img src={this.props.friend.friend_photo} className="img-circle" alt="Cinque Terre" width="60" height="60"></img>
          </div>
          <div className='friend-details'>
            <span>{this.props.friend.friend_name}</span>
            <span>Total Shows: {this.props.friend.shows_amt}</span>
            <span>Friends: {this.props.friend.friends_amt}</span>
          </div>
        </div>
      );
  }
});

module.exports = FriendItem;
