import React, { Fragment } from 'react';
import { colors } from '../common/styles';

const CustomButton = ({ text, handler }) => {
  return(
    <Fragment>
      <button onClick={handler}>
        {text}
      </button>
      <style jsx> {`
         button {
          font-weight: bold;
          font-size: 15px;
          height: 36px;
          width: 300px;
          border: 1px solid ${colors.black};
          border-radius: 30px
        }

        button:hover, :focus {
         background-color: ${colors.black};
         color: ${colors.whitesmoke};
       }
      `}
      </style>
    </Fragment>
  );
};

export default CustomButton;