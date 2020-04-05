import React from 'react';

const SocialLinks = (props) => {
  // console.log('Social Links', props.facebook);
  const { facebook, twitter, linkedIn, gitHub } = props;
  return (
    <div className='social-links'>
      <ul>
        {facebook && (
          <li>
            <a href='/'>{facebook}</a>
          </li>
        )}
        {twitter && (
          <li>
            <a href='/'>{twitter}</a>
          </li>
        )}
        {linkedIn && (
          <li>
            <a href='/'>{linkedIn}</a>
          </li>
        )}
        {gitHub && (
          <li>
            <a href='/'>{gitHub}</a>
          </li>
        )}
      </ul>
    </div>
  );
};

export default SocialLinks;
