import React, { useState } from 'react';
import axios from 'axios';

const initialValues = {
  username:'',
  password:''
}

const Login = (props) => {
  const [formValues, setFormValues] = useState(initialValues)
  const [loggingIn, setLoggingIn] = useState(false)
  const onChange = e => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = e => {
    e.preventDefault();
    setLoggingIn(true);
    axios
      .post('http://localhost:5000/api/login', formValues)
      .then(res => {
        // console.log('Success: ', res)
        window.localStorage.setItem('token', res.data.payload);
        setFormValues(initialValues)
        props.history.push('/FriendsList')
        setLoggingIn(false);
      })
      .catch(err => {
        console.log('Error logging in: ', err)
        setLoggingIn(false);
      })
  }
  if (loggingIn) {
    return (<h1>Please wait... Verifying Credentials...</h1>)
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input 
          type='text'
          name='username'
          id='username'
          placeholder='Username'
          onChange={onChange}
          value={formValues.username}
        />
        <input 
          type='password'
          name='password'
          id='password'
          placeholder='Password'
          onChange={onChange}
          value={formValues.password}

        />
        <button>Login!</button>
      </form>
    </div>

  )
}

export default Login;