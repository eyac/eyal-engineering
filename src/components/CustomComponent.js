import React from 'react';
import { colors } from '../common/styles';
import { CopyableLink, Themes } from 'eyal-copyable-link';

const CustomComponent = ({ component }) => {
  const { name, Example, description, libraryName } = component;
  const npmLink = `npm install --save ${libraryName}`;

  return (
    <div className="custom-component">
      <div className="example">
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
      <div className="bottom">
        <div className="card red">
          <h3>
            Download
          </h3>
          <CopyableLink text={npmLink} width='600px' theme={Themes.RED}/>
        </div>
      </div>
      <div className="bottom">
        <div className="card">
          <h3>
            How to use
          </h3>
          <p style={{textAlign: 'left'}}>TODO</p>
        </div>
      </div>
      {/*language=CSS*/}
      <style jsx>{`
          .custom-component {
              height: 1000px;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: space-evenly;
              background-color: ${colors.white};
              text-align: center;

              @media screen and (max-width: 600px){
                padding: 5px 10px;
           }
          }
          .card {
              box-shadow: 0 12px 19px 0 rgba(192, 192, 192, 0.5);
              padding: 20px;
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
          .example {
              width: 700px;
              @media screen and (max-width: 600px){
                width: 270px;
           }
          }
          .bottom {
             width: 700px;
             @media screen and (max-width: 600px){
                width: 270px;
           }
          }
          .component-name {
              font-size: 24px;
          }
          .placeholder {
            display: inline-block;
            margin-top: 80px;
          }
          h1, h3 {
             text-align: left;
          }

      `}</style>
    </div>
  );
};

export default CustomComponent;
