import React, { useState } from "react";
import { MDBBtn, MDBCollapse } from "mdbreact";
import JobsHs from "./JobsHs";
import TimeStartFinish from "./TimeStartFinish";



const WeaklyTimes = ({dayhs,setAllJobHs,AllJobHs, changeHoursDay, setStartFinishBreak, StartFinishBreak, setAllData}) => {
    const {day, hours} =dayhs;

    const[collapseID, setCollapseID] = useState('')

    const toggleCollapse = collapseiD => {
        setCollapseID( collapseIDD =>(
            collapseIDD !== collapseiD ? collapseiD : "" 
        ))
      }   

    const hsTotal = hs =>{
        changeHoursDay(day, hs)
    }
     
     return (
        <>
            <MDBBtn
                color="primary"
                onClick={()=>toggleCollapse("basicCollapse")}
                style={{ marginBottom: 1+"rem" }}
            >   <div className="container-day-hs">
                    {day}
                    <p>
                        {hours} Hs
                    </p>
                </div>
            </MDBBtn>
            <MDBCollapse 
                id="basicCollapse" 
                isOpen={collapseID}
            >
                <TimeStartFinish
                    setAllData={setAllData}
                    hsTotal={hsTotal} 
                    day={day}
                    setStartFinishBreak={setStartFinishBreak}
                    StartFinishBreak={StartFinishBreak}
                />
                <div className="jobhscontainer">
                    <JobsHs
                        day={day}
                        setAllJobHs={setAllJobHs}
                        AllJobHs={AllJobHs}
                    />
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
    
    