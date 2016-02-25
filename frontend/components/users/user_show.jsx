var React = require('react');
var ReactRouter = require('react-router');

var ArtistStore = require('../../stores/artist');
var AttendStore = require('../../stores/attend');
var ApiUtil = require('../../util/api_util');


var UserShow = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },

  render: function () {
    return(
      <div>hello</div>
    );
  }
});

module.exports = UserShow;
