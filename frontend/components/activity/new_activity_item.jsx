var React = require('react');
var ReactRouter = require('react-router');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var AttendStore = require('../../stores/attend');
var ApiUtil = require('../../util/api_util');

var NewActivityItem = React.createClass({
  mixins: [LinkedStateMixin],
  contextTypes: {
    router: React.PropTypes.func
  },
  getInitialState: function() {
    return {
      review: "",
      rating: "",
      user_id: window.getCurrentUserId,
      artist_id: this.props.artist.id,
      date_attended: "",
      venue_id: 1
    };
  },
  handleSubmit: function(event){
    event.preventDefault();
    var attend = Object.assign({}, this.state);
    ApiUtil.createAttend(attend);
    ApiUtil.fetchAttendsForArtist(this.props.artist.id);
  },
  render: function () {
    var attend = Object.assign({}, this.state);
    return (
      <div className='new-activity-item'>
        <h3>Ive Seen this Artist!</h3>
         <form onSubmit={this.handleSubmit}>
           <label>Rating?</label>
              <select id = "rating" valueLink={this.linkState('rating')}>
                <option value = "1">1</option>
                <option value = "2">2</option>
                <option value = "3">3</option>
                <option value = "4">4</option>
                <option value = "5">5</option>
              </select>
              <br/>
           <label>How was the concert?</label>
              <input type="text" valueLink={this.linkState('review')}/>
              <br/>
            <label>Date Attended?</label>
               <input type="date" valueLink={this.linkState('date_attended')}/>
               <br/>
            <input type="submit" value="Submit!"/>
         </form>
      </div>
      );
  }
});

window.NewActivityItem = NewActivityItem;
module.exports = NewActivityItem;