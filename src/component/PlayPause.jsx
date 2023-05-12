import React from "react";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";

const PlayPause = ({ isPlaying, activeSong, song, handlePause, handlePlay }) =>
  isPlaying && activeSong?.trackId === song.trackId ? (
    <FaPauseCircle
      size={35}
      className="text-gray-300 hover:text-red-500"
      onClick={handlePause}
    />
  ) : (
    <FaPlayCircle
      size={35}
      className="text-gray-300 hover:text-red-500"
      onClick={handlePlay}
    />
  );

export default PlayPause;
