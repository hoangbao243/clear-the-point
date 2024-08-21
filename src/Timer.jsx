import { useEffect, useState } from 'react';

function Timer(props){
  const [second, setSecond] = useState();
  const [miliSecond, setMiliSecond] = useState();
  //count for right milisecond
  const [count, setCount] = useState(new Date().getTime());

  useEffect(()=>{
    setTimeout(() => {
      setCount((prev) => prev + 1);
      setMiliSecond((prev) => prev + 1);
    }, 100);
    if (miliSecond > 9) {
      setMiliSecond(0)
      setSecond((prev) => prev + 1)
    }
  },[count])

  useEffect(()=>{
    setSecond(0)
    setMiliSecond(0)
  },[props.submit])

  return(
    <div id='timer'>
      <label style={{marginRight: "1rem"}}>
        Times:
      </label>
      <span id='timeCount'>{props.submit === 0 ? (0) : (second + '.' + miliSecond + 's')}</span>
      <span id='time'></span>
    </div>
    
  )
}

export default Timer;