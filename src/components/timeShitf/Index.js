import React,{useState} from 'react'
import WeaklyTimes from './WeaklyTimes'
import { MDBInput } from "mdbreact";

const Index = () => {
    let weekDays=[]
    const [dateStart, setDateStart] = useState('')
    const [dateFinish, setDateFinish] = useState('')
    const week = ['osvaldo','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
    const dayStart = new Date (dateStart).getDay()
    var dayFinish;
    if (new Date (dateFinish).getDay()===0) {
         dayFinish = 7;
    }else{
         dayFinish = new Date (dateFinish).getDay()
    }

    const [weaklyDays, setWeaklyDays] = useState([])
    const [hsDay, setHsDay]=useState({ })
    const [paso, setPaso] =useState(false)

    if(dateStart&&dateFinish){
        for (let i = dayStart; i <= dayFinish; i++) {
            weekDays.push({day:week[i], hours:0})
        }
        if (!paso) {
            setWeaklyDays(weekDays)
            setPaso(true)
        }
    }
    return (
        <>
            <div className="container-week">
                <MDBInput 
                    label='Weakly Start'
                    size='sm'
                    onChange={e=>{setDateStart(e.target.value)
                                setPaso(false)}} 
                    type="date" 
                />
                <MDBInput 
                    label='Weakly Finish'
                    type="date" 
                    onChange={e=>{setDateFinish(e.target.value)
                                    setPaso(false)}}
                /> 
            </div>
            <div className="container-times">
                {dateStart&&dateFinish&&
                    <>
                        {weaklyDays.map(dayhs=>(
                            <WeaklyTimes 
                                key={dayhs.day}
                                dayhs={dayhs}
                                setHsDay={setHsDay}
                                hsDay={hsDay}
                            />
                        ))}
                    </>
                }
            </div>         
            
        </>    
    );
}

export default Index
