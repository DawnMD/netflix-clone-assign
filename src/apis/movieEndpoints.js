import tmdbInstance from './tmdbInstance';

export const fetchDiscoverMovies = async () => {
  const { data } = await tmdbInstance.get('/discover/movie', {
    params: {
      sort_by: 'popularity.desc',
      include_adult: true,
      'with_runtime.gte': 120,
      include_video: false,
      page: 1,
      year: 'Integer',
      with_watch_monetization_types: 'flatrate',
    },
  });

  return data;
};

export const fetchPopularMovies = async () => {
  const { data } = await tmdbInstance.get('/movie/popular', {
    params: {
      page: 1,
    },
  });

  return data;
};

export const fetchTopRatedMovies = async () => {
  const { data } = await tmdbInstance.get('/movie/top_rated', {
    params: {
      page: 1,
    },
  });

  return data;
};

export const fetchFullMovieDetails = async (movieId) => {
  const { data } = await tmdbInstance.get(`/movie/${movieId}`);

  return data;
};

export const fetchSimilarMovies = async (movieId) => {
  const { data } = await tmdbInstance.get(`/movie/${movieId}/similar`);

  return data;
};

export const fetchMovieCastCrew = async (movieId) => {
  const { data } = await tmdbInstance.get(`/movie/${movieId}/credits`);

  return data;
};
