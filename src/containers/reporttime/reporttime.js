import React from 'react';
import './reporttime.scss';
import FromTo from '../../components/fromTo/fromTo.js'

export default class ReportTime extends React.Component {
  render() {
    return (
      <div className="reporttime">
        <FromTo></FromTo>
        <div className="fromTo__time-wrap">
          <div className="fromTo__wrap">
            <label className="fromTo__label">Time</label>
            <input className="fromTo__timeTxt" name="time" type="text"
                    onChange={this.handleFormChange}/>
          </div>
        </div>
        <div className="reporttime__map">
        </div>
        <div className="reporttime__accept-container">
          <button className="reporttime__accept-btn">
            Aceptar
          </button>
        </div>
      </div>
    );
  }
}
