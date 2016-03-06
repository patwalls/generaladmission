var React = require('react');
var ReactRouter = require('react-router');

var ArtistAbout = React.createClass({
  render: function () {
    return (
    <div className='about-dropdown'>
      <button className="btn btn-lg btn-success" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
        About This Artist
      </button>
      <div className="collapse" id="collapseExample">
        <div className="well">
          <ul className='list-group'>
            <li className='list-group-item'>{this.props.artist.genre}</li>
            <li className='list-group-item'>{this.props.artist.description}</li>
          </ul>
        </div>
      </div>
    </div>
      );
  }
});

module.exports = ArtistAbout;
