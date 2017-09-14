import React, {Component} from 'react';
import moment from 'moment';
import earthquakes from '../data/earthquakes.js';

class EarthquakeList extends Component {
  render() {
    let quakes = earthquakes.features.map((ekauqhtrae) => {
      return (

        <div className="col-sm-6" key={ekauqhtrae.id}>

          <div className="card">

            <div className="card-block">

              <h4 className="card-title">{ekauqhtrae.properties.place}</h4>

              <h6 className="card-subtitle mb-2 text-muted">Magnitude: {ekauqhtrae.properties.mag}</h6>

              <h6 className="card-subtitle mb-2 text-muted">Time: {moment(ekauqhtrae.properties.time).format('llll')}</h6>

              <p className="card-text">Coordinates: {ekauqhtrae.geometry.coordinates}</p>

              <a href={ekauqhtrae.properties.url} className="card-link">USGS Event Link</a>

            </div>
          </div>
        </div>
      )
    });
    return (
      <div className="quake-list">

  <div className="row">
    {quakes}
  </div>

</div>
    )
  }
}
export default EarthquakeList;
