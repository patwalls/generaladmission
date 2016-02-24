var React = require('react');
var ReactRouter = require('react-router');

var AttendStore = require('../../stores/attend');
var ApiUtil = require('../../util/api_util');

var ActivityItem = require('../activity/activity_item');

var ArtistActivity = React.createClass({

  getInitialState: function() {
    var id = this.props.params.artistId;
    ApiUtil.fetchAttendsForArtist(id);
    return { attends: AttendStore.all() };
  },

  _onChange: function() {
    this.setState({ attends: AttendStore.all()} );
  },

  componentDidMount: function (callback) {
    this.listenerToken = AttendStore.addListener(this._onChange);
  },

  componentWillUnmount: function () {
    this.listenerToken.remove();
  },
  render: function () {
    return (
        <ul>
          {
            this.state.attends.map( function (attend) {
                return <ActivityItem attend={attend} key={attend.id}/>
            }, this)
          }
        </ul>
      );
  }
});

window.ArtistActivity = ArtistActivity;
module.exports = ArtistActivity;
