import React, { useState } from 'react';
import axios from 'axios';

const initialCredentials = {
  username:'',
  password:''
}

const Login = ({ history }) => {
  const [credentials, setCredentials] = useState(initialCredentials)
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    // console.log('input changing for ', e.target.name, 'is set to ',e.target.value)
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    axios
      .post('http://localhost:5000/api/login', credentials)
      .then(res => {
        setError('');
        // console.log('server response: ', res);
        setCredentials(initialCredentials);
        localStorage.setItem('token', res.data.payload);
        setLoading(false);
        history.push('/friends-list');
      })
      .catch(err => {
        setError(err.response.data.error);
        setCredentials(initialCredentials);
        setLoading(false);
      })
  }
  if (loading){
    return(
      <h1>Loading...</h1>
    )
  }
  return(
    <div>
      <form onSubmit={handleSubmit} >
        <input
          type='text'
          name='username'
          value={credentials.username}
          placeholder='username'
          onChange={handleChange}
        />
        <input
          type='password'
          name='password'
          value={credentials.password}
          placeholder='password'
          onChange={handleChange}
        />
        <button>Log In</button>
      </form>
      {error && <h2>Uh Oh! {error}</h2>}
    </div>
  )
}

export default Login;