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

var App = React.createClass({
  render: function(){
    return (
      <div>
        <header>
          <h1>
            <Link to={IndexRoute}>General Admission</Link>
          </h1>
        </header>
        {this.props.children}
      </div>
    );
  }
});

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="artists/:artistId" component={ArtistShow}>
    </Route>
  </Route>
);

$(document).on('DOMContentLoaded', function() {
  ReactDOM.render(<Router>{routes}</Router>, document.getElementById('content'));
});
