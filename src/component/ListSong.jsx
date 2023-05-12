import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSong } from "../redux/player/player.thunk";
import SongCard from "./SongCard";
import Loader from "./Loader";
import Error from "./Error";
import SearchCmp from "./SearchCmp";

const defaultQueryFilter = {
  term: "eminem",
  explicit: "",
  minPrice: null,
  maxPrice: null,
};

export default function ListSong() {
  const dispatch = useDispatch();
  const { isFetching, error, activeSong, isPlaying, listSong } = useSelector(
    (state) => state.player
  );

  const [queryfilter, setQueryFilter] = useState({
    term: "eminem",
    explicit: "",
    minPrice: null,
    maxPrice: null,
  });

  useEffect(() => {
    dispatch(fetchSong(defaultQueryFilter));
  }, [dispatch]);

  return (
    <div className="col-span-3 lg:col-span-2 overflow-auto pb-24">
      <SearchCmp queryfilter={queryfilter} setQueryFilter={setQueryFilter} />
      <div className="flex flex-wrap lg:justify-start justify-center gap-6 item">
        {isFetching && <Loader title="Loading songs..." />}
        {error && <Error />}
        {!isFetching &&
          listSong?.map((song, i) => (
            <SongCard
              key={song.trackId}
              song={song}
              isPlaying={isPlaying}
              activeSong={activeSong}
              data={listSong}
              i={i}
            />
          ))}
        {!isFetching && listSong?.length === 0 && (
          <div className="w-full mt-12 text-3xl font-bold">
            Don't have any results! Please try again.
          </div>
        )}
      </div>
    </div>
  );
}
