import React, { Component } from 'react';
import './Profile.style.css';
import Header from './Header';
import Skills from './Skills';
import SocialLinks from './SocialLinks';

class Profile extends Component {
  render() {
    return (
      <div className='container'>
        <Header name='Saifur' />
        <Skills />
        <SocialLinks />
      </div>
    );
  }
}

export default Profile;
