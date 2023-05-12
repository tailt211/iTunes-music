import React from "react";
import { useDispatch } from "react-redux";
import { fetchSong } from "../redux/player/player.thunk";

const SearchCmp = ({queryfilter, setQueryFilter}) => {
  const dispatch = useDispatch();

  const handleSearch = () => {
    console.log(queryfilter);
    dispatch(
      fetchSong({
        ...queryfilter,
        term: queryfilter.term,
        explicit: queryfilter.explicit,
        trackPrice: queryfilter.limit,
      })
    );
  };

  return (
    <div className="flex flex-col w-full items-center gap-4 p-4 md:my-2 md:flex-row">
      <div className="flex flex-col w-full mr-0 md:w-[80%] md:mr-12">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 mr-4 border-2 rounded-md focus:outline-none focus:border-red-500"
          onChange={(e) =>
            setQueryFilter({ ...queryfilter, term: e.target.value })
          }
        />
        <div className="flex flex-col-reverse w-full mt-2 items-center gap-2 md:flex-row md:gap-8">
          <div className="flex items-center w-full">
            <label>Track Explicitness: </label>
            <input
              type="radio"
              name="rdtrackExplicitness"
              className="w-5 h-5 ml-2 mr-1"
              value="Yes"
              checked={queryfilter.explicit === "Yes" && "checked"}
              onChange={(e) =>
                setQueryFilter({
                  ...queryfilter,
                  explicit: e.target.value,
                })
              }
            />
            Yes
            <input
              type="radio"
              name="rdtrackExplicitness"
              value="No"
              className="w-5 h-5 ml-2 mr-1"
              checked={queryfilter.explicit === "No" && "checked"}
              onChange={(e) =>
                setQueryFilter({
                  ...queryfilter,
                  explicit: e.target.value,
                })
              }
            />
            No
          </div>

          <div className="w-full flex items-center">
            <label>From: </label>
            <input
              type="number"
              min={0}
              onChange={(e) =>
                setQueryFilter({ ...queryfilter, minPrice: e.target.value })
              }
              className="p-2 m-1 w-[20%] border-2 rounded-md focus:outline-none focus:border-red-500"
            />
            $<label className="ml-4">To: </label>
            <input
              type="number"
              min={0}
              onChange={(e) =>
                setQueryFilter({ ...queryfilter, maxPrice: e.target.value })
              }
              className="p-2 m-1 w-[20%] border-2 rounded-md focus:outline-none focus:border-red-500"
            />
            $
          </div>
        </div>
      </div>
      <button
        type="submit"
        onClick={handleSearch}
        className="bg-red-500 rounded-md px-6 py-2 text-white font-medium"
      >
        search
      </button>
    </div>
  );
};

export default SearchCmp;
