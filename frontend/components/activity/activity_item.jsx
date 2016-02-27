var React = require('react');
var ReactRouter = require('react-router');

var ActivityItem = React.createClass({
  render: function () {
    return (
        <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12 activity-item'>
            <div className='row'>
              <div className='col-lg-1 col-md-1 col-sm-1 col-xs-1'/>
              <div className='col-lg-3 col-md-3 col-sm-3 col-xs-3'>
                <div className='row'>
                  <img src='https://cdn2.iconfinder.com/data/icons/windows-8-metro-style/128/ticket.png' width='40'></img>
                </div>
                <div className='row'>
                  <img src="http://i.imgur.com/wEml88p.png" className="img-circle" alt="Cinque Terre" width="40" height="40"></img>
                </div>
              </div>
              <div className='col-lg-7 col-md-7 col-sm-7 col-xs-7'>
                <div className='row'>
                  {this.props.attend.review}
                </div>
                <div className='row'>
                  {this.props.attend.username} | Date: {this.props.attend.date_attended}
                </div>
              </div>
              <div className='col-lg-1 col-md-1 col-sm-1 col-xs-1'/>
            </div>
        </div>
      );
  }
});

module.exports = ActivityItem;
