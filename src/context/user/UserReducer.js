import {GET_USERS, GET_PROFILE} from '../types';
//estado actual, para action


//El payload es la data, o datos importantes
export default (state, action) => {
    const {payload, type} = action

    switch(type) {
        case GET_USERS:
            return {
                ...state,
                users: payload
            }
        case GET_USERS:
            return {
                ...state,
                selectedUser: payload
            }
    }
}