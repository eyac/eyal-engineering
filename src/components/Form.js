import React, { Fragment} from 'react';

const Form = () => {

  return (
    <Fragment>
        <input type="text" placeholder="Email"/>
        <input type="text" placeholder="Name"/>
        <input type="text" placeholder="Phone"/>
      <style jsx>{`
        input {
          position: relative;
          height: max-content;
          width: 100%
        }
    `}</style>
    </Fragment>

  );
};

export default Form;