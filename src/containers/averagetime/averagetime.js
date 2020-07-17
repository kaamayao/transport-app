import React from 'react';
import './averagetime.scss';
import FromTo from '../../components/fromTo/fromTo.js'

export default class AverageTime extends React.Component {

  state={
    locations : [],
    average: 0,
    from: 0,
    to: 0
   }

  constructor(props) {
    super(props);
    this.locationSelected = this.locationSelected.bind(this);
  }

  locationSelected(event, type){
    if(type==='from'){
      this.state.from = event.target.value;
    }
    if(type==='to'){
      this.state.to = event.target.value;
    }
    //Calculate average when you have valid location ids
    if(this.state.from!==0 && this.state.to!==0){
      //PlaceHolder calculation
      const state = this.state;
      state.average = event.target.value;
      this.setState(
        state
      )
    }
  }

  componentDidMount(){
    this.getLocationsDB();
  }

  async getLocationsDB(){
    const state = this.state;
    const response = await fetch('http://localhost:3030/locations');
    const locations = await response.json();
    state.locations = locations;
    this.setState(
      state
    );
  }

  render() {
    return (
      <div className="averagetime">
        <FromTo onLocationSelect={this.locationSelected}></FromTo>
        <div className="averagetime__map">
          <div className="averagetime__results">
            <div className="averagetime__title-container">
              <h1 className="averagetime__title">
                The average time is:

              </h1>
            </div>
            <div className="averagetime__results-container">
              <p className="averagetime__info">
               {this.state.average}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
