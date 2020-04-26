import React from 'react';
import Toggler from 'eyal-toggler';

const TogglerExample = () => {
  return <Toggler/>;
};


const name = 'Toggler';
const description = 'This is a light-weight component which you can convinently integrate into your application. To render this component just call it, the default start state is closed';
const libraryName = 'eyal-toggler';

const TogglerInfo = {
  name,
  Example: TogglerExample,
  description,
  libraryName,
};
export default TogglerInfo;