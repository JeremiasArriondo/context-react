import {useReducer} from 'react';
import UserReducer from './UserReducer';
import UserContext from './UserContext';
import axios from 'axios';

const UserState = ({children}) => {
    const initialState = {
        users: [],
        selectedUser: null
    };
    
    const [state, dispatch] = useReducer(UserReducer, initialState)

    const getUsers = async() => {
        const res = await axios.get('https://reqres.in/api/users')
        dispatch({
            type: 'GET_USERS',
            payload: res?.data?.data
        })
    };
    const getProfile = async(id) => {
        const res = await axios.get('https://reqres.in/api/users/'+ id)
        dispatch ({
            
        })
    };
    return (
        <UserContext.Provider values={{
            users: state.users,
            selectedUser: state.selectedUser,
            getUsers,
            getProfile
        }}>
            {children}
        </UserContext.Provider>
    )
};

export default UserState;