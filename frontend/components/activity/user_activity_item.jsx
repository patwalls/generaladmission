var React = require('react');
var ReactRouter = require('react-router');

var UserActivityItem = React.createClass({

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
    return (
      <div classNAme='container-fluid'>
        <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 activity-item nopadding'>
          <div className='row'>
            <div className='top-user-activity'>
              <div className='user-attend-details'>
                <div className='artist'>{this.props.attend.artist_name}</div>
                <div className='date'>{this.props.attend.date_attended}</div>
                <div className='venue'>TBD Venue</div>
              </div>
              <div className='review-details'>
                <div className='review'>
                  <blockquote>
                    {this.props.attend.review}
                    <cite>{this.props.attend.name}, {this.props.attend.date_attended}</cite>
                  </blockquote>
                </div>
              </div>
              <div className='artist-photo'>
                <img src={this.props.attend.artist_photo} className="img-circle" alt="Cinque Terre" width="100" height="100"></img>
              </div>
            </div>
            <div className='bottom-user-activity'>
              <div className="progress">
                <div className="progress-bar progress-bar-success" style={leftmost}>
                  {leftvalue}
                </div>
                <div className="progress-bar progress-bar-warning" style={middlemost}>
                  {middlevalue}
                </div>
                <div className="progress-bar progress-bar-danger" style={rightmost}>
                  {rightvalue}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      );
  }
});

module.exports = UserActivityItem;
