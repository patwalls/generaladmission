var React = require('react');
var ReactRouter = require('react-router');

var ArtistStats = React.createClass({
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
  gaScore: function () {
    if (this.state.attends.length > 0) {
      var totalScore = 0;
      this.state.attends.forEach( function(attend) {
        totalScore = totalScore + attend.rating;
      });
      return Math.floor(totalScore / this.state.attends.length);
    }
  },
  render: function () {
    return (
        <div className='artist-stats'>

          <div className='artist-activity-rating'>
            <div className='score'>
              SCORE
            </div>
            <div className='calc'>
              {this.gaScore()}
            </div>
          </div>
          <div className='artist-activity-rating'>
            <div className='score'>
              NO. REVIEWS
            </div>
            <div className='calc'>
              {this.state.attends.length}
            </div>
          </div>
          <NewActivityItem artist={this.props.artist}/>
        </div>
      );
  }
});

module.exports = ArtistStats;
