import React from 'react';

export default function Video (props) {
    console.log("video firing");
    console.log(props.src);
    return(
        <>
        <video width="300" controls><source src={props.src} type="video/mp4"></source></video>
        </>
    )
}