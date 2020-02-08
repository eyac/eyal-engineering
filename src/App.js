import React from 'react';
import IconList from './components/IconList';
import About from './components/About'
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <section className="black">
        <Header/>
      </section>
      <section className="white">
        <About/>
      </section>
      <section className="black">
        <About/>
      </section>
      <section className="white">
        <IconList style={{ display: 'inline' }}/>
      </section>
      <style jsx>{`
        .App {
          text-align: center;
        }
        section {
          min-height: 34vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-size: calc(10px + 2vmin);
        }
        .black{
          background-color: #282c34;
          color: white;
        }
    `}</style>
    </div>
  );
}

export default App;
