import { connect } from 'react-redux'
import PlaceComponent from './place.component'
import { makeTogglePlaceInfoView } from './place.actions'

const mapStateToProps = state => {
  return {
    places: Array.from(state.place.places)
  }
}

const mapDispatchToProps = dispatch => ({
  togglePlaceInfoView: (id) => {
    dispatch(makeTogglePlaceInfoView(id))
  }
})

const PlaceContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaceComponent)

export default PlaceContainer
