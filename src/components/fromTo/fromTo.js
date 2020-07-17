import React from 'react';
import './fromTo.scss';

export default class FromTo extends React.Component {
  state = {
    from: '',
    to: '',
    time: '',
    locations: [],
  }

  fromLocations = []
  toLocations = []

  constructor(props) {
    super(props);
    this.handleFormChange = this.handleFormChange.bind(this);
    this.getLocationsDB = this.getLocationsDB.bind(this);
  }

  handleFormChange(event) {
    const state = this.state;
    state[event.target.name] = event.target.value;
    this.setState(
      state
    );
  }

  componentDidMount(){
    this.getLocationsDB();
  }

  async getLocationsDB(){
    const state = this.state;
    const response = await fetch('http://localhost:3030/locations');
    const locations = await response.json();
    state.locations = locations;
    for (const location of locations){
      this.fromLocations.push(<option onClick={(e)=>this.props.onLocationSelect(e,'from')} value={location.duration} key={location.id}>{location.from.name}</option>);
      this.toLocations.push(<option onClick={(e)=>this.props.onLocationSelect(e,'to')} value={location.duration} key={location.id}>{location.to.name}</option>);
    }
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
            <select className="fromTo__fromTxt" id="cars" name="cars">
              {this.fromLocations}
            </select>
            <label className="fromTo__label">To</label>
            <select className="fromTo__fromTxt" id="cars" name="cars">
              {this.toLocations}
            </select>
          </div>
        </div>
      </div>
    );
  }
}
