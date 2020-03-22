import React, { Fragment } from 'react';
import CSS from './icons/CSS';
import JS from './icons/JS';
import ReactIcon from './icons/ReactIcon';
import Redux from './icons/Redux';
import NPM from './icons/NPM';
import GitRed from './icons/GitRed';
import HTMLBlack from './icons/HTMLBlack';
import Github from './icons/Github';
import Node from './icons/Node';

const IconList = () => {
  return (
    <Fragment>
      <div className="icon-list">
        <CSS/>
        <GitRed/>
        <JS/>
        <Node/>
        <ReactIcon/>
        <Redux/>
        <NPM/>
        <Github/>
        <HTMLBlack/>
      </div>
      <style jsx>{`
        .icon-list {
           height: 200px;
           display: block;
         }
        svg {
          margin: 60px 10px;
          height: 70px;
          width: 70px;
        }
    `}</style>
    </Fragment>
  );
};

export default IconList;