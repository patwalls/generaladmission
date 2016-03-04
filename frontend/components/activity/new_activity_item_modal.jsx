var React = require('react');
var ReactRouter = require('react-router');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var Slider = require('../activity/slider');

var AttendStore = require('../../stores/attend');
var ApiUtil = require('../../util/api_util');
var ArtistStore = require('../../stores/artist');

var VenueSearch = require('./venue_search');

var NewActivityItemModal = React.createClass({
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
      venue_id: 1,
      venue_songkick_id: "",
      venue_name: "",
      city: ""
    };
  },
  handleSubmit: function(event){
    event.preventDefault();
    var attend = Object.assign({}, this.state);
    ApiUtil.createAttend(attend);
    ApiUtil.fetchAttendsForArtist(this.props.artist.id);
  },
  closeModal: function() {
    $(function () {
      $('#attend-modal').modal('toggle')
    });
  },
  componentWillReceiveProps: function (newProps) {
    this.setState({ artist_id: newProps.artist.id })
  },
  onSliderChange: function (value) {
    this.setState({ rating: value });
  },
  onVenueSelection: function (props) {
    this.setState({venue_songkick_id: props.id, venue_name: props.displayName, city: props.city.displayName})
  },
  render: function () {
    console.log(this.state);
    return (
      <div>
        <div className="modal fade bs-example-modal-md" id='attend-modal' tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel">

          <div className="modal-dialog modal-md">
            <div className="modal-content activity-input">
            <div className='new-activity-item'>
              <h3>How was {this.props.artist.name} live?</h3>
                <hr />
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                      <Slider onSliderChange={this.onSliderChange} />
                  </div>
                  <div className="form-group">
                      <textarea id = 'reviewInput' className='form-control' rows='5' placeholder='How was the concert?...' valueLink={this.linkState('review')}/>
                      <br/>
                  </div>
                  <div className="form-group">
                    <label for='venue'>Venue?</label>
                       <VenueSearch onVenueSelection={this.onVenueSelection} />
                       <br/>
                  </div>
                  <div className="form-group date">
                    <label for='dateInput'>Date Attended?</label>
                       <input type="date" id = 'dateInput' className='date' valueLink={this.linkState('date_attended')}/>
                       <br/>
                  </div>
                  <div className='form-buttons'>
                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                    <input className='btn btn-info' role='button' type="submit" value="Submit!" onClick={this.closeModal}/>
                  </div>
               </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      );
  }
});

window.NewActivityItemModal = NewActivityItemModal;
module.exports = NewActivityItemModal;
