import React from 'react';
import './app.css';
import MapContainer from './map/map.container'
import MenuContainer from './menu/menu.container'

const mapHeight = window.innerHeight

function App() {
  return (
    <div>
      <div>
        <MenuContainer />
      </div>
      <div>
        <MapContainer 
          googleMapURL= "https://maps.googleapis.com/maps/api/js?key=AIzaSyAwWOmZp-zZtV9ZwN9rD24e28tANyuJthM&v=3.exp&libraries=geometry,drawing,places"
          loadingElement= {<div style={{ height: `100%` }} />}
          containerElement= {<div style={{ height: `${mapHeight}px` }} />}
          mapElement= {<div style={{ height: `100%` }} />}
        />
      </div>
    </div>
  )
}

export default App;
