import React  from 'react';
import Eyal from './icons/Eyal.png';
import { colors } from '../common/styles';

const Header = () => {
  return (
    <div className="header">
      <h1 className="eyal-engineering">Eyal engineering services</h1>
      <img src={Eyal}></img>
      <style jsx>{`
        .header {
          height: 70px;
          background-color: ${colors.black};
          color: white;
          display: flex;
          align-items: center;
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
        }
        .eyal-engineering {
          position: absolute;
          top: 25px;
          font-size: 32px;
        }
    `}</style>
    </div>
  );
};

export default Header;