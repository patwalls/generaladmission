var React = require('react');
var ReactRouter = require('react-router');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var Slider = require('../activity/slider');

var AttendStore = require('../../stores/attend');
var ApiUtil = require('../../util/api_util');
var ArtistStore = require('../../stores/artist');

var VenueSearch = require('./venue_search');

var NewActivityItem = React.createClass({
  userSeenArtist: function () {
    this.userSeen = false
    if (typeof this.props.artist.attends !== 'undefined') {
      this.props.artist.attends.forEach( function(attend) {
        if (attend.user_id === window.getCurrentUserId) {
          this.userSeen = true;
        }
      }.bind(this));
    }
  },
  onSliderChange: function (value) {
    this.setState({ rating: value });
  },
  openModal: function () {
    console.log('trying to open');
  },
  render: function () {
    this.userSeenArtist();
    var boxStyle;
    var glyph;
      if (this.userSeen) {
        boxStyle = 'checked-in';
        glyph = 'glyphicon glyphicon-ok check-in';
      } else {
        boxStyle = 'check-in-box';
        glyph = 'glyphicon glyphicon-plus check-in';
      }
    var attend = Object.assign({}, this.state);
    return (
      <div>
        <a href='#' className={boxStyle} onClick={this.openModal} data-toggle="modal" data-target=".bs-example-modal-md">
          <h4>
          <span className={glyph} aria-hidden="true"></span></h4>
        </a>
      </div>

      );
  }
});

window.NewActivityItem = NewActivityItem;
module.exports = NewActivityItem;
