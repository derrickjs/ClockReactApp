import React from 'react';
import { useEffect , useState } from 'react';



const TimeOfDay = () => {

  const [time , setTime] =  useState(new Date);
  const [date, setDate] = useState(new Date());
  const ampm = useState( time.getHours() > 11.99 ? "pm" : "am");

  const addO = (x) => {
    if(x < 10){
      return "0";
    }
    else {
      return "";
    };
  }
  


  

  useEffect(
    () => {
      const i = setInterval(() => {
        setTime(new Date);
      }, 1000);
      return() => clearInterval(i);
    }
  );

  useEffect(
    () => {
      const d = setInterval(() => {
        setDate(new Date);
      }, 1000);
      return() => clearInterval(d);
    }
  );
  
 

  return (
    <div className='tyme'>
      <h1>Todays time is: {time.getHours()> 12 ? time.getHours() - 12 : time.getHours()}:{addO(time.getMinutes())}{time.getMinutes()}:{addO(time.getSeconds())}{time.getSeconds()} {ampm} </h1>
      <h1> Today is: {date.toLocaleDateString()}</h1>

     
    </div>
  );
};

export default TimeOfDay;





