var React = require('react');
var ReactRouter = require('react-router');
var ReactSlider = require('react-slider');


var Slider = React.createClass({
  displayName: 'Demo',
  getInitialState: function () {
    return {value: 0};
  },
  onChange: function (value) {
      this.setState({value: value});
      this.props.onSliderChange(value);
  },
  render: function () {
    return (
      <div className='rating value'>
        <div className='your-score'>YOUR SCORE</div>
        <div className='calc'>{this.state.value}</div>
        <ReactSlider
          className='horizontal-slider'
          onChange={this.onChange}
          value={this.state.value}
          withBars={true}
          defaultValue={0}
        />
      </div>
    );
  }
});


module.exports = Slider;
