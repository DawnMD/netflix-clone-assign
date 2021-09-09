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

const movieSlice = createSlice({
	name: 'movies',
	initialState: {
		discover: [],
		topRated: [],
		popular: [],
		error: {},
	},
	extraReducers: {
		[fetchDiscoverMovies.rejected]: (state, action) => {
			state.error = action.payload;
		},
		[fetchDiscoverMovies.fulfilled]: (state, action) => {
			state.discover = action.payload;
		},
		[fetchTopRatedMovies.rejected]: (state, action) => {
			state.error = action.payload;
		},
		[fetchTopRatedMovies.fulfilled]: (state, action) => {
			state.topRated = action.payload;
		},
		[fetchPopularMovies.rejected]: (state, action) => {
			state.error = action.payload;
		},
		[fetchPopularMovies.fulfilled]: (state, action) => {
			state.popular = action.payload;
		},
	},
});

export default movieSlice.reducer;
