import {initialState} from './constants'


export default function (state = {}, action) {
    switch (action.type) {
        case 'USER_LOGGED_IN':
            return { ...state, user: action.user}
            break;
        default: 
            return state;
    }
}