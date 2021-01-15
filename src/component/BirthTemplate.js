import React  from 'react';
import '../scss/BirthTemplate.scss';

const BirthTemplate = ({children}) => {

  return (
    <div className="template__wrapper">
      <h1>Happy Birthday, June!</h1>
      <div className="birth__box">
        {children}
      </div>
      <h3 className="hidden">선물은..거기서 끝이 아니었어.</h3>
    </div>
  )
};

export default BirthTemplate;