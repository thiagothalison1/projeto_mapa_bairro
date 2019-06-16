import React from 'react'
import PlaceContainer from '../place/place.container'
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap
  } from "react-google-maps"
  
  const MapComponent = withScriptjs(withGoogleMap(props =>
    <GoogleMap
      defaultZoom={props.defaultZoom}
      defaultCenter={props.latlong}
      defaultOptions={{
        mapTypeControl: true,
        mapTypeControlOptions: {
            style: window.google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            position: window.google.maps.ControlPosition.TOP_RIGHT
        }
      }}
    >
      <PlaceContainer />
    </GoogleMap>
  ))
  
  export default MapComponent