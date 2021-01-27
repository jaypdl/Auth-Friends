import { Route, Link, Switch, useHistory } from 'react-router-dom';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import './App.css';
import PrivateRoute from './components/PrivateRoute';
import AddFriend from './components/AddFriend'

function App() {
  const history = useHistory();
  const handleLogout = () => {
    console.log('logout click')
    window.localStorage.removeItem('token');
    history.push('/login')
  }
  return (
    <div className="App">
      <nav>
        <ul>
          <li><Link to='/Login'>Login</Link></li>
          <li><Link to='/FriendsList'>Friends</Link></li>
          <li><Link onClick={handleLogout}>Logout</Link></li>
        </ul>

      </nav>
      <Switch>
        <PrivateRoute exact path='/FriendsList' component={FriendsList}/>
        <PrivateRoute exact path='/AddFriend' component={AddFriend}/>
        <Route path='/login' component={Login}/>
        <Route component={Login} />
      </Switch>
    </div>
  );
}

export default App;
