import SectionList from '../../components/SectionList';
import ItemCard from '../../components/ItemCard';
import { useSelector } from 'react-redux';
import Loader from '../../components/Loader';
import ScrollWrapper from '../../components/ScrollWrapper';

const Movies = () => {
	const discoverMovies = useSelector((state) => state.movies.discover);
	const topRatedMovies = useSelector((state) => state.movies.topRated);
	const popularMovies = useSelector((state) => state.movies.popular);
	return (
		<>
			{discoverMovies && topRatedMovies && popularMovies ? (
				<div className='flex flex-col gap-6 pb-10 pl-20'>
					<SectionList title='Discover Movies'>
						<ScrollWrapper>
							{discoverMovies &&
								discoverMovies.map((movie) => (
									<ItemCard
										id={movie.id}
										key={movie.id}
										title={movie.title}
										imageUrl={movie.backdrop_path}
										description={movie.overview}
										release={movie.release_date}
									/>
								))}
						</ScrollWrapper>
					</SectionList>
					<SectionList title='Top Rated Movies'>
						<ScrollWrapper>
							{topRatedMovies &&
								topRatedMovies.map((movie) => (
									<ItemCard
										id={movie.id}
										key={movie.id}
										title={movie.title}
										imageUrl={movie.backdrop_path}
										description={movie.overview}
										release={movie.release_date}
									/>
								))}
						</ScrollWrapper>
					</SectionList>
					<SectionList title='Popular Movies'>
						<ScrollWrapper>
							{popularMovies &&
								popularMovies.map((movie) => (
									<ItemCard
										id={movie.id}
										key={movie.id}
										title={movie.title}
										imageUrl={movie.backdrop_path}
										description={movie.overview}
										release={movie.release_date}
									/>
								))}
						</ScrollWrapper>
					</SectionList>
				</div>
			) : (
				<Loader />
			)}
		</>
	);
};
export default Movies;
