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
    return (

      <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12 activity-item nopadding'>
        <div className='inner'>
          <div className='row'>
              <div className='top'>
                <div className='top-left' onClick={this.showUser}>
                  <div className='photo'>
                    <img src={this.props.attend.photo} className="img-circle" alt="Cinque Terre" width="80" height="80"></img>
                  </div>
                  <div className='username'>
                    {this.props.attend.username}
                  </div>
                </div>
                <div className='review-details'>
                  <div className='review'>
                    <blockquote>
                      {this.props.attend.review}
                      <cite>{this.props.attend.name}, {this.props.attend.date_attended}</cite>
                    </blockquote>
                  </div>
                  <div className='details'>
                </div>
              </div>
              </div>
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
      );
  }
});

module.exports = ActivityItem;
