import React, { useState } from 'react';
import { colors } from '../common/styles';
import Button from './Button';
import PopoverExample from './PopoverExample.js';
import CopyClipboard from './icons/CopyClipboard';

const CustomComponent = ({ name }) => {

  const [show, setShow] = useState(false);
  const copyNpmLink = () => {console.info('copied')};
  return (
    <div className="custom-component">
      <div className="top">
        <div className="card">
          <h1 className="component-name">{name}</h1>
          <PopoverExample show={show}/>
          <Button id="custom-component-button" text={`Show ${name}`} handler={() => setShow(!show)}></Button>
        </div>
      </div>
      <div className="bottom">
        <div className="card">
          <h3>
            Description
          </h3>
        </div>
      </div>
      <div className="bottom right">
        <div className="card">
          <h3>
            Download
          </h3>
          <button className='npm-link' onClick={copyNpmLink}>npm install --save eyal-tooltip <CopyClipboard/></button>
        </div>
      </div>
      {/*language=CSS*/}
      <style jsx>{`
          .custom-component {
              background-color: #ffffff;
              text-align: center;
              padding: 50px 50px;
          }
          .card {
              box-shadow: 0 12px 19px 0 rgba(192, 192, 192, 0.5);
              padding: 20px;
              height: 100%;
              width: 100%;
          }
          .top {
              margin: 20px auto;
              width: 700px;
              border-radius: 8px;
              font-size: 25px;
              height: 320px;
          }

          .bottom {
             display: inline-flex;
             flex-direction: row;
             margin: 50px auto;
             width: 300px;
             height: 130px;
          }
          .right {
            margin-left: 100px;
          }

          .component-name {
              font-size: 24px;
              margin-bottom: 225px;
          }

          h1, h3 {
             text-align: left;
          }

          .npm-link {
              margin: 35px 0 10px 0;
              height: 40px;
              width: 300px;
              padding: 10px;
              background-color: ${colors.blue};
              position: relative;
              text-align: left;
              border-radius: 6px;
              cursor: pointer;
              border: none;
              font-size: 15px;
          }

           button:hover, active {
              background-color: ${colors.blue02};
           }
            button:active {
              border: 1px solid ${colors.gray};
           }
           button:focus {
             outline: none;
           }

      `}</style>
    </div>
  );
};

export default CustomComponent;
