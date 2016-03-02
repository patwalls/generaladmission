var React = require('react');
var ArtistStore = require('../../stores/artist');
var ApiUtil = require('../../util/api_util');
var History = require('react-router').History;

var ArtistIndexItem = React.createClass({
  mixins: [History],

  showDetail: function() {
    var songkickId = this.props.artist.id;
    ApiUtil.fetchArtistFromDB(songkickId, function (artist) {
      if (artist.id) {
        this.history.push("/artists/" + artist.id);
      } else {
        ApiUtil.createArtist({
          name: this.props.artist.displayName,
          photo: "N/A",
          genre: "N/A",
          description: "Test Description",
          songkick_id: this.props.artist.id
            }, function(newId) {
              this.history.push("/artists/" + newId);
            }.bind(this));
      }
    }.bind(this));
  },
  render: function () {
    return(
      <li>
        <a onClick={this.showDetail}>{this.props.artist.displayName}</a>
      </li>
    );
  }
});

module.exports = ArtistIndexItem;
