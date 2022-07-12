import React, { useState } from "react";
import "./Switch.css";

const Switch = () => {
    const [active, setactive] = useState(false)

    
    return (
        <div 
            className={`Switch ${active? "Switch-active" : " "}`}
            onClick = {() => {setactive(!active)}}
        >
            <div className="Switch-toggle" />
        </div>
    );
}
 
export default Switch;