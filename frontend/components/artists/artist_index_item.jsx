var React = require('react');
var ArtistStore = require('../../stores/artist');
var ApiUtil = require('../../util/api_util');
var History = require('react-router').History;

var ArtistIndexItem = React.createClass({
  mixins: [History],

  randomDate (start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  },

  seedNewArtistWithData (id) {
    for (var i = 0; i < 4; i++) {
      var randomRating = Math.floor(Math.random() * (99 - 75 + 1)) + 75;
      var randomReview = Math.floor(Math.random() * (7 - 0 + 1)) + 0;
      var randomUser = Math.floor(Math.random() * (12 - 2 + 1)) + 2;
      var randomDate = this.randomDate(new Date(2012, 0, 1), new Date())
      var randomVenue = Math.floor(Math.random() * (7 - 0 + 1)) + 0;
      var reviews = [
        "What an excellent show! The set was 2 hours long. They've still got it after all these years!",
        "They put on a really good show for the crowd. Played most of the classics! Only issue was that they went on a bit late :(, but it was all worth the wait.",
        "One of the best live shows I've ever been to! Amazing audience interaction and even some crowd surfing!",
        "I didn't want the show to end! I've seen them live so many times and this was certainly one of the best! They had a 5 song encore to boot!",
        "Good show, although my spot in the crowd wasn't the best. I wish I got there a little earlier!",
        "They are so good live! I had so much fun at this concert. They played for so long and had a great mix of their new and old stuff!",
        "What a great performance. Only issue was there were too many openers, and that got a bit tiresome, but when they finally got on the crowd went insane.",
        "I'm going to seem them live every time they come into town from now on! So much fun and a great crowd!"
      ]
      var venues = [
        ["Fox Theater", "Oakland, CA"],
        ["Red Rocks Ampitheatre", "Morrison, CO"],
        ["Coachella", "Indio, CA"],
        ["Madison Square Garder", "New York City, NY"],
        ["Greek Theatre", "Berkeley, CA"],
        ["Hollywood Bowl", "Los Angeles, CA"],
        ["The Tabernacle", "Atlanta, GA"],
        ["The Fillmore", "San Francisco, CA"]
      ]
      ApiUtil.createAttend({
        review: reviews[randomReview],
        rating: randomRating,
        user_id: randomUser,
        artist_id: id,
        date_attended: randomDate,
        venue_id: 1,
        venue_songkick_id: 1,
        venue_name: venues[randomVenue][0],
        venue_city: venues[randomVenue][1]
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
