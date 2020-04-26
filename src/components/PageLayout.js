import React from 'react';
import Navbar from './Navbar';

const PageLayout = () => {
  return (
    <div className="page-layout">
      <Navbar/>
      <style jsx>{`
        .page-layout {
          height: 100%;
          width: 100%;
          text-align: center;
        }
    `}</style>
    </div>
  );
};

export default PageLayout;