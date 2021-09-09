const apiEndpoints = {
	discoverMovies: `/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&sort_by=popularity.desc&include_adult=true&with_runtime.gte=120&include_video=false&page=1&year=Integer&with_watch_monetization_types=flatrate`,
	topRatedMovies: `/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_API_KEY}&page=1`,
	popularMovies: `/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&page=1`,
	movieDetails: (id) =>
		`/movie/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`,
	crewsAndCasts: (id) =>
		`/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_API_KEY}`,
	similarMovies: (id) =>
		`/movie/${id}/similar?api_key=${process.env.REACT_APP_TMDB_API_KEY}`,
};

export default apiEndpoints;
