import React from 'react';

const Cards = (props) => {
  return (
    <div className='card-deck'>
      <div className='card' style={{ backgroundColor: 'transparent' }}>
        <img src={props.cardImg} className='card-img-top' alt='' />
        <div className='card-body'>
          <h5 className='card-title'>{props.cardTitle}</h5>
          <p className='card-text'>{props.cardText}</p>
          <p className='card-text'>
            <small className='text-muted'>{props.cardFooter}</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
