import React, { Component } from 'react';
import './Profile.style.css';
import Header from './Header';
import Skills from './Skills';
import SocialLinks from './SocialLinks';

class Profile extends Component {
  me = {
    skillA: 'JavaScript',
    skillB: 'PHP',
    skillC: 'WordPress'
  };
  render() {
    return (
      <div className='container'>
        <Header name='Saifur' />
        <Skills
          skillA={this.me.skillA}
          skillB={this.me.skillB}
          skillC={this.me.skillC}
        />
        <SocialLinks />
      </div>
    );
  }
}

export default Profile;
