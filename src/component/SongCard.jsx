import React from "react";
import { useDispatch } from "react-redux";
import { playPause, setActiveSong } from "../redux/player/player.slice";
import PlayPause from "./PlayPause";

const SongCard = ({ song, isPlaying, activeSong, data, i }) => {
  const dispatch = useDispatch();

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    <div className="flex flex-col w-[250px] p-4 animate-slideup rounded-lg cursor-pointer text-left">
      <div className="relative w-full h-56 group shadow-md">
        <div
          className={`absolute inset-0 justify-center bg-opacity-50 items-center group-hover:flex ${
            activeSong?.trackId === song.trackId
              ? "flex bg-black bg-opacity-70"
              : "hidden"
          }`}
        >
          <PlayPause
            isPlaying={isPlaying}
            activeSong={activeSong}
            song={song}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
          />
        </div>
        <img
          alt="song_img"
          src={song.artworkUrl100}
          className="w-full h-full rounded-lg"
        />
      </div>

      <div className="mt-2 flex flex-col">
        <p className="font-semibold text-lg truncate">
          <span>{song.trackCensoredName}</span>
        </p>
        <p className="text-sm truncate text-gray-500 mt-1">
          <span>{song.artistName}</span>
        </p>
        {song.trackPrice && (
          <p className="text-sm truncate text-red-500 mt-0">
            <span>{song.trackPrice}$</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default SongCard;
