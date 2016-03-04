var React = require('react');
var ApiUtil = require('../../util/api_util');
var VenueStore = require('../../stores/venue');
var VenueItem = require('./venue_item');

var VenueSearch = React.createClass({
  getInitialState: function() {
    return {venues: VenueStore.all().slice(0,5) };
  },

  _onChange: function() {
    this.setState({venues: VenueStore.all().slice(0,5)});
  },

  componentDidMount: function (callback) {
    this.listenerToken = VenueStore.addListener(this._onChange);
  },

  componentWillUnmount: function () {
    this.listenerToken.remove();
  },
  changedQuery: function (query) {
    var query = this.queryString();
    if (query.length === 0) {
      ApiUtil.resetVenueResults();
    } else {
      ApiUtil.venueSearchResults(query);
    }
  },
  queryString: function () {
    return document.getElementById('venue-search-query').value;
  },
  onVenueSelect: function (venueProps) {
    ApiUtil.resetVenueResults();
    document.getElementById('venue-search-query').value = venueProps.displayName;
    this.props.onVenueSelection(venueProps);
  },
  render: function () {
    console.log(this.state.venues);
    return (
      <div>
        <input type='text' name='q' className='form-control' placeholder='Search for venues...' id='venue-search-query' onChange={this.changedQuery}></input>
        <ul>
          {
            this.state.venues.map( function (venue) {
                return <VenueItem venue={venue} onVenueSelect={this.onVenueSelect} />
            }, this)
          }
        </ul>
      </div>
    );
  }
});

window.VenueSearch = VenueSearch;

module.exports = VenueSearch;
