import React, { useState, useEffect } from 'react';
import Friend from './Friend';
import axiosWithAuth from '../utils/axiosWithAuth';

const FriendsList = () => {
  const [friends, setFriends] = useState([])

  useEffect(() => {
    axiosWithAuth()
      .get('/friends')
      .then(res => {
        console.log('friend auth: ', res.data)
        setFriends(res.data);
      })
      .catch(err => {
        console.log(err.response);
      })
  },[])

  if (!friends.length) return (<h1>Rounding up friends...</h1>)
  return(
    <div>
      <h1>Look at all of our friends!</h1>
      {friends.map(friend => {
        return(
          <Friend friend={friend} key={friend.id} />
        )
      })}
    </div>
  )
}

export default FriendsList;