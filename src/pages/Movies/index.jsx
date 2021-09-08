import SectionList from '../../components/SectionList';
import ItemCard from '../../components/ItemCard';
import { useEffect, useState } from 'react';
import tmdbInstance from '../../libs/tmdbInstance';
import apiEndpoints from '../../libs/apiEndpoints';

const Movies = () => {
	const [discoverMovies, setDiscoverMovies] = useState([]);
	const [tendingMovies, setTrendingMovies] = useState([]);
	const [popularMovies, setPopularMovies] = useState([]);
	useEffect(() => {
		tmdbInstance
			.get(apiEndpoints.discoverMovies)
			.then((res) => setDiscoverMovies(res.data.results));
		tmdbInstance
			.get(apiEndpoints.trendingMovies)
			.then((res) => setTrendingMovies(res.data.results));
		tmdbInstance
			.get(apiEndpoints.popularMovies)
			.then((res) => setPopularMovies(res.data.results));
	}, []);

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
					{tendingMovies &&
						tendingMovies.map((movie) => (
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
