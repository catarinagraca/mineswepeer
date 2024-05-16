import React from "react";
import './rules.css';


export default function Rules(props){

    

    return(props.trigger)?(
        <div className="popup">
            <div className="popup-inner">
                <button className="closebtn" onClick={()=>props.setTrigger(false)}>x</button>
                {props.children}
            </div>
        </div>
    ):''
}