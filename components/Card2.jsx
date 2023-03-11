import React from 'react';
import '../styles/card2.scss';
import { BsPlusLg } from 'react-icons/Bs';


const Card2 = ({ imageSrc }) => {
    return (
      <div className="card">
        <BsPlusLg className='plus' />
        <img className="card-image" src={imageSrc} alt="" />
      </div>
    );
  };

export default Card2;
