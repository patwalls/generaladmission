var React = require('react');
var ApiUtil = require('../../util/api_util');
var HeaderSearchStore = require('../../stores/header_search');

var HeaderArtistSearch = React.createClass({
  changedQuery: function () {
    var query = this.queryString();
    if (query.length === 0) {
      ApiUtil.resetHeaderResults();
    } else {
      ApiUtil.searchHeaderResults(query);
    }
  },
  queryString: function () {
    return document.getElementById('search-query-header').value;
  },
  render: function () {
    return (
        <input type='text' name='q' autoComplete="off" className='form-control' placeholder='Search artists...' id='search-query-header' onChange={this.changedQuery}></input>
    );
  }
});

window.HeaderArtistSearch = HeaderArtistSearch;

module.exports = HeaderArtistSearch;
