import React, { useState } from 'react';
import Button from './Button';

const CustomComponent = ({ name }) => {

  const [show, setShow] = useState(false);

  return (
    <div className="custom-component">
      <div className="wrapper">
        <h1 className="component-name">{name}</h1>
        <div className="visual-component">
          {show && <span>{name}</span>}
          <div className="button-container">
            <Button text={`Show ${name}`} handler={() => setShow(!show)}></Button>
          </div>
        </div>
        <div className="component-description box">
          Description
        </div>
        <div className="npm-link box">
          Download
        </div>
      </div>
      <style jsx>{`
       .box {
         display: inline-block;
         width: 50%;
         height: 360px;
       }
       .custom-component {
         display: flex;
         flex-direction: column;
         background-color: #ffffff;
         text-align: center;
       }
       .wrapper {
          width: 900px;
          margin: 20px auto;
       }
       .component-name {
         font-size: 24px;
         text-align: left;
       }
        .component-description {
          font-size: 25px;
          display: inline-block;
        }
       .visual-component {
          position: relative;
          border: 2px solid #cfcfcf;
          border-radius: 8px;
          font-size: 25px;
          height: 320px;
        }
        .button-container {
          position: absolute;
          bottom: 20px;
          left: 300px;
        }
        .npm-link {
          font-size: 25px;
        }
    `}</style>
    </div>
  );
}

export default CustomComponent;
