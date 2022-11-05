import React, { useState } from "react";

function Clock(){
    let time = new Date().toLocaleTimeString();
    const [currentTime, setCurrentTime] = useState(time);

    const updateTime = () =>{
        let time = new Date().toLocaleTimeString();
        time = time.slice(0,4);
        setCurrentTime(time);
    }

    setInterval(updateTime,100)

    
    
    return <div>{currentTime}</div>;
}

export default Clock