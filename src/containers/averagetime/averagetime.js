import React from 'react';
import './averagetime.scss';
import FromTo from '../../components/fromTo/fromTo.js'

export default class AverageTime extends React.Component {

  render() {
    return (
      <div className="averagetime">
        <FromTo></FromTo>
        <div className="averagetime__map">
          <div className="averagetime__results">
            <div className="averagetime__title-container">
              <h1 className="averagetime__title">
                The average time is:
              </h1>
            </div>
            <div className="averagetime__results-container">
              <p className="averagetime__info">
                36 minutes
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
