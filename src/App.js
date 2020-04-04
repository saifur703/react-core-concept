import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Profile from './components/Profile/Profile';
import Counter from './components/Counter/Counter';
import Users from './components/Users/Users';
import Person from './components/Person/Person';
import Products from './components/Products/Products';
import Skills from './components/Profile/Skills';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />

        <div className='person-area'>
          <Person name='Saifur' age='24' />
          <Person name='Mamun' age='14' />
          <Person name='Akash' age='15' />
        </div>
        <Products></Products>
        <Counter></Counter>
        <Users></Users>
        {/* <Profile></Profile> */}
        <Skills skillA='React' skillB='Nodejs' skillC='MongoDB'></Skills>
        <Skills skillA='JavaScript' skillB='PHP' skillC='WordPress'></Skills>
      </header>
    </div>
  );
}

export default App;
