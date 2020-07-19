import React, { Fragment } from 'react';
import Eyal from './icons/Eyal.png';
import { colors } from '../common/styles';

const Header = () => {
  return (
    <div className="header">
      <h1 className="eyal-engineering">Eyal engineering services</h1>
      <img src={Eyal}></img>
      {/*language=CSS*/}
      <style jsx>{`
        .header {
          height: 70px;
          background-color: ${colors.black};
          color: white;
          display: flex;
          justify-content: center;
          font-size: 18px;
        }
        img {
          height: 120px;
          width: 120px;
          border-radius: 50%;
          position: absolute;
          top: 50px;
          right: 100px;

          @media screen and (max-width: 600px){
           display: none;
          }
        }
        .eyal-engineering {
          position: absolute;
          top: 35px;
          font-size: 32px;

          @media screen and (max-width: 600px){
           top: 60px;
           font-size: 25px;
          }
        }
    `}</style>
    </div>
  );
};

export default Header;