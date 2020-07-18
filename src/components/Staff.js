import React from 'react'
import img1 from '../assets/img/Construction.jpg'
import jacob from '../assets/img/jacob.jpeg'
import nick from '../assets/img/nick.jpeg'
import taylor from '../assets/img/taylor.jpeg'
import alex from '../assets/img/alex.jpeg'
import dion from '../assets/img/dion.jpeg'




const Staff = () => {
    return (
        <div className="container-staff">
            <h1>Meet the Team</h1>
            <img src={img1} alt='.' className="img1"/>
            <div className="txt1">
                <h2>Russell Hall</h2>
                <h3>Director Nevis Group</h3>
                <p>Russell has had over twenty years of building and project managing experience here in New Zealand and overseas. <br/>
                Nevis Group was formed In October 2007 to engage in building and construction projects in the Queenstown area.<br/>
                We have a young, enthusiastic and energetic building crew who together with Russell provide the skill base needed to get the job done. <br/>
                Nevis Group is a site safe member and has a strong health and safety ethic.
                </p>
            </div>
            <img src={jacob} alt='.' className="img2"/>
            <span className="txt2">Jacob</span>
            <img src={nick} alt='.' className="img3"/>
            <span className="txt3">Nick</span>
            <img src={taylor} alt='.' className="img4"/>
            <span className="txt4">Taylor</span>
            <img src={alex} alt='.' className="img5"/>
            <span className="txt5">Alex</span>
            <img src={img1} alt='.' className="img6"/>
            <span className="txt6">Dion Gregory</span>
            <img src={dion} alt='.' className="img7"/>
            <span className="txt7">Dion Gregory</span>
            <img src={img1} alt='.' className="img8"/>
            <span className="txt8">Dion Gregory</span>
            <img src={img1} alt='.' className="img9"/>
            <span className="txt9">Dion Gregory</span>
        </div>
    )
}

export default Staff
