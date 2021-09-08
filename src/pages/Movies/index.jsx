import SectionList from '../../components/SectionList';
import ItemCard from '../../components/ItemCard';
import { useEffect, useState } from 'react';
const Movies = () => {
	const [discoverMovies, setDiscoverMovies] = useState([]);
	const [tendingMovies, setTrendingMovies] = useState([]);
	const [popularMovies, setPopularMovies] = useState([]);
	useEffect(() => {
		fetch(
			'https://api.themoviedb.org/3/discover/movie?api_key=ed8703f3f7f3eb8eab6620b68091e297&language=en-US&sort_by=popularity.desc&include_adult=true&with_runtime.gte=120&include_video=false&page=1&year=Integer&with_watch_monetization_types=flatrate'
		)
			.then((res) => res.json())
			.then((res) => setDiscoverMovies(res.results));
	}, []);
	useEffect(() => {
		fetch(
			'https://api.themoviedb.org/3/movie/top_rated?api_key=ed8703f3f7f3eb8eab6620b68091e297&language=en-US&page=1'
		)
			.then((res) => res.json())
			.then((res) => setTrendingMovies(res.results));
	}, []);
	useEffect(() => {
		fetch(
			'https://api.themoviedb.org/3/movie/popular?api_key=ed8703f3f7f3eb8eab6620b68091e297&language=en-US&page=1'
		)
			.then((res) => res.json())
			.then((res) => setPopularMovies(res.results));
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
