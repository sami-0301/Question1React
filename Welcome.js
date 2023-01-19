import React, {useState} from "react";
import './Welcome.css'

function Welcome() {
const[status,setStatus]=useState(null);
const [print,setPrint]=useState(false);
function getData(val)
{
    setStatus(val.target.value)
    setPrint(false)
    console.warn(val.target.value)
}
    return ( 
        <div className="Asg">
            {
                print?<h1>HI! {status} <br></br> Welcome to LPU College</h1>:null
            }

       <h2>Enter your name : 
        <input type="text" onChange={getData}/>
       <button onClick={()=>setPrint(true)} >submit</button></h2>
       
                <h4 >Assignment done by samiskha : 12013281</h4>

        </div>
    ); 
}
export default Welcome