import React from 'react';
import './reporttime.scss';
import FromTo from '../../components/fromTo/fromTo.js'

export default class ReportTime extends React.Component {
  render() {
    return (
      <div className="reporttime">
        <FromTo></FromTo>
        <div className="reporttime__map">
        </div>
        <div className="reporttime__accept-container">
          <button className="reporttime__accept-btn">
            Aceptare
          </button>
        </div>
      </div>
    );
  }
}
