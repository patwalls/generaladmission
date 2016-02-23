var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var ArtistStore = require('./stores/artist.js');
var ArtistIndex = require('./components/artists/artist_index.jsx');

var App = React.createClass({
  render: function(){
    return (
      <div>
        <header><h1>General Admission</h1></header>
        {this.props.children}
          <ArtistIndex />
      </div>

    );
  }
});

var routes = (
  <Route path="/" component={App}>
  </Route>
);

$(document).on('DOMContentLoaded', function() {
  ReactDOM.render(<Router>{routes}</Router>, document.getElementById('content'));
});
