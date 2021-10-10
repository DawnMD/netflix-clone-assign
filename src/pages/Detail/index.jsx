import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  filterCast,
  filterDirector,
  getGenres,
  getYear,
  runtimeConverter,
} from '../../utils/helperFuntions';
import Loader from '../../components/Loader';
import SimilarCard from '../../components/SimilarCard';
import DetailsInfo from '../../components/DetailsInfo';
import {
  fetchFullMovie,
  resetMovie,
} from '../../redux/slice/movieDetailsSlice';

import { useSelector } from 'react-redux';

const ComponentName = ({ match }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFullMovie(match.params.id));

    return () => dispatch(resetMovie());
  }, [dispatch, match.params.id]);

  const { uiState, movie, error } = useSelector((state) => state.movieDetails);

  return (
    <>
      {uiState === 'FAILED' && (
        <div>{error.message || 'Something went wrong'}</div>
      )}
      {uiState === 'LOADING' && <Loader />}
      {uiState === 'DONE' && (
        <div className='flex flex-col gap-8 pb-10'>
          <div className='relative'>
            <img
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt={movie.title}
              className='w-full'
            />
            <h1 className='absolute font-bold break-words text-7xl bottom-96 left-32 text-netflixwhite'>
              {movie.title}
            </h1>
          </div>
          <div className='flex flex-col gap-4 px-32'>
            <div className='grid grid-cols-2 gap-32 '>
              <div className='flex flex-col gap-4'>
                <div className='flex items-center gap-8 '>
                  <span>{getYear(movie.release_date)}</span>
                  <span>{runtimeConverter(movie.runtime)}</span>
                </div>
                <p className='text-lg font-medium'>{movie.overview}</p>
              </div>
              <div className='flex flex-col gap-4'>
                <DetailsInfo title='Cast' detail={filterCast(movie.cast)} />
                <DetailsInfo title='Genres' detail={getGenres(movie.genres)} />
              </div>
            </div>
            <div className='flex flex-col gap-4'>
              <h3 className='text-2xl font-bold'>More Like This</h3>
              <div className='grid content-center grid-cols-5 gap-8 justify-items-center'>
                {movie.similar
                  .filter((_, idx) => idx < 15)
                  .filter(
                    (backdropCheck) => backdropCheck.backdrop_path !== null
                  )
                  .map((similarMovieData) => (
                    <SimilarCard
                      id={similarMovieData.id}
                      key={similarMovieData.id}
                      overview={similarMovieData.overview}
                      imageUrl={similarMovieData.backdrop_path}
                      release={similarMovieData.release_date}
                      runtime={similarMovieData.runtime}
                    />
                  ))}
              </div>
            </div>
            <hr />
            <div className='flex flex-col gap-6 '>
              <h3 className='text-2xl'>
                About <strong>{movie.title}</strong>
              </h3>
              <div className='flex flex-col w-1/2 gap-4'>
                <DetailsInfo
                  title='Director'
                  detail={filterDirector(movie.crew)}
                />
                <DetailsInfo title='Cast' detail={filterCast(movie.cast)} />
                <DetailsInfo title='Genres' detail={getGenres(movie.genres)} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default ComponentName;
