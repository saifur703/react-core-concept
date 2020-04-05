import React from 'react';
import Cards from './Cards';

const Card = (props) => {
  const cardData = [
    {
      title: 'Card title 1',
      text:
        'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      footer: 'Last updated 3 mins ago',
      img: 'https://via.placeholder.com/350',
    },
    {
      title: 'Card title 2',
      text:
        'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      footer: 'Last updated 5 mins ago',
      img: 'https://via.placeholder.com/350',
    },
    {
      title: 'Card title 3',
      text:
        'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      footer: 'Last updated 9 mins ago',
      img: 'https://via.placeholder.com/350',
    },
  ];

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-4'>
          <Cards
            cardImg={cardData[0].img}
            cardTitle={cardData[0].title}
            cardText={cardData[0].text}
            cardFooter={cardData[0].footer}
          />
        </div>
        <div className='col-md-4'>
          <Cards
            cardImg={cardData[1].img}
            cardTitle={cardData[1].title}
            cardText={cardData[1].text}
            cardFooter={cardData[1].footer}
          />
        </div>
        <div className='col-md-4'>
          <Cards
            cardImg={cardData[2].img}
            cardTitle={cardData[2].title}
            cardText={cardData[2].text}
            cardFooter={cardData[2].footer}
          />
        </div>
      </div>
    </div>
  );
};
export default Card;
