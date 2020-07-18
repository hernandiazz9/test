import React,{useState} from 'react'
import { MDBBtn , MDBInput,MDBListGroup,  MDBContainer} from "mdbreact";
import JobHs from './JobHs';

const shortid = require('shortid');

const JobsHs = ({day, setAllJobHs, AllJobHs}) => {
    const [jobs, setJobs] = useState([])
    const [job, setJob] = useState({
        nameJob:'',
        hsJob:'',
        day:''
    })
    const {nameJob, hsJob}= job;

    const onChangeJob = e =>{
        setJob({
            ...job,
        [e.target.name]:e.target.value
        })
    }
    const clickJob = e =>{
        e.preventDefault()
        if(nameJob.trim()===''||hsJob.trim()==='') return;
        job.id = shortid.generate();
        job.day =day;
        setJobs([...jobs, job])
        setJob({
            nameJob:'',
            hsJob:''
        })
        setAllJobHs([...AllJobHs, job ])


    }
    //eliminar jobs
	const deleteJob = id =>{
		const newJobs = jobs.filter(job => job.id !== id)
		setJobs(newJobs); 
        const newjobs = AllJobHs.filter(job => job.id !== id)
        setAllJobHs(newjobs)
	}
    return (
        <>
            <MDBInput
                type="textarea"
                label="Describe your Duties"
                rows="3"
                icon="pencil-alt"
                className='text-jobb'
                name='nameJob'
                value={nameJob}
                onChange={onChangeJob}
            />
            <div className="container-hs-butt">
                <div className='hs-jobb'>
                    <MDBInput 
                        label='Hs'
                        value={hsJob}
                        name='hsJob'
                        type="number" 
                        onChange={onChangeJob}
                    /> 
                </div>
                <div  className='hs-button'>
                    <MDBBtn
                        className='button-button-hs'
                        onClick={clickJob}
                        color="primary"
                    >add</MDBBtn>
                </div>
            </div>
            <MDBContainer>
                <MDBListGroup style={{ width: "22rem" }}>
                    {jobs.map(job=>(
                        <JobHs 
                            key={job.id}
                            job={job}
                            deleteJob={deleteJob}
                        />
                    ))}
                </MDBListGroup>    
            </MDBContainer>
        </>
    )
}

export default JobsHs
