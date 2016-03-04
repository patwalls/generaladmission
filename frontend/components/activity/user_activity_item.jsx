var React = require('react');
var ReactRouter = require('react-router');
var History = require('react-router').History;

var ActivityItem = React.createClass({
  mixins: [History],
  showUser: function () {
    this.history.push("/users/" + this.props.attend.user_id);
  },

  render: function () {
    console.log(this.props.attend);
    return (
      <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12 user-activity-item'>
      <div className='main-left-pane'>
        <div className='left-left-pane'>
          <div className="date-cont">
            <div className="calendar-date">
              <span className="binds"></span>
              <span className="month">Mar</span>
              <h1 className="day">24</h1>
            </div>
          </div>
        </div>
        <div className='left-pane'>
          <div className='show-details'>
            <div className='show-details-artist-name'>{this.props.attend.artist_name}</div>
            <div className='venue'>Fox Theater</div>
            <div className='location'>Oakland, CA</div>
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

        <div className='right-pane'>
          <div className='activity-rating'>
              <div className='score'>SCORE</div>
              <div className='calc'>{this.props.attend.rating}</div>
          </div>
        </div>
      </div>
      );
  }
});

module.exports = ActivityItem;
