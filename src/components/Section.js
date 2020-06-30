import React, { Fragment } from 'react';
import { colors } from '../common/styles';

const Section = ({ component, theme }) => {
  return (
    <Fragment>
      <section className={theme}>
        {component()}
      </section>
      <style jsx>{`
        section {
          display: flex;
          flex-direction: column;
          justify-content: center;
          font-size: 16px;
          background-color: white;
          color: #282c34;
          line-height: 1.6;
        }
        .black{
          background-color: ${colors.black};
          color: ${colors.white};
        }
    `}</style>
    </Fragment>
  );
};


Section.defaultProps = {
  minHeight: '34vh'
};

export default Section;