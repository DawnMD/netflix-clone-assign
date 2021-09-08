import SectionList from '../../components/SectionList';
import ItemCard from '../../components/ItemCard';
import { useSelector } from 'react-redux';

const Movies = () => {
	const discoverMovies = useSelector((state) => state.movies.discover);
	const topRatedMovies = useSelector((state) => state.movies.topRated);
	const popularMovies = useSelector((state) => state.movies.popular);
	return (
		<div className='flex flex-col gap-6 px-20 pb-10'>
			<SectionList title='Discover Movies'>
				<div className='flex gap-2 overflow-hidden flex-nowrap'>
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
				</div>
			</SectionList>
			<SectionList title='Top Rated Movies'>
				<div className='flex gap-2 overflow-hidden flex-nowrap'>
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
				</div>
			</SectionList>
			<SectionList title='Popular Movies'>
				<div className='flex gap-2 overflow-hidden flex-nowrap'>
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
				</div>
			</SectionList>
		</div>
	);
};
export default Movies;
