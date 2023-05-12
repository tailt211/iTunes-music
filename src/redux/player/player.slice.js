import { createSlice } from "@reduxjs/toolkit";
import { fetchSong } from "./player.thunk";

const initialState = {
  currentSongs: [],
  listSong: [],
  currentIndex: 0,
  isActive: false,
  isPlaying: false,
  activeSong: {},
  isFetching: false,
  error: false,
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setActiveSong: (state, action) => {
      state.activeSong = action.payload.song;
      state.currentSongs = action.payload.data;
      state.currentIndex = action.payload.i;
      state.isActive = true;
    },

    nextSong: (state, action) => {
      state.activeSong = state.currentSongs[action.payload];
      state.currentIndex = action.payload;
      state.isActive = true;
    },

    prevSong: (state, action) => {
      state.activeSong = state.currentSongs[action.payload];
      state.currentIndex = action.payload;
      state.isActive = true;
    },

    playPause: (state, action) => {
      state.isPlaying = action.payload;
    },
  },
  extraReducers: (builder) => [
    builder.addCase(fetchSong.pending, (state, { payload }) => {
      state.isFetching = true;
    }),
    builder.addCase(fetchSong.fulfilled, (state, { payload }) => {
      state.isFetching = false;
      state.isPlaying = false;
      state.listSong = payload;
    }),
    builder.addCase(fetchSong.rejected, (state, { payload }) => {
      state.error = true;
    }),
  ],
});

export const { setActiveSong, nextSong, prevSong, playPause } =
  playerSlice.actions;

export default playerSlice.reducer;
