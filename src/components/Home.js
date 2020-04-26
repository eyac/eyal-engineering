import React, { Fragment } from 'react';
import Section from "./Section";
import About from "./About";
import Career from "./Career";
import IconList from "./IconList";

const Home = () => {
  return (
    <Fragment>
      <Section component={About}/>
      <Section component={Career} theme="black"/>
      <Section component={IconList}/>
    </Fragment>
  );
};

export default Home;