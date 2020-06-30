import React from 'react';
import { CopyableLink, Themes } from 'eyal-copyable-link';
const LinkExample = () => {
  return <CopyableLink text="click here to copy text" width='600px' theme={Themes.BLUE}/>;
};


const name = 'Copyable link';
const description = 'This is a light-weight component which you can convinently integrate into your application. To render this component just call it, the default start state is closed';
const libraryName = 'eyal-copyable-link';

const TogglerInfo = {
  name,
  Example: LinkExample,
  description,
  libraryName,
};
export default TogglerInfo;