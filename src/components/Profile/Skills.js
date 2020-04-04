import React from 'react';

const Skills = props => {
  return (
    <div className='skills'>
      <ul>
        <li>
          <a href='/'>{props.skillA}</a>
        </li>
        <li>
          <a href='/'>{props.skillB}</a>
        </li>
        <li>
          <a href='/'>{props.skillC}</a>
        </li>
      </ul>
    </div>
  );
};

export default Skills;
