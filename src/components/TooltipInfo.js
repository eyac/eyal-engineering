import React, { Fragment, useState } from 'react';
import { PopoverManager, } from './Popover';
// import { PopoverManager } from 'eyal-popover';
import Button from './Button';
import { colors } from "../common/styles";

const element = (
  <Fragment>
    <h1>This is tooltip example</h1>
    <p>You can render everything inside!</p>
    <p>You can also add custom styles</p>
  </Fragment>
);

const TooltipExample = () => {
  const [show, setShow] = useState(true);
  const handleClick = e => {
    setShow(prevShow => !prevShow);
    if (show) {
      e && PopoverManager.showTooltip(e.target, element, PopoverManager.POSITIONS.TOP)
    }
    else {
      e && PopoverManager.hide(e);
    }
  };

  return (
    <Fragment>
      <Button id="tooltip-button" text={`Show tooltip`} handler={e => {
        handleClick(e)
      }}></Button>
      {/*language=CSS*/}
      <style jsx global>{`
        #tooltip-button {
            margin-top: 80px;
            cursor: pointer;
        }
        #tooltip-button:hover, active {
            background-color: ${colors.black};
        }

      `}</style>
    </Fragment>
  );
};

const name = 'Tooltip';
const description = 'This is a light-weight component which you can convinently integrate into your application. In order to render this component all you need to provide is a target element, position and contetnt to render inside';
const libraryName = 'eyal-tooltip';

const TooltipInfo = {
  name,
  Example: TooltipExample,
  description,
  libraryName,
};
export default TooltipInfo;