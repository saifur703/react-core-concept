import React, { useState } from 'react';
import { useEffect } from 'react';

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
      .then(err => console.log(err));
  }, []);
  const singer = { name: 'Eva Rahman' };

  return (
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta pariatur
        accusantium officiis assumenda ad iste consequatur. Nostrum dolor quos
        consequuntur!
      </p>
      <ul style={{ listStyle: 'none' }}>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <h1> My Favorite Singer: {singer.name}</h1>
    </div>
  );
}

export default Users;
