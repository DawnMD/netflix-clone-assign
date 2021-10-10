import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchFullMovieDetails,
  fetchSimilarMovies,
  fetchMovieCastCrew,
} from '../../apis/movieEndpoints';
import { getAllDetails } from '../../utils/helperFuntions';

export const fetchFullMovie = createAsyncThunk(
  'movieDetails/fetch',
  async (movieId) => {
    try {
      const movie = await fetchFullMovieDetails(movieId);
      const castAndCrew = await fetchMovieCastCrew(movieId);
      const similarMovies = await fetchSimilarMovies(movieId);

      return {
        ...movie,
        ...castAndCrew,
        similar: await getAllDetails(similarMovies.results),
      };
    } catch (error) {
      return error.response;
    }
  }
);

const initialState = {
  uiState: 'IDLE',
  movie: {},
  error: null,
};

const movieDetailsSlice = createSlice({
  name: 'movieDetails',
  initialState,
  reducers: {
    resetMovie: (state, action) => {
      return initialState;
    },
  },
  extraReducers: {
    [fetchFullMovie.rejected]: (state, action) => {
      state.uiState = 'FAILED';
      state.error = action.payload;
    },
    [fetchFullMovie.pending]: (state, action) => {
      state.uiState = 'LOADING';
    },
    [fetchFullMovie.fulfilled]: (state, action) => {
      state.uiState = 'DONE';
      state.movie = action.payload;
    },
  },
});

export const { resetMovie } = movieDetailsSlice.actions;

export default movieDetailsSlice.reducer;
