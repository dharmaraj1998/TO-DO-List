import { configureStore } from "@reduxjs/toolkit";
import { movieReducer,addMovie,removeMovie } from "./slice/movieSlice";
import { songReducer,addSong,removeSong } from "./slice/songSlice";
import { reset } from "./action/action";

const store = configureStore({
  reducer: {
    songs: songReducer,
    movies: movieReducer,
  },
});

export { store ,reset,addMovie,addSong,removeSong,removeMovie,};

