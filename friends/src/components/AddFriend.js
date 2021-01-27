import React, { useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const initialValues = {
  name:'',
  email:'',
  age:''
}

const AddFriend = (props) => {
  const [formInput, setFormInput] = useState(initialValues)

  const handleChange = e => {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('/friends', formInput)
      .then(res => {
        console.log('added friend success: ', res)
        props.history.push('/FriendsList')
      })
      .catch(err => {
        console.log('add friend fail: ', err)
      })
  }
  return(
    <form onSubmit={handleSubmit}>
      <input 
        type='text'
        name='name'
        id='name'
        placeholder='Name'
        value={formInput.name}
        onChange={handleChange}
      />
      <input 
        type='text'
        name='email'
        id='email'
        placeholder='Email'
        value={formInput.email}
        onChange={handleChange}
      />
      <input 
        type='number'
        name='age'
        id='age'
        placeholder='Age'
        value={formInput.age}
        onChange={handleChange}
      />
      <button>Add New Friend</button>
    </form>
  )
}

export default AddFriend;