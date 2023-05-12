import React from "react";
import { useSelector } from "react-redux";
import { iTunesLogo, playingGif } from "../assets";

export default function SongDetail() {
  const { activeSong } = useSelector((state) => state.player);

  return (
    <div className="hidden lg:block col-span-1 p-3 mt-12">
      {activeSong.trackId && (
        <div className="flex justify-center items-center gap-2 text-cyan-500 font-bold">
          Now Playing
          <img src={playingGif} alt="playing-gif" className="inline" />
        </div>
      )}
      <div className="w-[280px] m-auto mt-10 shadow-lg">
        <img
          className="w-full rounded-md"
          src={activeSong?.artworkUrl100 || iTunesLogo}
          alt="song"
        />
      </div>
      <div className="mt-2">
        <p className="text-gray-900 text-2xl">{activeSong?.trackName}</p>
        <p className="text-xl text-red-600 font-medium mr-1">
          {activeSong?.artistName}
        </p>
      </div>
    </div>
  );
}
