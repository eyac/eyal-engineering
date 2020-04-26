import React from 'react';
import { colors } from '../common/styles';
import CopyClipboard from './icons/CopyClipboard';

const CustomComponent = ({ component }) => {
  const { name, Example, description, libraryName } = component;
  const npmLink = `npm install --save ${libraryName}`;
  const copyNpmLink = () => {
    document.getElementById('npm-command').select();
    document.execCommand('copy');
  };

  return (
    <div className="custom-component">
      <div className="top">
        <div className="card">
          <h1 className="component-name">{name}</h1>
          <div id={`${name}-placeholder`} className='placeholder'>
            <Example/>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="card black">
          <h3>
            Description
          </h3>
          <p style={{textAlign: 'left'}}>{description}</p>
        </div>
      </div>
      <div className="bottom right">
        <div className="card red">
          <h3>
            Download
          </h3>
          <button className='npm-link' onClick={copyNpmLink}>
            <textarea spellcheck="false" onChange={() => ''} id="npm-command" value={npmLink}/><CopyClipboard/>
          </button>
        </div>
      </div>
      {/*language=CSS*/}
      <style jsx>{`
          .custom-component {
              background-color: ${colors.white};
              text-align: center;
              padding: 50px 50px;
              margin: 0 auto;
          }
          .card {
              box-shadow: 0 12px 19px 0 rgba(192, 192, 192, 0.5);
              padding: 20px;
              height: 100%;
              width: 100%;
              border-radius: 8px;
          }
          .black {
            background-color: ${colors.black};
            color: ${colors.white};
          }
          .red {
            background-color: ${colors.red};
            color: ${colors.black};
          }
          .top {
              margin: 20px auto;
              width: 700px;
              height: 320px;
          }
          .bottom {
             display: block;
             flex-direction: row;
             margin: 50px auto;
             width: 700px;
             height: 130px;
          }
          .component-name {
              font-size: 24px;
              margin-bottom: 25px;
          }
          .npm-link {
              margin: 30px 0 10px 0;
              height: 40px;
              width: 500px;
              padding: 10px;
              background-color: ${colors.red3};
              position: relative;
              text-align: center;
              border-radius: 6px;
              cursor: pointer;
              border: none;
              font-size: 15px;
          }
          #npm-command {
            all: unset;
            width: 280px;
            height: 20px;
            font-family: "Fira Mono", "Andale Mono", Consolas, monospace;
          }
          .placeholder {
            position: relative;
            height: 200px;
            width: 100%;
            margin-top: 100px;
          }
          button:hover, active {
              background-color: ${colors.red2};
           }
          h1, h3 {
             text-align: left;
          }
          button:focus {
             outline: none;
           }

      `}</style>
    </div>
  );
};

export default CustomComponent;
