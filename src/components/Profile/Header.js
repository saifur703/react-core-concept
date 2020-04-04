import React from 'react';

const Header = props => {
  const { name } = props;
  return (
    <div className='header'>
      <h2>Hello, {name}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
        consectetur! Animi vel dicta hic nesciunt voluptatibus, harum maiores
        impedit nostrum! Cumque officiis a repellendus at modi numquam autem in
        labore?
      </p>
    </div>
  );
};

export default Header;
