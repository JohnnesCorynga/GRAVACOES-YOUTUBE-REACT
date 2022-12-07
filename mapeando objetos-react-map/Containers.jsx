import React from 'react'
import styles from './containers.sass'
const Containers = () => {
  const users = [
    {id: 0, firstName: 'John', lastName: 'Doe', email: 'johndoe@example.com',},
    {id: 1, firstName: 'Mariano', lastName: 'noroe', email: 'johndoe@example.com',},
    {id: 2, firstName: 'Erik', lastName: 'Maghetti', email: 'erikmaghetti@example.com',},
    {id: 3, firstName: 'Sara', lastName: 'Routa', email: 'sararouta@example.com',},
  ]
  return (
    <div className='containers'>
      {/*ultilizando a função Map*/}
      {users.map(user => (
          <div className="containers-users" key={user.id}>
            <h2>{user.firstName} {user.lastName}</h2>
            <p>{user.email}</p>
          </div>
      ))}
      
          <div className="containers-users" key={users[0].id}>
            <h2>{users[0].firstName} {users[0].lastName}</h2>
            <p>{users[0].email}</p>
          </div>
          <div className="containers-users" key={users[1].id}>
            <h2>{users[1].firstName} {users[1].lastName}</h2>
            <p>{users[1].email}</p>
          </div>
          <div className="containers-users" key={users[2].id}>
            <h2>{users[2].firstName} {users[2].lastName}</h2>
            <p>{users[2].email}</p>
          </div>
          <div className="containers-users" key={users[3].id}>
            <h2>{users[3].firstName} {users[3].lastName}</h2>
            <p>{users[3].email}</p>
          </div>

      


    </div>
  )
}

export default Containers