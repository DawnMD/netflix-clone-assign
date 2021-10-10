import tmdbInstance from '../libs/tmdbInstance';
import { fetchFullMovieDetails } from '../apis/movieEndpoints';

export const getYear = (dateString) => {
  return dateString.substring(0, dateString.indexOf('-'));
};

export const runtimeConverter = (runtime) => {
  return `${Math.floor(runtime / 60)}h ${runtime % 60}m`;
};

export const filterDirector = (data) => {
  if (data) {
    return data
      .filter((director) => director.job === 'Director')
      .map((director) => director.original_name)
      .join(', ');
  } else {
    return null;
  }
};

export const filterCast = (data) => {
  if (data) {
    return data
      .filter((director) => director.known_for_department === 'Acting')
      .map((director) => director.original_name)
      .join(', ');
  } else {
    return null;
  }
};

export const getGenres = (data) => {
  if (data) {
    return data.map((genre) => genre.name).join(', ');
  } else {
    return null;
  }
};

export const fetcher = async (url) => {
  const { data } = await tmdbInstance.get(url);
  return data;
};

export const getAllDetails = async (movieArray) =>
  await Promise.all(
    movieArray.map(async (movie) => {
      return await fetchFullMovieDetails(movie.id);
    })
  );
