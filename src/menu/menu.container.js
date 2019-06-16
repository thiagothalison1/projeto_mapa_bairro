import { connect } from 'react-redux'
import MenuComponent from './menu.component'
import { makeToggleMenu } from './menu.actions'
import { makeFilterPlaces, makeTogglePlaceInfoView } from '../place/place.actions'

const mapStateToProps = state => {
    return {
        isOpen: state.menu.isOpen,
        places: Array.from(state.place.places)
    }
}

const mapDispatchToProps = dispatch => ({
    toggleMenu: () => dispatch(makeToggleMenu()),
    filterPlaces: (event) => dispatch(makeFilterPlaces(event.target.value)),
    makeTogglePlaceInfoView: (id) =>  dispatch(makeTogglePlaceInfoView(id))
})

const MenuContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MenuComponent)

export default MenuContainer
