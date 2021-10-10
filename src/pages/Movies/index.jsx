import SectionList from '../../components/SectionList';
import ItemCard from '../../components/ItemCard';
import { useSelector } from 'react-redux';
import Loader from '../../components/Loader';
import ScrollWrapper from '../../components/ScrollWrapper';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  fetchAllMovies,
  resetAllMovies,
} from '../../redux/slice/allMovieSlice';

const Movies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllMovies());

    return () => dispatch(resetAllMovies());
  }, [dispatch]);

  const { uiState, movies, error } = useSelector((state) => state.allMovies);

  return (
    <>
      {uiState === 'FAILED' && (
        <div>{error.message || 'Something went wrong'}</div>
      )}
      {uiState === 'LOADING' && <Loader />}
      {uiState === 'DONE' &&
        (!movies.discoverMovies.length &&
        !movies.popularMovies.length &&
        !movies.topRatedMovies.length ? (
          <Loader />
        ) : (
          <div className='flex flex-col gap-6 pb-10 pl-20'>
            <SectionList title='Discover Movies'>
              <ScrollWrapper>
                {movies.discoverMovies.map((movie) => (
                  <ItemCard
                    id={movie.id}
                    key={movie.id}
                    title={movie.title}
                    imageUrl={movie.backdrop_path}
                    description={movie.overview}
                    release={movie.release_date}
                    runtime={movie.runtime}
                  />
                ))}
              </ScrollWrapper>
            </SectionList>
            <SectionList title='Top Rated Movies'>
              <ScrollWrapper>
                {movies.topRatedMovies.map((movie) => (
                  <ItemCard
                    id={movie.id}
                    key={movie.id}
                    title={movie.title}
                    imageUrl={movie.backdrop_path}
                    description={movie.overview}
                    release={movie.release_date}
                    runtime={movie.runtime}
                  />
                ))}
              </ScrollWrapper>
            </SectionList>
            <SectionList title='Popular Movies'>
              <ScrollWrapper>
                {movies.popularMovies.map((movie) => (
                  <ItemCard
                    id={movie.id}
                    key={movie.id}
                    title={movie.title}
                    imageUrl={movie.backdrop_path}
                    description={movie.overview}
                    release={movie.release_date}
                    runtime={movie.runtime}
                  />
                ))}
              </ScrollWrapper>
            </SectionList>
          </div>
        ))}
    </>
  );
};
export default Movies;
