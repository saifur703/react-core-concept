import React, { Component } from 'react';
import './Profile.style.css';
import Header from './Header';
import Skills from './Skills';
import SocialLinks from './SocialLinks';

class Profile extends Component {
  me = {
    skillA: 'JavaScript',
    skillB: 'PHP',
    skillC: 'WordPress',
  };
  // links = {
  //   facebook: 'Facebook',
  //   twitter: 'Twitter',
  //   linkedIn: 'LinkedIn',
  //   gitHub: 'GitHub',
  // };
  render() {
    return (
      <div className='container'>
        <Header name='Saifur' />
        <Skills
          skillA={this.me.skillA}
          skillB={this.me.skillB}
          skillC={this.me.skillC}
        />
        <SocialLinks
          facebook={this.facebook}
          twitter={this.twitter}
          linkedIn={this.linkedIn}
          gitHub={this.gitHub}
        />
      </div>
    );
  }
}

export default Profile;
