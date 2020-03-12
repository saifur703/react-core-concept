import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const person = {
    name: 'Saifur',
    age: 24,
    job: 'Freelancing'
  };
  const products = [
    {
      title: 'Web Design',
      description: 'lorem ipsum ammet here',
      btnLink: 'https://www.webdesign.com',
      btnText: 'Learn More'
    },
    {
      title: 'Photoshop',
      description: 'Lorem ipsum photoshop text',
      btnText: 'Learn More',
      btnLink: 'https://photoshop.com'
    },
    {
      title: 'SEO',
      description: 'hello SEO here lorem ipsum',
      btnLink: 'link.com',
      btnText: 'Go to PS'
    }
  ];
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h2 style={{ color: 'red', backgroundColor: 'green' }}>
          My Name is: {person.name}
        </h2>
        <h3>My age is: {person.age}</h3>
        <h4>{`My Job is: ${person.job}`}</h4>

        <Counter></Counter>

        <div className='product-area'>
          <Product product={products[0]}></Product>
          <Product product={products[1]}></Product>
          <Product product={products[2]}></Product>
        </div>

        <div className='person-area'>
          <Person name='Saifur' age='24' />
          <Person name='Mamun' age='14' />
          <Person name='Akash' age='15' />
        </div>

        <Users></Users>
      </header>
    </div>
  );
}

function Product(props) {
  const productStyle = {
    border: '1px solid #ddd',
    background: '#777',
    padding: '15px 30px',
    margin: '15px',
    width: '20%',
    float: 'left'
  };

  // Destructuring
  const { title, description, btnText, btnLink } = props.product;
  return (
    <div style={productStyle}>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={btnLink}>{btnText}</a>
    </div>
  );
}

function Person(props) {
  const personStyle = {
    border: '1px solid red',
    margin: '10px',
    padding: '10px 20px',
    float: 'left'
  };
  return (
    <div style={personStyle}>
      <h3>My Name is: {props.name}</h3>
      <p>My age is {props.age}</p>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(110);
  const handleIncrease = () => {
    const increment = count + 1;
    setCount(increment);
  };
  const handleDecrease = () => {
    const decrement = count - 1;
    setCount(decrement);
  };
  return (
    <div>
      Counter: {count}
      <br />
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
}

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
      .then(err => console.log(err));
  }, []);
  return (
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta pariatur
        accusantium officiis assumenda ad iste consequatur. Nostrum dolor quos
        consequuntur!
      </p>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
