import React from "react";
import { v1 as uuid } from "uuid";
import './createroom.css'
import video from './../assets/video.jpg'
import github from './../assets/download.png'
import linked from './../assets/linkedin.png'

const CreateRoom = (props) => {
    function create() {
        const id = uuid();
        props.history.push(`/room/${id}`);
    }

    return (
       <div className="content">
           <h1>Video Chat</h1>
           <p>Connecting World</p>
        <button className="button" onClick={create}>Create Room</button>
        <img  src={video} height="800px"  width="1200px"/>
        <p>Developed by Deepak Kumar<a style={{marginLeft:"1rem"}} href="https://github.com/deepak1928"> <img  src={github} height="30px" width="30px" /> </a><a style={{marginLeft:"1rem"}} href="https://www.linkedin.com/in/deepak-kumar-529948156/"> <img  src={linked} height="30px" width="30px" /> </a> </p>
        </div>
    );
}

export default CreateRoom;