import React, { useEffect, useState } from 'react'

export default function APIUsers() {
  let [users, setUsers] = useState([])
  let count = 1
  useEffect(function () {
    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(function (data) {
      setUsers(data)
    })
  }, [])
  return (
    <div>

      {(users.length!=0)?users.map(function (item) {
        return <div key={count++} className='card mb-4'>
                <div className='card-body'>
                  <h6 className='mb-1'>{item.name}</h6>
                  <p className='mb-0' style={{ fontSize: '13px' }}>{item.email}</p>
                  <p className='mb-0' style={{ fontSize: '12px' }}>Address: {item.address.city + ', '+item.address.zipcode}</p>
                  <p className='mb-0' style={{ fontSize: '12px' }}>{item.phone}</p>
                </div>
            </div>
      }):''}
    </div>
  )
}
