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
var ArtistSearch = require('./components/artists/artist_search.jsx');
var ArtistSearchHeader = require('./components/artists/artist_search_header.jsx');
var Home = require('./components/home.jsx');
var AttendStore = require('./stores/attend.js');
var UserShow = require('./components/users/user_show.jsx');
var ApiUtil = require('./util/api_util');

var App = React.createClass({
  signOut: function () {
    ApiUtil.signOut();
  },
  signedIn: function () {
    return typeof window.getCurrentUserId !== "undefined";
  },
  render: function() {
    var searchInHeader;
      if (typeof this.props.params.artistId !== 'undefined') {
        searchInHeader = <li><ArtistSearchHeader className='header-search' /></li>
      }
    if (this.signedIn()) {
      return (
        <div className='container-fluid nopadding'>
          <div className='surrounding-nav-bar'>
            <nav className="navbar navbar-dark bg-inverse">``
              <ul className="nav navbar-nav navbar-left">
                <li>
                  <Link to={"/"}><img src='https://www.bjcc.org/img/ticket-icon.png' width='20px' height='20px'/> GENERAL ADMISSION</Link>
                </li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li><Link to={"/users/" + window.getCurrentUserId}>MY PROFILE</Link></li>
                <li><a href="/" onClick={this.signOut}>SIGN OUT</a></li>
              </ul>
            </nav>
          </div>
          {this.props.children}
        </div>
      );
    } else {
      return (
        <div className='container-fluid nopadding'>
          <div className='surrounding-nav-bar'>
            <nav className="navbar navbar-dark bg-inverse">``
              <ul className="nav navbar-nav navbar-left">
                <li>
                  <Link to={"/"}><img src='https://www.bjcc.org/img/ticket-icon.png' width='20px' height='20px'/> GENERAL ADMISSION</Link>
                </li>
                {searchInHeader}
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li><a href="/session/new">SIGN IN</a></li>
                <li><a href="/users/new">SIGN UP</a></li>
              </ul>
            </nav>
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
