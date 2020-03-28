import React, { Fragment } from "react";
import { Popover, PopoverManager } from "./Popover";

const element = (
  <Fragment>
    <h1>This is tooltip example</h1>
    <p>You can render everything inside!</p>
    <p>You can also add custom styles</p>
  </Fragment>
);

const PopoverExample = ({ show }) => {
  if (!show) {
    return <Fragment/>;
  }
  return (
    <Fragment>
      <Popover popover={"tooltip"} position={PopoverManager.POSITIONS.TOP} element={element} closeOnClickOutside={true}
               target={document.getElementById("custom-component-button")}/>
    </Fragment>

  );
};

export default PopoverExample;