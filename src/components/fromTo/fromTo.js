import React from 'react';
import './fromTo.scss';

export default class FromTo extends React.Component {
  state = {
    from: '',
    to: '',
    time: '',
  }

  constructor(props) {
    super(props);
    this.handleFormChange = this.handleFormChange.bind(this);
  }

  handleFormChange(event) {
    const state = this.state;
    state[event.target.name] = event.target.value;
    this.setState(
      state
    );
  }

  render() {
    return (
      <div className="fromTo">
        <div className="fromTo__location-container">
          <div className="fromTo__wrap">
            <label className="fromTo__label">From</label>
            <input className="fromTo__fromTxt" name="from" type="text"
                    onChange={this.handleFormChange}/>
            <label className="fromTo__label">to</label>
            <input className="fromTo__toTxt" name="to" type="text"
                    onChange={this.handleFormChange}/>
          </div>
        </div>
        <div className="fromTo__time-wrap">
          <div className="fromTo__wrap">
            <label className="fromTo__label">Time</label>
            <input className="fromTo__timeTxt" name="time" type="text"
                    onChange={this.handleFormChange}/>
          </div>
        </div>
      </div>
    );
  }
}
