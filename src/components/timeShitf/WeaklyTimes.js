import React, { useState } from "react";
import { MDBBtn, MDBCollapse } from "mdbreact";
import JobsHs from "./JobsHs";
import TimeStartFinish from "./TimeStartFinish";



const WeaklyTimes = ({dayhs, setHsDay, hsDay}) => {
    const {day, hours} =dayhs;
    console.log(dayhs);
    
    const dayAndHoras ={
        Monday:0,
        Tuesday:0,
        Wednesday:0,
        Thursday:0,
        Friday:0,
        Saturday:0,
        Sunday:0
    }

    const[collapseID, setCollapseID] = useState('')
    const[hsAll, setHsAll] = useState('')

    const toggleCollapse = collapseiD => {
        setCollapseID( collapseIDD =>(
            collapseIDD !== collapseiD ? collapseiD : "" 
        ))
      }   

      const hsTotal = hs =>{
       setHsAll(hs)
       //console.log(
       // Object.keys(hsDay),'key',
       // Object.values(hsDay),'value'
       //);
       //dayAndHoras.day=hs;
       //console.log(dayAndHoras);
       //
       //const diaHaSumar = Object.keys(hsDay).find(element => element === day);
       //console.log(diaHaSumar);
       //setHsDay({
       //    ...hsDay,
       //    day:hs
       //})
     }
     
     return (
        <>
            <MDBBtn
                color="primary"
                onClick={()=>toggleCollapse("basicCollapse")}
                style={{ marginBottom: 1+"rem" }}
            >
                
            </MDBBtn>
            <MDBCollapse 
                id="basicCollapse" 
                isOpen={collapseID}
                
            >
                <TimeStartFinish
                        hsTotal={hsTotal} 
                    />
    
                <div className="jobhscontainer">
                    <JobsHs />
                </div>  
                <MDBBtn
                    block
                    onClick={()=>toggleCollapse("basicCollapse")}
                    color="default"
                    style={{ marginBottom: 1+"rem", marginTop: 11+"px"  }}
            >Done {day}</MDBBtn>
            </MDBCollapse>
        </>
      );
}

export default WeaklyTimes  
    
    