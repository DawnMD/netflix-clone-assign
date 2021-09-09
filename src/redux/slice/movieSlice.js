import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import apiEndpoints from '../../libs/apiEndpoints';
import tmdbInstance from '../../libs/tmdbInstance';

export const fetchDiscoverMovies = createAsyncThunk(
	'movies/fetchDiscoverMovies',
	async () => {
		const { data } = await tmdbInstance.get(apiEndpoints.discoverMovies);
		return data.results;
	}
);

export const fetchTopRatedMovies = createAsyncThunk(
	'movies/fetchTopRatedMovies',
	async () => {
		const { data } = await tmdbInstance.get(apiEndpoints.topRatedMovies);
		return data.results;
	}
);

export const fetchPopularMovies = createAsyncThunk(
	'movies/fetchTrendingMovies',
	async () => {
		const { data } = await tmdbInstance.get(apiEndpoints.popularMovies);
		return data.results;
	}
);

export const fetchSelectedMovie = createAsyncThunk(
	'movies/fetchSelectedMovie',
	async (id) => {
		const { data } = await tmdbInstance.get(apiEndpoints.movieDetails(id));
		return data;
	}
);

const movieSlice = createSlice({
	name: 'movies',
	initialState: {
		discover: [],
		topRated: [],
		popular: [],
		status: 'idle',
		selectedMovie: {},
		error: {},
	},
	extraReducers: {
		[fetchDiscoverMovies.rejected]: (state, action) => {
			state.error = action.payload;
			state.status = 'idle';
		},
		[fetchDiscoverMovies.pending]: (state, _) => {
			state.status = 'pending';
		},
		[fetchDiscoverMovies.fulfilled]: (state, action) => {
			state.discover = action.payload;
			state.status = 'idle';
		},
		[fetchTopRatedMovies.rejected]: (state, action) => {
			state.error = action.payload;
			state.status = 'idle';
		},
		[fetchTopRatedMovies.pending]: (state, _) => {
			state.status = 'pending';
		},
		[fetchTopRatedMovies.fulfilled]: (state, action) => {
			state.topRated = action.payload;
			state.status = 'idle';
		},
		[fetchPopularMovies.rejected]: (state, action) => {
			state.error = action.payload;
			state.status = 'idle';
		},
		[fetchPopularMovies.pending]: (state, _) => {
			state.status = 'pending';
		},
		[fetchPopularMovies.fulfilled]: (state, action) => {
			state.popular = action.payload;
			state.status = 'idle';
		},
		[fetchSelectedMovie.rejected]: (state, action) => {
			state.error = action.payload;
			state.status = 'idle';
		},
		[fetchSelectedMovie.pending]: (state, _) => {
			state.status = 'idle';
		},
		[fetchSelectedMovie.fulfilled]: (state, action) => {
			state.selectedMovie = action.payload;
			state.status = 'idle';
		},
	},
});

export default movieSlice.reducer;
