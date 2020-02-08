import React from 'react';

const About = () => {
  return (
    <div className="about">
      <h1>About me</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum
      </p>
      <style jsx>{`
        .about {
           padding: 0 20px;
           text-align: left;
        }
        h1 {
          margin-top: 50px;
        }
    `}</style>
    </div>
  );
};

export default About;