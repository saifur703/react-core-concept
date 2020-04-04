import React from 'react';

const Product = props => {
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
};

export default Product;
