import { fetchFullMovieDetails } from '../apis/movieEndpoints';

export const getYear = (dateString) => {
  return dateString.substring(0, dateString.indexOf('-'));
};

export const runtimeConverter = (runtime) => {
  return `${Math.floor(runtime / 60)}h ${runtime % 60}m`;
};

export const filterDirector = (data) => {
  return data
    .filter((director) => director.job === 'Director')
    .map((director) => director.original_name)
    .join(', ');
};

export const filterCast = (data) => {
  return data
    .filter((director) => director.known_for_department === 'Acting')
    .map((director) => director.original_name)
    .join(', ');
};

export const getGenres = (data) => {
  return data.map((genre) => genre.name).join(', ');
};

export const getAllDetails = async (movieArray) =>
  await Promise.all(
    movieArray.map(async (movie) => {
      return await fetchFullMovieDetails(movie.id);
    })
  );
