import React, { Fragment } from 'react';
import { colors } from '../common/styles';

const CustomButton = ({ id, text, handler }) => {
  return(
    <Fragment>
      <button id={id} onClick={handler}>
        {text}
      </button>
      {/*language=CSS*/}
      <style jsx> {`
         button {
          font-weight: bold;
          font-size: 15px;
          height: 36px;
          width: 300px;
          border: 1px solid ${colors.black};
          border-radius: 30px
        }
       button:hover {
         background-color: ${colors.black};
         color: ${colors.whitesmoke};
       }

       button:focus {
         outline: none;
       }
      `}
      </style>
    </Fragment>
  );
};

export default CustomButton;