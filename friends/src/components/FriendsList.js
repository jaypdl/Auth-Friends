import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import Friend from './Friend';
import AddFriend from './AddFriend';
import { Route, Link } from 'react-router-dom';
import PrivateRoute from './PrivateRoute'

const FriendsList = () => {
  const [friendsArr, setFriendsArr] = useState([])
  useEffect(() => {
    axiosWithAuth()
    .get('/friends')
    .then(res => {
      console.log('success: ', res)
      setFriendsArr(res.data);
    })
    .catch(err => {
      console.log('error: ', err)
    })
    axiosWithAuth()
    .get('/friends/1')
    .then(res => {
      console.log('friend1: ', res)
      // setFriendsArr(res.data);
    })
    .catch(err => {
      console.log('error getting friend: ', err)
    })
  },[])

  return(
    <div>
      <h1>Here are your friends!</h1>
      <nav>
      <Link to='/AddFriend'>Add Friend</Link>
      </nav>
      {friendsArr.map(friend => {
        return <Friend friend={friend} key={friend.id}/>
      })}
    {/* <PrivateRoute path='/FriendsList/AddFriend' component={AddFriend} /> */}
      {/* <AddFriend setFriends={setFriendsArr}/>
    </Route> */}

    </div>
  )
}

export default FriendsList;