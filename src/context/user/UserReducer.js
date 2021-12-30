import {GET_USERS, GET_PROFILE} from '../types';
//estado actual, para action
/**
 * Funciones a ejecutarse dependiente del type al cual llame
 */

//El payload es la data, o datos importantes(carga útil)
export default (state, action) => {
    const {payload, type} = action

    switch(type) {
        case GET_USERS:
            return {
                ...state,
                users: payload
            };
        case GET_PROFILE:
            return {
                ...state,
                selectedUser: payload
            };
        default:
            return state;
    }
}