import React, { useState } from 'react'

export default function UserList() {
  //users has intial value of users ['Rohit','Shubham','Naitik','Kivaya']
  let [users,setUsers] = useState(['Rohit','Shubham','Naitik','Kivaya'])
  //1. setting an initial value from useState([])
  //2. by using setUsers

  return (
    <div>
      <h5>User's List</h5>
      <ul className='list-group'>
          {users.map(function(item){
            return <li className='list-group-item'>{item}</li>

          })}
      </ul>
    </div>
  )
}
