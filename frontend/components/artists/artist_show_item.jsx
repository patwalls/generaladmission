var React = require('react');
var ReactRouter = require('react-router');

var ArtistShowItem = React.createClass({
  getMonth: function (date) {
    var dateParsed = date.split('-');
    var months = [ "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December" ];
    return months[parseInt(dateParsed[1],10)]
  },
  getDay: function (date) {
    var dateParsed = date.split('-');
    return parseInt(dateParsed[2],10)
  },
  render: function () {
    return (
      <div className="show-item">
        <div className="date-cont">
          <div className="calendar-date">
    	      <span className="binds"></span>
    	      <span className="month">{this.getMonth(this.props.show.start.date)}</span>
    	      <h1 className="day">{this.getDay(this.props.show.start.date)}</h1>
          </div>
        </div>
        <div className='show-details'>
          <div className='display-name'>{this.props.show.displayName}</div>
          <div className='venue'>{this.props.show.venue.displayName}</div>
          <div className='location'>{this.props.show.location.city}</div>
        </div>
      </div>
    );
  }
});

module.exports = ArtistShowItem;
