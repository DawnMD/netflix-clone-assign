import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchFullMovieDetails,
  fetchSimilarMovies,
  fetchMovieCastCrew,
} from '../../apis/movieEndpoints';

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
        similar: similarMovies.results,
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
});

export default movieDetailsSlice.reducer;
