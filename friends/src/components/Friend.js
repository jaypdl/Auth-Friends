import React from 'react';

const Friend = (props) => {

  return(
    <div>
      <h4>{props.friend.name}, Age: {props.friend.age}</h4>
      <h5>{props.friend.email}</h5>
    </div>
  )
}

export default Friend;