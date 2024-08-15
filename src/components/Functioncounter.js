import { useState } from "react";
import "./Counter.css"
function Functioncounter(){
    const[counter,setCounter]=useState(0);
 return(
    <div className="Container">
  <button onClick={()=>{
  console.log(counter);
  setCounter(counter+1)}}>+</button>
  <p>{counter}</p>
  <button onClick={()=>{
  console.log(counter);
    setCounter(counter-1)}}>-</button>
    </div>
 )
}

export default Functioncounter;