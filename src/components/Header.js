import React, { Fragment } from 'react';
import Eyal from './icons/Eyal.png';

const Header = () => {
  return (
    <Fragment>
      <h1>Eyal engineering services</h1>
      <img src={Eyal}></img>
      <style jsx>{`
        img {
          height: 120px;
          width: 120px;
          border-radius: 50%;
          position: absolute;
          top: 20vh;
          left: 10px;
        }
    `}</style>
    </Fragment>
  );
};

export default Header;