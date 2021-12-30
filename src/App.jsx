import './App.css';
import Profile from './components/Profile';
import UserList from './components/UserList';

//Importación del context
import UserState from './context/user/UserState';

function App() {
    return (
        <UserState>
            <UserList/>
            
            <Profile/>
        </UserState>
    );
}

export default App
