var React = require('react');
var ReactRouter = require('react-router');
var History = require('react-router').History;

var ActivityItem = React.createClass({
  mixins: [History],
  showUser: function () {
    this.history.push("/users/" + this.props.attend.user_id);
  },

  render: function () {
    return (
      <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12 activity-item'>

        <div className='left-pane'>
          <div className='activity-rating'>
              <div className='score'>SCORE</div>
              <div className='calc'>{this.props.attend.rating}</div>
          </div>
          <div className='user' onClick={this.showUser}>
            <div className='user-image'>
              <img src={this.props.attend.photo} className="img-circle" alt="Cinque Terre" width="80" height="80"></img>
            </div>
            <div className='username'>
              {this.props.attend.username}
            </div>
          </div>
        </div>
        <div className='border'></div>
        <div className='right-pane'>
          <div className='review'>
            {this.props.attend.review}
          </div>
          <div className='attend-details'>
            <div className='name'>-{this.props.attend.name}</div>
            <div className='date'>-{this.props.attend.date_attended}</div>
            <div className='venue-name'>-{this.props.attend.venue_name}</div>
            <div className='venue-city'>-{this.props.attend.venue_city}</div>
          </div>
          </div>
        </div>
      );
  }
});

module.exports = ActivityItem;
