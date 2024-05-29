import React from 'react';
import { useState,useEffect} from 'react';

const App = () => {
  const [time,setTime] = useState(0);
  const [running,setRunning] = useState(false);

  useEffect(() => {
  let interval;
  if(running){
    interval = setInterval ( () => {
      setTime((prevTime) => prevTime + 10)
    },10)
  } else if(!running) {
    clearInterval(interval);
  }
  return () => clearInterval(interval);
  },[running]);

  return(
    <div className='app'>
        <h1>STOPWATCH</h1>
        <div>
          <p>{("0" + Math.floor((time/60000) % 60)).slice(-2)}:</p>
          <p>{("0" + Math.floor((time/1000) % 60)).slice(-2)}:</p>
          <p>{("0" + ((time/10)% 100)).slice(-2)}</p>
        </div>
        <div className="buttons">
          {
            running ?
             ( <button onClick={() => {setRunning(false)}}>Stop</button>):
             (<button onClick={() => {setRunning(true)}}>Start</button>)
          }
          <button onClick={()=> {setTime(0)}}>Reset</button>
        </div>
    </div>
   ) 
}
export default App;
 

