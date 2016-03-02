var React = require('react');
var ReactRouter = require('react-router');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

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
  render: function () {
    var attend = Object.assign({}, this.state);
    return (
      <div>
          <a href='#' className="check-in-box" data-toggle="modal" data-target=".bs-example-modal-lg">
            <h4>
            <span className="glyphicon glyphicon-ok check-mark" aria-hidden="true"></span></h4>
          </a>

        <div className="modal fade bs-example-modal-lg" id='attend-modal' tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
          <div className="modal-dialog modal-lg">
            <div className="modal-content activity-input">
            <div className='new-activity-item'>
              <h3>How was {this.props.artist.name} live?</h3>
               <form onSubmit={this.handleSubmit}>
               <div className="form-group">
                 <label for='ratingInput'>Rating?</label>
                    <input type='text' id = 'ratingInput' className='form-control' valueLink={this.linkState('rating')}/>
                    <br/>
                </div>
                <div className="form-group">
                 <label for='reviewInput'>How was the concert?</label>
                    <textarea id = 'reviewInput' className='form-control' rows='3' valueLink={this.linkState('review')}/>
                    <br/>
                </div>
                <div className="form-group">
                  <label for='dateInput'>Date Attended?</label>
                     <input type="date" id = 'dateInput' className='date' valueLink={this.linkState('date_attended')}/>
                     <br/>
                  </div>
                  <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                  <input className='btn btn-info' role='button' type="submit" value="Submit!" onClick={this.closeModal}/>
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
