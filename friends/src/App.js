import './App.css';
import React  from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import { useHistory } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const history = useHistory();

  const logout = () => {
    localStorage.removeItem('token');
    history.push('/login');
  }

  return (
    <div className='App'>
      <header>
        <nav>
          <ul>
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li>
              <Link onClick={logout}>Logout</Link>
            </li>
            <li>
              <Link to='/friends-list'>Friends List</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route path='/login' component={Login} />
        {/* <Route exact path='/friends-list' component={FriendsList} /> */}
        <PrivateRoute exact path='/friends-list' component={FriendsList} />
        <Route component={Login} />
      </Switch>
    </div>
  );
}

export default App;
