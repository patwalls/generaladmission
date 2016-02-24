var React = require('react');
var ArtistStore = require('../../stores/artist');
var ApiUtil = require('../../util/api_util');
var History = require('react-router').History;

var ArtistIndexItem = React.createClass({
  mixins: [History],

  showDetail: function() {
    this.history.push("/artists/" + this.props.artist.id);
  },
  render: function () {
    return(
      <li className='artist-index-item' onClick={this.showDetail}>
        {this.props.artist.name}
      </li>
    );
  }
});

module.exports = ArtistIndexItem;
