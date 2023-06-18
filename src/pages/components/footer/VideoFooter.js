import React from "react";
import "./VideoFooter.css";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

function VideoFooter({name,description,song}) {
  return (
    <div className="VideoFooter">
      <div className="VideoFooterText">
        <h3>@{name}</h3>
        <p>{description}</p>
        <div className="VideoFooterMusic">
          <MusicNoteIcon className="VideoFooterIcon" />
          <div className="VideoFooterMusicText">
            <p>{song}</p>
          </div>
        </div>
      </div>
      <img
        className="VideoFooterRecord"
        alt="Vinil Girando"
        src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png?t=2023-05-22T19%3A39%3A28.772Z"
      />
    </div>
  );
}

export default VideoFooter;
