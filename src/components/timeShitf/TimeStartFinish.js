import React,{useState} from 'react'
import { MDBInput, MDBSelect} from "mdbreact";






const TimeStartFinish = ({ hsTotal }) => {
    var timeTotal=0;

    const [timeStart, setTimeStart] = useState('07:00')
    const [timeFinish, setTimeFinish] = useState('17:00')
    const [breakTime, setBreakTime] = useState(0)
    const [pasoo, setPasoo] = useState(false)


if(timeFinish != '' && timeStart !=''){      ////////    rehacer

  var inicioMinutos = parseInt(timeStart.substr(3,2));
  var inicioHoras = parseInt(timeStart.substr(0,2));
  
  var finMinutos = parseInt(timeFinish.substr(3,2));
  var finHoras = parseInt(timeFinish.substr(0,2));

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
  
  var totaltotal = totaltotal+timeTotal
  
  
  if(pasoo){
    hsTotal(Number(timeTotal))
    setPasoo(false)
    
  }
}

    return (
        <div className='container-weakly'>
            <MDBInput 
                label='Day Start at?'
                type="time" 
                value={timeStart}
                onChange={e=>{
                            setTimeStart(e.target.value)
                            setPasoo(true)
                            }
                            }
                className='hs-start'
            />    
            <MDBInput 
                label='Day Finish at?'
                type="time" 
                value={timeFinish}
                onChange={e=>{
                            setTimeFinish(e.target.value)
                            setPasoo(true)
                        }
                        }
                className='hs-finish'
            /> 
            
            <select className="browser-default custom-select select-break"
                onChange={e=>{
                    setBreakTime(Number(e.target.value))
                    setPasoo(true)    
                } }
                placeholder='break'
                value={breakTime}
            >   
                <option Value='0'>No Break</option>
                <option value="15">15 min</option>
                <option value="30">30 min</option>
                <option value="45">45 min</option>
                <option value="60">1 hs</option>
            </select>  
            <span>Total Hs {
                timeTotal
            }</span>

        </div>
    )
}

export default TimeStartFinish
