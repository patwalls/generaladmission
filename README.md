#General Admission

General Admission is a web application for rating and discovering great live music. It is built mainly with React + Flux, Ruby on Rails, PostgreSQL, SongKick API, and Bootstrap.

View it live at http://generaladmission.io

###Main Functionality:
* Search for any artist using SongKick's search API.
* View an aggregate artist rating, as well as individual reviews by users.
* View upcoming concerts for any artist using SongKick's upcoming events API.
* Submit your live music experience of an artist.
* View yours or others' concert history on a user page.
* Follow a user.

###Additional Features & Notables:
* Elegant Slider for rating artists using React-Slider plugin.
* SongKick Venue API for user input.
* Beautiful artist pages linking from SongKick's photos based on ID.
* React.js communicating with a RESTful JSON API
* Hand-rolled authentication via Rails
* Iterates on React state to imitate typing on landing page search input.
* Prevention of submission of forms and non-signed in actions using React.

Dynamic search between SongKick API and local database allows for the ability keep database light while allowing for user to search and view any artist.
```
showDetail: function() {
  var songkickId = this.props.artist.id;
  ApiUtil.fetchArtistFromDB(songkickId, function (artist) {
    if (artist.id) {
      this.history.push("/artists/" + artist.id);
      ## if the artist is already in the database, just go to that page
    } else {
      ApiUtil.createArtist({
        name: this.props.artist.displayName,
        songkick_id: this.props.artist.id
          }, function(newId) {
            this.seedNewArtistWithData(newId);
            this.history.push("/artists/" + newId);
          }.bind(this));
    }
  }.bind(this));
  ## if they dont exist in the database, create them and seed them with some reviews!
},
```
An image of what the search looks like on the frontend:

![landing-page](http://i.imgur.com/w5SPC7Z.jpg)

Search API functionality itself:

```
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

```

Search Input:

```
render: function () {
  if (this.state.placeholder === this.typing) {
    clearInterval(this.nIntervId);
  }
  return (
      <input type='text' name='q' className='form-control' placeholder={this.state.placeholder} id='search-query' onChange={this.changedQuery}></input>
  );
}
```
