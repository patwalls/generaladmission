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
  signedIn: function () {
    return typeof window.getCurrentUserId !== "undefined";
  },
  render: function() {
    if (this.signedIn()) {
      return (
        <div className='page'>
          <div className='nav-bar'>
            <div className='nav-bar-left'>
              <ul>
                <li><Link to={"/"}>General Admission</Link></li>
              </ul>
            </div>
            <div className='nav-bar-right'>
              <ul>
                <li><Link to={"/users/" + window.getCurrentUserId}>My Profile</Link></li>
                <li><Link to={"#"}>Sign Out</Link></li>
              </ul>
            </div>
          </div>
          {this.props.children}
        </div>
      );
    } else {
      return (
        <div className='page'>
          <div className='nav-bar'>
            <div className='nav-bar-left'>
              <ul>
                <li><Link to={"/"}>General Admission</Link></li>
              </ul>
            </div>
            <div className='nav-bar-right'>
              <ul>
                <li><a href="/session/new">Sign In</a></li>
                <li><a href="/users/new">Sign Up</a></li>
              </ul>
            </div>
          </div>
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
