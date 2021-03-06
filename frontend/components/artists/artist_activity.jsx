var React = require('react');
var ReactRouter = require('react-router');

var AttendStore = require('../../stores/attend');
var ApiUtil = require('../../util/api_util');

var ActivityItem = require('../activity/activity_item');

var ArtistActivity = React.createClass({
  getInitialState: function () {
    return { attends: AttendStore.all() };
  },

  componentDidMount: function () {
    this.attendsListener = AttendStore.addListener(this._attendsChanged);
  },

  componentWillUnmount: function () {
    this.attendsListener.remove();
  },

  componentWillReceiveProps: function (newProps) {
    ApiUtil.fetchAttendsForArtist(newProps.artist.id);
    return { attends: AttendStore.all() };
  },

  _attendsChanged: function () {
    this.setState({ attends: AttendStore.all() })
  },
  render: function () {
    return (
          <div>
            <div className='activity-header'>
              <span> {this.props.artist.name}'s Activity </span>
              <hr />
            </div>
          <ul className='activity-item-ul'>
            {
              this.state.attends.map( function (attend) {
                  return <ActivityItem key={attend.id} attend={attend}/>
              }, this)
            }
          </ul>
          </div>
      );
  }
});

window.ArtistActivity = ArtistActivity;
module.exports = ArtistActivity;
