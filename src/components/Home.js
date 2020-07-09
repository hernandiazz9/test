import React from "react";
import { Parallax } from "react-parallax";
import bgImg from '../assets/img/header-bg.jpg'
import Header from './Header'

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};


const Home = () => (
  <div style={styles}>
    
    <Parallax 
      bgImage={bgImg} 
      strength={500}
      bgImageSizes={1000}
      bgStyle={{ filter:'brightness(0.4)'}}
    ><Header/>
      <div style={{ height: 700 }}>
        <div className='inside-bg'>
            <div style={{fontSize:'2'+'rem', fontWeight:'bold'}}>  WELCOME TO NEVIS GROUP </div>
            <br/>
            <br/>
            <h1  style={{fontSize:'4'+'rem', fontWeight:'bold'}}>BUILD YOUR DREAM PLACE</h1>
        </div>
      </div>
    </Parallax>
  </div>
);

export default Home