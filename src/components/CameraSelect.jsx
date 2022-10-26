import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import {cameraProps} from "./CameraProps.js";
import Video from "./Video.jsx";

const CameraSelect = () => { 
const [stream, setStream] = useState("");
return(
    <>
    <h3>Live 360 Immersive Basketball</h3>
    <h5>Click on a camera to select your view</h5>
    {stream &&
        <Video src={stream}/>
    }
    <div className="parent" style={{backgroundImage:"url(/court.png)"}}> 
    
{
cameraProps.map( (data, key)=> {
    function handleClick() {
        setStream(data.src);
        console.log(stream);
    }
    return (
  <Button className={data.style} onClick={handleClick}><img width="50px" src="camera.png" alt="360 camera"/> {data.title} <img className="buttonimg" src={data.poster} alt="your view"/></Button>  
)
}
)    
}    
    </div>
    </>
);

}
export default CameraSelect; 