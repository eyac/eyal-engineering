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
      <div className="bottom right">
        <div className="card red">
          <h3>
            Download
          </h3>
          <CopyableLink text={npmLink} theme={Themes.RED}/>
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
          .example {
              margin: 20px auto;
              width: 700px;
              height: 280px;
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
