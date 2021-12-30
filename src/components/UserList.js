import { useEffect, useContext } from 'react';
import UserContext from  '../context/user/UserContext';

const UserList = () => {
    //Extraigo del contexto la funcion que necesite
    const { getUsers } = useContext(UserContext)

    useEffect(() => {
        getUsers();

    }, [])

    return (
        <div>
            Users
        </div>
    )
};

export default UserList;
