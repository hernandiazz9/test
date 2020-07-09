import React from 'react'
import { MDBBtn, MDBListGroup, MDBListGroupItem,MDBIcon, MDBContainer, MDBBadge} from "mdbreact";

const JobHs = ({job, deleteJob}) => {
    const{nameJob, hsJob, id} = job;

    return (
        <>
            
            <MDBListGroupItem 
                    className="d-flex justify-content-between align-items-center"
            >{nameJob} <MDBBadge color="primary" pill>{hsJob} hs</MDBBadge>
                
                <button
                    className='button-delete'
                    onClick={() => deleteJob (id) }
                ><MDBIcon icon="times" /></button>
            
            </MDBListGroupItem>
            
            
        </>
        
        
          
        
    )
}

export default JobHs
