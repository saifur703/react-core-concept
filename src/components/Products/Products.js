import React from 'react';
import Product from './Product';

const Products = () => {
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
    <div className='product-area'>
      <Product product={products[0]}></Product>
      <Product product={products[1]}></Product>
      <Product product={products[2]}></Product>
    </div>
  );
};

export default Products;
