import React,{useState} from 'react'
import { MDBInput, MDBAlert} from "mdbreact";






const TimeStartFinish = ({ hsTotal,day, setStartFinishBreak,StartFinishBreak ,setAllData }) => {
    var timeTotal=0;

    const [timeStart, setTimeStart] = useState('07:00')
    const [timeFinish, setTimeFinish] = useState('17:00')
    const [breakTime, setBreakTime] = useState(0)
    const [pasoo, setPasoo] = useState(false)
    const [error, setError] = useState(false)
    


    if(timeFinish !== '' && timeStart !==''){      ////////    rehacer
        
        var inicioMinutos = parseInt(timeStart.substr(3,2));
        var inicioHoras = parseInt(timeStart.substr(0,2));
        
        var finMinutos = parseInt(timeFinish.substr(3,2));
        var finHoras = parseInt(timeFinish.substr(0,2));

        if(inicioHoras>finHoras)return(
            setError(true),
            setTimeStart(''),
            setTimeFinish(''),
            timeTotal=0,
            hsTotal(Number(timeTotal))
        )

        // solucionar tema horas
        var transcurridoMinutos = finMinutos - inicioMinutos - breakTime;
        var transcurridoHoras = finHoras - inicioHoras;
        
        if (transcurridoMinutos < 0) {
            transcurridoHoras--;
            transcurridoMinutos = 60 + transcurridoMinutos ;
        }
        
        var minutos = (transcurridoMinutos*10/6).toFixed(0);
        var horas =transcurridoHoras;
        timeTotal =Number( horas+"."+minutos);
        
        if(pasoo){
            hsTotal(Number(timeTotal))
            setPasoo(false)

            const changeTimeOrBreak = (day, timestart, timefinish, breakk) =>{
                const chTiOrBr = StartFinishBreak.find( dayself => {
                    return dayself.day === day;
                })
                console.log(chTiOrBr);
                chTiOrBr.timeStart = timestart
                chTiOrBr.timeFinish = timefinish
                chTiOrBr.break = breakk
                setStartFinishBreak([
                ...StartFinishBreak
                ])
            }
            changeTimeOrBreak(day,timeStart, timeFinish, breakTime )
        }
    }
    

    return (
        <div className='container-weakly'>
            <MDBInput 
                label='Day Start at?'
                type="time" 
                onChange={e=>{
                            setTimeStart(e.target.value)
                            setPasoo(true)
                            setError(false)
                            }}
                value={timeStart}
                className='hs-start'
            />    
            <MDBInput 
                label='Day Finish at?'
                type="time" 
                onChange={e=>{
                            setTimeFinish(e.target.value)
                            setPasoo(true)
                            setError(false)
                        }}
                value={timeFinish}
                className='hs-finish'
            /> 
            
            {error&& <MDBAlert className='error-hs' color='danger'>Just Rigth Hours</MDBAlert>}

            <select className="browser-default custom-select select-break"
                onChange={e=>{
                    setBreakTime(Number(e.target.value))
                    setPasoo(true) 
                    setError(false)   
                } }
                placeholder='break'
                value={breakTime}
            >  
                
                <option selected value='0'>Break</option>
                <option value='0'>No Break</option>
                <option value="15">15 min</option>
                <option value="30">30 min</option>
                <option value="45">45 min</option>
                <option value="60">1 hs</option>
            </select>  
            <span className='totalHs'>Total:  {timeTotal} Hs</span>

        </div>
    )
}

export default TimeStartFinish
