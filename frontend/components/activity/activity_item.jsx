var React = require('react');
var ReactRouter = require('react-router');

var ActivityItem = React.createClass({
  render: function () {
    return (
      <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12 activity-item nopadding'>
        <div className='row'>
          <div className='top'>
            <div className='top-left'>
              <div className='photo'>
                <img src="http://i.imgur.com/wEml88p.png" className="img-circle" alt="Cinque Terre" width="80" height="80"></img>
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
          <div className='bottom'>
            <div>
              <label for="fader"></label>
              <input type="range" min="0" max="5" value={this.props.attend.rating} id="fader" />
            </div>
          </div>
        </div>
      </div>
      );
  }
});

module.exports = ActivityItem;
