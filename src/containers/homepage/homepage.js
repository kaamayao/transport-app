import React from 'react';
import './homepage.scss';
import { Link } from 'react-router-dom'

export default class HomePage extends React.Component {
  render() {
    return (
      <div className="homepage">
        <div className="homepage__container-wrap">
          <Link to='/report' className="homepage__option">
            Report time
          </Link>
          <Link to='/averagetime' className="homepage__option">
            View average time
          </Link>
        </div>
      </div>
    );
  }
}

