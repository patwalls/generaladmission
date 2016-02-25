var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Link = require('react-router').Link
var ArtistStore = require('./stores/artist.js');
var ArtistIndex = require('./components/artists/artist_index.jsx');
var ArtistShow = require('./components/artists/artist_show.jsx');
var Home = require('./components/home.jsx');
var AttendStore = require('./stores/attend.js');
var UserShow = require('./components/users/user_show.jsx')

var App = React.createClass({
  render: function(){
    return (
      <div>
        <header>
          <h1>
            <Link to={"/"}>General Admission</Link>
          </h1>
          <h4>
            <Link to={"/users/" + window.getCurrentUserId}>My Profile</Link>
          </h4>
        </header>
        {this.props.children}
      </div>
    );
  }
});

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="artists/:artistId" component={ArtistShow}/>
    <Route path="users/:userId" component={UserShow}/>
  </Route>
);

$(document).on('DOMContentLoaded', function() {
  ReactDOM.render(<Router>{routes}</Router>, document.getElementById('content'));
});
