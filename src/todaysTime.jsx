import React, {useState} from 'react';
import Watch from './watch';
function TodatTime()
{
    
  const [today,setToday]= useState(Date.now());
  function f()
  {
      setToday(Date.now())
  }
  setInterval(f,1000);
    return(
        <Watch milliseconds={today}/>
    );
}
export default TodatTime;