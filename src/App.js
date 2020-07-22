import React from 'react';
//import Header from './components/Header';
import Home from './components/Home';
import Service from './components/Service';
import Index from './components/timeShitf/Index';
import Staff from './components/Staff';
import Project from './components/Project';

function App() {



  return (
    <div className='container-all'>
        <Home/>
        <div className="service">
          <h1>Services</h1>
          <Service/>

        </div>

        <Project/>
        <Staff/>
        
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

        <Index />
      
    </div>
  );
}

export default App;
