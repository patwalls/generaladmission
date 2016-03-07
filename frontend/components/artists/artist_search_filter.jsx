var React = require('react');
var ArtistStore = require('../../stores/artist');
var ApiUtil = require('../../util/api_util');
var SearchStore = require('../../stores/search');

var ArtistIndex = require('./artist_index');

var ArtistSearch = React.createClass({
  getInitialState: function () {
    this.place = 0;
    return {placeholder: '', place: 0};
  },
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
  componentDidMount: function () {
    this.changePlaceholder();
  },
  componentWillUnmount: function () {
    clearInterval(this.nIntervId);
  },
  changePlaceholder: function () {
    this.nIntervId = setInterval(this.change, 80);
  },
  change: function () {
    this.typing = 'Search any artist here...';
    this.place = this.place + 1;
    this.setState({ placeholder: this.typing.slice(0,this.place) })
  },
  render: function () {
    if (this.state.placeholder === this.typing) {
      clearInterval(this.nIntervId);
    }
    return (
        <input type='text' name='q' className='form-control' placeholder={this.state.placeholder} id='search-query' onChange={this.changedQuery}></input>
    );
  }
});

window.ArtistSearch = ArtistSearch;

module.exports = ArtistSearch;
