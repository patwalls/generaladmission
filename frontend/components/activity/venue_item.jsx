var React = require('react');
var ApiUtil = require('../../util/api_util');
var VenueStore = require('../../stores/venue');

var VenueItem = React.createClass({
  chooseVenue: function () {
    this.props.onVenueSelect(this.props.venue);
  },
  render: function () {
    return (
      <li onClick={this.chooseVenue}>
        {this.props.venue.displayName}, {this.props.venue.city.displayName}
      </li>
    );
  }
});

window.VenueItem = VenueItem;

module.exports = VenueItem;
