var React = require('react');
var ArtistStore = require('../../stores/artist');
var ApiUtil = require('../../util/api_util');

var ArtistIndex = require('./artist_index');

var ArtistSearch = React.createClass({
  changedQuery: function () {
    var query = this.queryString();
    if (query.length === 0) {
      ApiUtil.fetchArtists("no artist has this name!!!!!!!! ahhahahah");
    } else {
      ApiUtil.fetchArtists(query);
    }
  },
  queryString: function () {
    return document.getElementById('search-query').value;
  },
  render: function () {
    return (
        <input type='text' id='search-query' onChange={this.changedQuery}></input>
    );
  }
});

window.ArtistSearch = ArtistSearch;

module.exports = ArtistSearch;
