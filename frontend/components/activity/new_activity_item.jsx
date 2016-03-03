var React = require('react');
var ReactRouter = require('react-router');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var Slider = require('../activity/slider');

var AttendStore = require('../../stores/attend');
var ApiUtil = require('../../util/api_util');
var ArtistStore = require('../../stores/artist');

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
  closeModal: function() {
    $(function () {
      $('#attend-modal').modal('toggle')
    });
  },
  componentWillReceiveProps: function (newProps) {
    this.setState({ artist_id: newProps.artist.id })
    // var artistId = newProps.params.artistId;
    // var artist = this._findArtistById(artistId) || {} ;
    // ApiUtil.fetchSingleArtist(artistId);
  },
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
  render: function () {
    this.userSeenArtist();
    if (typeof this.refs.fieldEditor1 !== 'undefined') {
      console.log(this.refs.fieldEditor1);
    }
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
          <a href='#' className={boxStyle} data-toggle="modal" data-target=".bs-example-modal-md">
            <h4>
            <span className={glyph} aria-hidden="true"></span></h4>
          </a>

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
                <div className="form-group date">
                  <label for='dateInput'>Date Attended?</label>
                     <input type="date" id = 'dateInput' className='date' valueLink={this.linkState('date_attended')}/>
                     <br/>
                  </div>
                  <div className='form-buttons'>  
                    <input className='btn btn-info' role='button' type="submit" value="Submit!" onClick={this.closeModal}/>
                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
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

window.NewActivityItem = NewActivityItem;
module.exports = NewActivityItem;
