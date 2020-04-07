import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Profile from './components/Profile/Profile';
import Counter from './components/Counter/Counter';
import Users from './components/Users/Users';
import Person from './components/Person/Person';
import Products from './components/Products/Products';
import Skills from './components/Profile/Skills';
import SocialLinks from './components/Profile/SocialLinks';

// Header Area
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import HeaderArea from './components/HeaderArea/HeaderArea';
import Card from './components/Cards/Card';
import StatePractice from './components/StatePractice/StatePractice';
import StatePractice2 from './components/StatePractice/StatePractice2';
import SimpleTimer from './components/SimpleTimer/SimpleTimer';
function App() {
  return (
    <div className='App'>
      <HeaderArea />
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <SimpleTimer />
        <hr />
        <StatePractice />
        <StatePractice2 />
        <h2>Card Area</h2>
        <Card />
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
        <SocialLinks facebook='Facebook' gitHub='Hello GitHub' />
        <SocialLinks twitter='Twitter' linkedIn='Hello LinkedIn' />
      </header>
    </div>
  );
}

export default App;
