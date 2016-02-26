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
var UserShow = require('./components/users/user_show.jsx');

var App = React.createClass({
  signedIn: function () {
    return typeof window.getCurrentUserId !== "undefined";
  },
  render: function() {
    if (this.signedIn()) {
      return (
        <div className='container'>
          <nav className="navbar navbar-static-top" role="navigation">
            <div className="navbar-inner">
              <div className="navbar-collapse collapse">
                <ul className="nav navbar-nav navbar-left">
                  <li><Link to={"/"}>General Admission</Link></li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                  <li><Link to={"/users/" + window.getCurrentUserId}>My Profile</Link></li>
                  <li><Link to={"#"}>Sign Out</Link></li>
                </ul>
            </div>
          </nav>
          {this.props.children}
        </div>
      );
    } else {
      return (
        <div className='container'>
          <ul className='list-inline'>
            <li><Link to={"/"}>General Admission</Link></li>
            <li><a href="/session/new">Sign In</a></li>
            <li><a href="/users/new">Sign Up</a></li>
          </ul>
          {this.props.children}
        </div>
      );
    }
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
