import { useEffect, useState } from 'react';
import './App.css';

function Points (props){
    const point = props.data;


    const randomNumberInRange = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    const handleClick = (e) =>{
        const value = e.target.textContent;
        if (props.rightArray.length < 1) {
            if (value != 1) {
                document.getElementById("title").innerHTML = "GAME OVER";
                document.getElementById("title").style.color = "red";
                stopTime()
            }else{
                props.rightArray.push(value);
            }
        }else{
            let lastValue = props.rightArray[props.rightArray.length-1]
            console.log("value",value);
            console.log("lastValue",lastValue);
            console.log("numPoint",props.numPoint);
            
            if (+lastValue + 1 == value) {
                props.rightArray.push(value);
                if (value == props.numPoint) {
                    document.getElementById("title").innerHTML = "ALL CLEARED";
                    document.getElementById("title").style.color = "green";
                    stopTime()
                }
            }else{
                document.getElementById("title").innerHTML = "GAME OVER";
                document.getElementById("title").style.color = "red";
                stopTime()
            }
        }
        e.target.setAttribute("class", "point clicked");
        setTimeout(() => {
            e.target.style.zIndex = e.target.style.zIndex - props.numPoint;
        }, 500);
    }

    const stopTime = () =>{
        const time = document.getElementById("timeCount").textContent;
        document.getElementById("time").innerHTML = time
        document.getElementById("timeCount").style.display = "none";
        document.getElementById("time").style.display = "flex";
    }

    return(
        <div className="point" onClick={e=>handleClick(e)} style={{top: `${randomNumberInRange(0,449)}px`, right: `${randomNumberInRange(0,749)}px`, zIndex: -point}}>
            {point}
        </div>
    )
}

export default Points