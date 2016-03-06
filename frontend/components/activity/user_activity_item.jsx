var React = require('react');
var ReactRouter = require('react-router');
var History = require('react-router').History;

var ActivityItem = React.createClass({
  mixins: [History],
  showArtist: function () {
    this.history.push("/artists/" + this.props.attend.artist_id);
  },

  render: function () {
    var avatarPhoto = 'http://images.sk-static.com/images/media/profile_images/artists/' + this.props.attend.artist_songkick_id + '/huge_avatar';
    return (
      <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 main-activity-item'>
      <div className='user-activity-item'>
      <div className='main-left-pane' onClick={this.showArtist}>
        <div className='left-left-pane'>
          <div className="date-cont">
            <img className='activity-artist-photo'
              src={avatarPhoto}
              height='100px'
              width='100px'
            />
          </div>
        </div>
        <div className='left-pane'>
          <div className='show-details'>
            <div className='show-details-artist-name'>{this.props.attend.artist_name}</div>
            <div className='date-attend'>{this.props.attend.date_attended}</div>
            <div className='venue'>{this.props.attend.venue_name}</div>
            <div className='location'>{this.props.attend.venue_city}</div>
          </div>
        </div>
        </div>
        <div className='main-right-pane'>
        <div className='divider'>
        </div>
        <div className='middle-pane'>
          <div className='review'>
            {this.props.attend.review}
          </div>
          <div className='attend-details'>
            <div className='name'>-{this.props.attend.name}</div>
          </div>
          </div>
        </div>

        <div className='user-activity-right-pane'>
          <div className='follow-activity-rating'>
              <div className='score'>SCORE</div>
              <div className='calc'>{this.props.attend.rating}</div>
          </div>
        </div>
        </div>
          <div className='bottom-line'>
        </div>
      </div>
      );
  }
});

module.exports = ActivityItem;
