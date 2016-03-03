var React = require('react');
var ReactRouter = require('react-router');
var History = require('react-router').History;

var ActivityItem = React.createClass({
  mixins: [History],
  showUser: function () {
    this.history.push("/users/" + this.props.attend.user_id);
  },

  render: function () {
    var rating = this.props.attend.rating;
    var leftset = 70;
    var middleset = 20;
    var rightset = 10;
    var left;
    var middle;
    var right;
    var leftvalue;
    var middlevalue;
    var rightvalue;
    if (rating <= leftset) {
      left = rating;
      middle = 0;
      right = 0;
      leftvalue = rating;
    } else if  (rating <= leftset + middleset) {
      left = leftset;
      middle = rating - leftset;
      right = 0;
      middlevalue = rating;
    } else if  (rating <= leftset + middleset + rightset) {
      left = leftset;
      middle = middleset;
      right = rating - middleset - leftset;
      rightvalue = rating;
    }
    var leftmost = {
      width: left +'%'
    };
    var middlemost = {
      width: middle +'%'
    };
    var rightmost = {
      width: right +'%'
    };
    console.log(this.props.attend);
    return (
      <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12 activity-item'>

        <div className='left-pane'>
          <div className='activity-rating'>
              <div className='score'>SCORE</div>
              <div className='calc'>{this.props.attend.rating}</div>
          </div>
          <div className='user'>
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
            <div className='venue-location'>-Fox Theatre, Oakland CA</div>
          </div>
          </div>
        </div>
      );
  }
});

module.exports = ActivityItem;
