import React from "react";
import Highlights from "./Highlights";
import CameraSelect from "./CameraSelect";
import { useState } from "react";
import { Button } from "react-bootstrap";
import Carouset from "./Carouset";


const Welcome = () => { 
    const [vidtype, setVidtype] = useState("");
    function handleLive() {
        setVidtype("Live");
        console.log(vidtype);
    }
    function handleVod() {
        setVidtype("Vod");
        console.log(vidtype);
    }
   
return (
    <>
    
    <p>Welcome to Sky Italia 360 Immersive Basketball</p>
    <p>This is where the user's journey will start with a simple choice between Livestream and VOD options. These buttons to remain visible throughout to allow easy toggling?</p>
    <Button onClick={handleLive}>Show Me Livestream</Button>  
    <Button onClick={handleVod}>Show Me Highlights</Button> 

    {vidtype==="Live" && 
                <CameraSelect/> 
    }
    {vidtype==="Vod" && 
            <Highlights/> 
    }
    </>
)


}
export default Welcome; 