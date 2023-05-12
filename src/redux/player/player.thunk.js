import { createAsyncThunk } from "@reduxjs/toolkit";
import { getSongs } from "./player.services";

export const fetchSong = createAsyncThunk("fetchSong", async (params) => {
  try {
    return (await getSongs(params)).results;
  } catch (err) {
    return console.log(err.message);
  }
});
