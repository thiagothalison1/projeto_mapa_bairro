import { ACTION_TYPES } from './menu.actions'

const defaultState = {
    isOpen: true
}

const place = (state = defaultState, action) => {
    let newState = Object.assign({}, state)

    switch (action.type) {
        case ACTION_TYPES.TOGGLE_MENU:
            newState.isOpen = !state.isOpen
            return newState
        default:
            return state
    }
}

export default place
