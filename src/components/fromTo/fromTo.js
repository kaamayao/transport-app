import React from 'react';
import './fromTo.scss';

export default class FromTo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="fromTo">
        <div className="fromTo__location-container">
          <div className="fromTo__wrap">
            <label className="fromTo__label">From</label>
            <input className="fromTo__fromTxt" type="text" />
            <label className="fromTo__label">to</label>
            <input className="fromTo__toTxt" type="text" />
          </div>
        </div>
        <div className="fromTo__time-wrap">
          <div className="fromTo__wrap">
            <label className="fromTo__label">Time</label>
            <input className="fromTo__timeTxt" type="text" />
          </div>
        </div>
      </div>
    );
  }
}
