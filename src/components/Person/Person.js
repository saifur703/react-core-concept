import React from 'react';

function Person(props) {
  const { name, age } = props;
  const personStyle = {
    border: '1px solid red',
    margin: '10px',
    padding: '10px 20px',
    float: 'left'
  };
  return (
    <div style={personStyle}>
      <h3>My Name is: {name}</h3>
      <p>My age is {age}</p>
    </div>
  );
}

export default Person;
