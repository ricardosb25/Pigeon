import React, { useRef, useState } from "react";
import VideoFooter from "./components/footer/VideoFooter";
import VideoSideBar from "./components/sidebar/VideoSideBar";
import "./Video.css";

function Video({likes, comments, shares, name, description, song, url}) {
 
  const VideoRef = useRef(null);
  const [Play, SetPlay] = useState(false);

  function HandleStart() {
    if (Play) {
      VideoRef.current.pause();
      SetPlay(false);
    } else {
      VideoRef.current.play();
      SetPlay(true);
    }
  }

  return (
    <div className="Video">
      <video
        className="VideoPlayer"
        ref={(VideoRef)}
        onClick={HandleStart}
        loop
        src={url}
      ></video>
      <VideoSideBar
      likes={likes}
      comments={comments}
      shares={shares}
      />
      <VideoFooter
      name={name}
      description={description}
      song={song}
      />
    </div>
  );
}

export default Video;
