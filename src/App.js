import React, { useEffect, useState } from "react";
import "./App.css";
import Video from "./pages/Video";
import db from "./config/firebase";
import { collection, getDocs } from "firebase/firestore/lite";

function App() {

  let maxHeight;
  if(window.innerHeight <= 800){
    maxHeight = window.innerHeight
  }

  const [Videos, setVideos] = useState([]);

  async function getVideos() {
    const VideosCollection = collection(db, "Videos");
    const VideosDoc = await getDocs(VideosCollection);
    const VideoList = VideosDoc.docs.map((doc) => doc.data());
    setVideos(VideoList);
  }

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="App" style={{ maxHeight: maxHeight + "px" }}>
      <div className="AppVideos">
        {Videos.map((item) => {
          return (
            <Video
              likes={item.likes}
              comments={item.comments}
              shares={item.shares}
              name={item.name}
              description={item.description}
              song={item.song}
              url={item.url} />
          );
        })}
      </div>
    </div>
  );
}

export default App;
