import React from "react";

const TrackDetail = ({ isPlaying, isActive, activeSong }) => {
  return (
    <div className="flex items-center justify-start">
      <div
        className={`${
          isPlaying && isActive ? "animate-[spin_4s_linear_infinite]" : ""
        } hidden sm:block h-16 w-16 mr-4`}
      >
        <img
          src={activeSong?.artworkUrl60}
          alt="cover art"
          className="rounded-full"
        />
      </div>
      <div className="w-full lg:hidden">
        <p className="truncate text-gray-900 font-bold text-lg">
          {activeSong?.trackName ? activeSong?.trackName : "No active Song"}
        </p>
        <p className="truncate text-red-600">
          {activeSong?.artistName ? activeSong?.artistName : ""}
        </p>
      </div>
    </div>
  );
};

export default TrackDetail;
