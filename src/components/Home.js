import React, { Fragment } from 'react';
import Section from "./Section";
import About from "./About";
import IconList from "./IconList";

const Home = () => {
  return (
    <Fragment>
      <Section component={About}/>
      <Section component={About} theme="black"/>
      <Section component={IconList}/>
    </Fragment>
  );
};

export default Home;