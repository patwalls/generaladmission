var React = require('react');
var ArtistStore = require('../../stores/artist');
var ApiUtil = require('../../util/api_util');
var SearchStore = require('../../stores/search');

var ArtistIndex = require('./artist_index');

var ArtistSearch = React.createClass({
  changedQuery: function () {
    var query = this.queryString();
    if (query.length === 0) {
      ApiUtil.resetResults();
    } else {
      ApiUtil.searchResults(query);
    }
  },
  queryString: function () {
    return document.getElementById('search-query').value;
  },
  render: function () {
    return (
        <input type='text' name='q' className='form-control' placeholder='Search...' id='search-query' onChange={this.changedQuery}></input>
    );
  }
});

window.ArtistSearch = ArtistSearch;

module.exports = ArtistSearch;
