import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchDiscoverMovies,
  fetchPopularMovies,
  fetchTopRatedMovies,
} from '../../apis/movieEndpoints';
import { getAllDetails } from '../../utils/helperFuntions';

export const fetchAllMovies = createAsyncThunk(
  'allMovies/fetchAll',
  async () => {
    try {
      const discoverMovies = await fetchDiscoverMovies();
      const popularMovies = await fetchPopularMovies();
      const topRatedMovies = await fetchTopRatedMovies();

      return {
        discoverMovies: await getAllDetails(discoverMovies.results),
        popularMovies: await getAllDetails(popularMovies.results),
        topRatedMovies: await getAllDetails(topRatedMovies.results),
      };
    } catch (error) {
      return error.response;
    }
  }
);

const initialState = {
  uiState: 'IDLE',
  movies: {},
  error: null,
};

const allMovieSlice = createSlice({
  name: 'allMovies',
  initialState,
  reducers: {
    resetAllMovies: (state, action) => {
      return initialState;
    },
  },
  extraReducers: {
    [fetchAllMovies.rejected]: (state, action) => {
      state.uiState = 'FAILED';
      state.error = action.payload;
    },
    [fetchAllMovies.pending]: (state, action) => {
      state.uiState = 'LOADING';
    },
    [fetchAllMovies.fulfilled]: (state, action) => {
      state.uiState = 'DONE';
      state.movies = action.payload;
    },
  },
});

export const { resetAllMovies } = allMovieSlice.actions;

export default allMovieSlice.reducer;
