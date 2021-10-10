import { configureStore } from '@reduxjs/toolkit';
import allMovieSlice from '../slice/allMovieSlice';
import movieDetailsSlice from '../slice/movieDetailsSlice';

const createStore = () =>
  configureStore({
    reducer: {
      allMovies: allMovieSlice,
      movieDetails: movieDetailsSlice,
    },
  });

export default createStore;
