import { useEffect, useState, useCallback } from 'react';
import './App.css';
import Points from './Point'
import Timer from './Timer';

function App() {
  const [pointsArray,setPointsArray] = useState([]);
  const [startCountTime, setStartCountTime] = useState(0);
  const [message, setMessage] = useState(`LET'S PLAY`)
  //max quantity of point, pass to <Point></Point> for change zindex
  const [numPoint, setNumPoint] = useState(0)
  const rightArray = [];

  const handleSubmit = (e) =>{
    e.preventDefault();
    const numOfPoints = e.target[0].value;
    setNumPoint(numOfPoints);
    if (numOfPoints === '' || numOfPoints%1 !== 0) {
      setMessage("Input the points which are interger and bigger than 0");
      setStartCountTime(0);
      setPointsArray([]);
    }else{
      //count time
      document.getElementById("timeCount").style.display = "flex";
      document.getElementById("time").style.display = "none";
      setStartCountTime((prev)=>prev+1);
      //create array with n points (n get from input)
      setPointsArray(Array(+numOfPoints).fill(0).map((e,i)=>i+1));
      //reset title
      document.getElementById("title").innerHTML = "LET'S PLAY";
      document.getElementById("title").style.color = "black"
      //get all elements have clicked
      const clickedElements = document.getElementsByClassName("clicked");
      //reset clicked elements
      Array.from(clickedElements).forEach(element => {
        element.style.zIndex = -element.textContent
        element.classList.remove("clicked");
        element.classList.add("point");
    });
    }
  }
  const handlePlay = (childData) =>{
    setMessage(childData);
  }

  useEffect(()=>{

  },[rightArray])
  return (
    <div className="App">
      <h1 id="title">{message}</h1>
      <form className='form' onSubmit={handleSubmit}>
        <label>
          Points:
          <input style={{marginLeft: '1rem'}} type="text" name="points"></input>
        </label>
        <Timer submit={startCountTime}></Timer>
        <input style={{width: '6rem'}} type="submit" value={startCountTime === 0 ? "Play" : "Restart"}/>
      </form>
      <div className='display'>
        {
          pointsArray && pointsArray.map(item=><Points key={item} rightArray={rightArray} data={item} numPoint={numPoint}></Points>)
        }
      </div>
    </div>
  );
}

export default App;
