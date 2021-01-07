import cx from 'classnames';
import React, { Component } from 'react';
import InputSlider from 'react-input-slider';

export default class Time extends Component {
  changeHours = pos => {
    const m = this.props.moment;
    m.hours(pos.x);
    this.props.onChange(m);
  };

  changeMinutes = pos => {
    const m = this.props.moment;
    m.minutes(pos.x);
    this.props.onChange(m);
  };

  render() {
    const m = this.props.moment;

    return (
      <div className={cx('m-time', this.props.className)}>
        <div className="showtime">
          <span className="time">{m.format('HH')}</span>
          <span className="separater">:</span>
          <span className="time">{m.format('mm')}</span>
        </div>

        <div className="sliders">
          <div className="time-text">Часы:</div>
          <InputSlider
            className="u-slider-time"
            xmin={0}
            xmax={23}
            xstep={this.props.hourStep}
            x={m.hour()}
            onChange={this.changeHours}
            styles={{
              thumb: {
                width: 25,
                border: "3px solid #5e72e4",
                height: 25,
                opacity: 1.0
              }
            }}
          />
          <div className="time-text">Минуты:</div>
          <InputSlider
            className="u-slider-time"
            xmin={0}
            xmax={59}
            xstep={this.props.minStep}
            x={m.minute()}
            onChange={this.changeMinutes}
            styles={{
              thumb: {
                width: 25,
                border: "3px solid #5e72e4",
                height: 25,
                opacity: 1.0
              }
            }}
          />
        </div>
      </div>
    );
  }
}