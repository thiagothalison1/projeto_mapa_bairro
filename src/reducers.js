import { combineReducers } from 'redux'
import map from './map/map.reducer'
import place from './place/place.reducer'
import menu from './menu/menu.reducer'

export default combineReducers({
    map,
    place,
    menu
})