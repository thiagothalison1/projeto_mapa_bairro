import { connect } from 'react-redux'
import MapComponent from './map.component'

const mapStateToProps = state => {
  return {
    defaultZoom: state.map.defaultZoom,
    latlong: state.map.latlong
  }
}

const mapDispatchToProps = dispatch => ({ })

const MapContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MapComponent)

export default MapContainer
