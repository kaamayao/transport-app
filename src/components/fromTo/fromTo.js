import React from 'react';
import './fromTo.scss';

export default class FromTo extends React.Component {
  state = {
    from: '',
    to: '',
    Time: '',
  }

  constructor(props) {
    super(props);
    this.handleFormChange = this.handleFormChange.bind(this);
  }

  handleFormChange(event) {
    const form = this.state.form;
    form[event.target.name] = event.target.value;
    this.setState(
        {form: form},
    );
  }

  render() {
    return (
      <div className="fromTo">
        <div className="fromTo__location-container">
          <div className="fromTo__wrap">
            <label className="fromTo__label">From</label>
            <input className="fromTo__fromTxt" type="text"
                    onChange={this.handleFormChange}/>
            <label className="fromTo__label">to</label>
            <input className="fromTo__toTxt" type="text"
                    onChange={this.handleFormChange}/>
          </div>
        </div>
        <div className="fromTo__time-wrap">
          <div className="fromTo__wrap">
            <label className="fromTo__label">Time</label>
            <input className="fromTo__timeTxt" type="text"
                    onChange={this.handleFormChange}/>
          </div>
        </div>
      </div>
    );
  }
}
