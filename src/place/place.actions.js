import { findPlacePictures } from '../drivers/apis/flicker'

export const ACTION_TYPES = {
    TOGGLE_PLACE_INFO_VIEW: 'TOGGLE_PLACE_INFO_VIEW',
    UPDATE_PLACE_PICTURE: 'UPDATE_PLACE_PICTURE',
    MAKE_FILTER_PLACES: 'MAKE_FILTER_PLACES',
    STOP_PLACE_MARKER_ANIMATION: 'STOP_PLACE_MARKER_ANIMATION',
    START_PLACE_MARKER_ANIMATION: 'START_PLACE_MARKER_ANIMATION',
    LOAD_PICTURE_ERROR: 'LOAD_PICTURE_ERROR'
}

export const togglePlaceInfoView = (id) => ({
    type: ACTION_TYPES.TOGGLE_PLACE_INFO_VIEW,
    payload: { id }
})

export const updatePlacePicture = (id, pictures) => ({
    type: ACTION_TYPES.UPDATE_PLACE_PICTURE,
    payload: { id, pictures }
})

export const stopPlaceMarkerAnimation = (id) => ({
    type: ACTION_TYPES.STOP_PLACE_MARKER_ANIMATION,
    payload: { id }
})

export const startPlaceMarkerAnimation = (id) => ({
    type: ACTION_TYPES.START_PLACE_MARKER_ANIMATION,
    payload: { id }
})

export const loadPictureError = (id, error) => ({
    type: ACTION_TYPES.LOAD_PICTURE_ERROR,
    payload: { id, error }
})

export const makeFilterPlaces = (placeName) => ({
    type: ACTION_TYPES.MAKE_FILTER_PLACES,
    payload: { placeName }
})

export const makeTogglePlaceInfoView = (placeId) => (dispatch, getState) => {
    dispatch(togglePlaceInfoView(placeId))

    let state = getState()
    let place = state.place.places[placeId]

    // It is necessary to retrieve the point of interest image
    // when the point of interest is going to be shown!
    if (place.infoView.show) {
        dispatch(startPlaceMarkerAnimation(placeId))

        // After 1 seconds, dispatchs an action to stop the place
        // marker animation.
        setTimeout(() => dispatch(stopPlaceMarkerAnimation(placeId)), 1000)

        let { name, position } = place

        findPlacePictures(name, position)
            .then((pictures) => dispatch(updatePlacePicture(placeId, pictures)))
            .catch(error => dispatch(loadPictureError(placeId, error)))
    }
}
