import React,{useState} from 'react'
import WeaklyTimes from './WeaklyTimes'
import { MDBInput, MDBAlert } from "mdbreact";
import  ExportExcel  from './ExportExcel';

const Index = () => {
    const [allData, setAllData] = useState([])
    let weekDays=[];
    const [error, setError] = useState(false)
    const [dateStart, setDateStart] = useState('')
    const [dateFinish, setDateFinish] = useState('')
    const week = ['','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
    const month = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    const [paso, setPaso] =useState(false)
    const [totalHours, setTotalHours] = useState(0)

    const [AllJobHs, setAllJobHs] = useState([])

    const [StartFinishBreak, setStartFinishBreak] = useState([
        {
            day :'Monday',
            timeStart:'-',
            timeFinish:'-',
            break:'-'
        },
        {
            day :'Tuesday',
            timeStart:'-',
            timeFinish:'-',
            break:'-'
        } ,
        {
            day :'Wednesday',
            timeStart:'-',
            timeFinish:'-',
            break:'-'
        },  
        {
            day :'Thursday',
            timeStart:'-',
            timeFinish:'-',
            break:'-'
        } , 
        {
            day :'Friday',
            timeStart:'-',
            timeFinish:'-',
            break:'-'
        }  ,
        {
            day :'Saturday',
            timeStart:'-',
            timeFinish:'-',
            break:'-'
        },  
        {
            day :'Sunday',
            timeStart:'-',
            timeFinish:'-',
            break:'-'
        }  
    ])


    var dayStart;
    if (new Date (dateStart).getDay()===0) {
        dayStart = 7;
    }else{
        dayStart = new Date (dateStart).getDay()
    }
    
    var dayFinish;
    if (new Date (dateFinish).getDay()===0) {
         dayFinish = 7;
    }else{
         dayFinish = new Date (dateFinish).getDay()
    }

    if(dateStart&&dateFinish){
        var date_1 = new Date(dateStart);
        var date_2 = new Date(dateFinish);
        var day_as_milliseconds = 86400000;
        var diff_in_millisenconds = date_2 - date_1;
        var diff_in_days = diff_in_millisenconds / day_as_milliseconds;

        if(dayStart > dayFinish || diff_in_days >= 7 || diff_in_days < 0)
            return (
                setError(true),
                setDateStart(''),
                setDateFinish('')
            )
        var dateDay = date_1.getDate()
        var dateMonth = date_1.getMonth()
        for (let i = dayStart; i <= dayFinish; i++) {
            weekDays.push({day:week[i], hours:0, date:`${dateDay}-${month[dateMonth]}`})
            dateDay++;
            date_1.setDate(dateDay);
            console.log(date_1);
            if(date_1.getMonth!==dateMonth){
                dateDay=date_1.getDate()
                dateMonth=date_1.getMonth()
            }
        }
        if (!paso) {
            setPaso(true)
            setAllData(weekDays)
        }
    }
    const changeHoursDay  = (day, hs) =>{
        const daySelf = allData.find( dayself => {
            return dayself.day === day;
        });
        daySelf.hours = hs;
        setAllData([
            ...allData
        ])
        setTotalHours(0)
        allData.forEach(element => {
            setTotalHours(totalHs=>(
                totalHs+element.hours
            ))
        });
    }
    

    return (
        <>
            <div className="container-week">
                <MDBInput 
                    label='Weakly Start'
                    size='sm'
                    onChange={e=>{setDateStart(e.target.value)
                                setPaso(false)
                                setError(false)
                                setTotalHours(0)}} 
                    type="date" 
                    value={dateStart}
                />
                <MDBInput 
                    label='Weakly Finish'
                    type="date" 
                    value={dateFinish}
                    onChange={e=>{setDateFinish(e.target.value)
                                    setPaso(false)
                                    setError(false)
                                    setTotalHours(0)}}
                /> 
            </div>
            {error&& <MDBAlert className='error' color='danger'>Just Rigth Week</MDBAlert>}
            <div className="container-times">
                {dateStart&&dateFinish&&
                    <>
                        {allData.map(dayhs=>(
                            <WeaklyTimes 
                                key={dayhs.day}
                                setStartFinishBreak={setStartFinishBreak}
                                StartFinishBreak={StartFinishBreak}
                                dayhs={dayhs}
                                changeHoursDay={changeHoursDay}
                                setAllData={setAllData}
                                setAllJobHs={setAllJobHs}
                                AllJobHs={AllJobHs}
                            />
                        ))}
                    </>
                }
                {dateStart&&dateFinish&&
                <MDBAlert
                    className='hs-W-Ending' 
                    color='success'
                > Hours Week Ending: <span>{totalHours} Hs</span> 
                </MDBAlert>
                }
                
            </div>         
            
            {//<Mail /> <Mail2/>
            }
            <ExportExcel
                allData={allData}
                AllJobHs={AllJobHs}
                StartFinishBreak={StartFinishBreak}
            />
        </>    
    );
}

export default Index
