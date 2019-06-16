import assign from 'assign-deep'
import { ACTION_TYPES } from './place.actions'

const MARKER_NO_ANIMATION = 0
const MARKER_ANIMATION_BOUNCE = 1
const MARKER_ANIMATION_DROP = 2

const defaultState = {
    places: [
        {
            name: 'Praia Central',
            address: 'Praia Central, Avenida Atlântica, Balneário Camboriú - SC, 88330-272, Brasil',
            show: true,
            markerAnimation: MARKER_ANIMATION_DROP,
            position: {
                "lat" : -26.9889496,
                "lng" : -48.6300796
             },
            infoView: {
                show: false,
                pictures: {
                    error: null,
                    urls: []
                }
            }
        },
        {
            name: 'Cristo Luz',
            address: 'R. Indonésia, 800 - Nações, Balneário Camboriú - SC, 88330-000, Brasil',
            show: true,
            markerAnimation: MARKER_ANIMATION_DROP,
            position: {
                "lat" : -26.9855086,
                "lng" : -48.6452987
             },
            infoView: {
                show: false,
                pictures: {
                    error: null,
                    urls: []
                }
            }
        },
        {
            name: 'Parque Unipraias',
            address: 'Av. Atlântica, 6006 - Barra, Balneário Camboriú - SC, 88330-908, Brasil',
            show: true,
            markerAnimation: MARKER_ANIMATION_DROP,
            position: {
                "lat" : -27.005225,
                "lng" : -48.603402
             },
            infoView: {
                show: false,
                pictures: {
                    error: null,
                    urls: []
                }
            }
        },
        {
            name: 'Praia das Laranjeiras',
            address: 'Praia Laranjeiras, Santa Catarina, Brasil',
            show: true,
            markerAnimation: MARKER_ANIMATION_DROP,
            position: {
                "lat" : -26.997186,
                "lng" : -48.590844
             },
            infoView: {
                show: false,
                pictures: {
                    error: null,
                    urls: []
                }
            }
        },
        {
            name: 'Morro do Careca',
            address: 'Cume do Morro do Careca - Praia dos Amores, SC, 88331-000, Brasil',
            show: true,
            markerAnimation: MARKER_ANIMATION_DROP,
            position: {
                "lat" : -26.962392,
                "lng" : -48.627701
            },
            infoView: {
                show: false,
                pictures: {
                    error: null,
                    urls: []
                }
            }
        },
        {
            name: 'Balneário Camboriú (Centro)',
            address: 'Centro, Balneário Camboriú - SC, Brasil',
            show: true,
            markerAnimation: MARKER_ANIMATION_DROP,
            position: {
                "lat" : -27.001186,
                "lng" : -48.629805
             },
            infoView: {
                show: false,
                pictures: {
                    error: null,
                    urls: []
                }
            }
        }
    ]
}

const place = (state = defaultState, action) => {
    let newState = assign({}, state)

    switch (action.type) {
        case ACTION_TYPES.TOGGLE_PLACE_INFO_VIEW:
            newState.places[action.payload.id].infoView.show = !state.places[action.payload.id].infoView.show
            return newState
        case ACTION_TYPES.UPDATE_PLACE_PICTURE:
            newState.places[action.payload.id].infoView.pictures.urls = action.payload.pictures
            return newState
        case ACTION_TYPES.MAKE_FILTER_PLACES:
            let placeName = action.payload.placeName
            if (placeName.length === 0) {
                newState.places.forEach(place => { place.show = true })
            } else {
                newState.places.forEach(place => {
                    place.show = place.name.startsWith(placeName)
                })
            }
            return newState
        case ACTION_TYPES.STOP_PLACE_MARKER_ANIMATION:
            newState.places[action.payload.id].markerAnimation = MARKER_NO_ANIMATION
            return newState
        case ACTION_TYPES.START_PLACE_MARKER_ANIMATION:
            newState.places[action.payload.id].markerAnimation = MARKER_ANIMATION_BOUNCE
            return newState
        case ACTION_TYPES.LOAD_PICTURE_ERROR:
                newState.places[action.payload.id].infoView.pictures.error = action.payload.error
                return newState
        default:
            return state
    }
}

export default place
