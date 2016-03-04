var React = require('react');
var ArtistStore = require('../../stores/artist');
var ApiUtil = require('../../util/api_util');
var History = require('react-router').History;

var ArtistIndexItem = React.createClass({
  mixins: [History],

  seedNewArtistWithData (id) {
    for (var i = 0; i < 8; i++) {
      var reviews = [
        'This is a test review. I will populate seed data soon. blah blah lorem ipsum just a nice block of text :)',
        'This is a test review. I will populate seed data soon. blah blah lorem ipsum just a nice block of text :)',
        'This is a test review. I will populate seed data soon. blah blah lorem ipsum just a nice block of text :)',
        'This is a test review. I will populate seed data soon. blah blah lorem ipsum just a nice block of text :)',
        'This is a test review. I will populate seed data soon. blah blah lorem ipsum just a nice block of text :)',
        'This is a test review. I will populate seed data soon. blah blah lorem ipsum just a nice block of text :)',
        'This is a test review. I will populate seed data soon. blah blah lorem ipsum just a nice block of text :)',
        'This is a test review. I will populate seed data soon. blah blah lorem ipsum just a nice block of text :)'
      ]
      ApiUtil.createAttend({
        review: reviews[i],
        rating: 99,
        user_id: 1,
        artist_id: id,
        date_attended: "2015-02-11",
        venue_id: 1,
        venue_songkick_id: 1,
        venue_name: "Fox Theater",
        city: "San Francisco, CA"
      });
    }

  },

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
              this.seedNewArtistWithData(newId);
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
