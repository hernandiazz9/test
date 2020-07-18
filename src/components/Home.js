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
            
            <h1  style={{fontSize:'4'+'rem', fontWeight:'bold'}}>BUILDING IN CENTRAL OTAGO SINCE 2007</h1>
            <p>Queenstown based bespoke builders and project managers.  Specialising in commercial and residential builds, renovations and landscaping.  Friendly client focused team focusing on efficiency and value for money.</p>
        </div>
      </div>
    </Parallax>
  </div>
);

export default Home