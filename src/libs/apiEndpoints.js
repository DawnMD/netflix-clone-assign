const apiEndpoints = {
	discoverMovies: `/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=true&with_runtime.gte=120&include_video=false&page=1&year=Integer&with_watch_monetization_types=flatrate`,
	topRatedMovies: `/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`,
	popularMovies: `/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`,
	movieDetails: (id) =>
		`https://api.themoviedb.org/3/movie/${id}?api_key=ed8703f3f7f3eb8eab6620b68091e297&language=en-US`,
};

export default apiEndpoints;
