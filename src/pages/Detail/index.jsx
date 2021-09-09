import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
	fetcher,
	filterCast,
	filterDirector,
	getGenres,
	getYear,
	runtimeConverter,
} from '../../libs/helperFuntions';
import tmdbInstance from '../../libs/tmdbInstance';
import Loader from '../../components/Loader';
import useSWR from 'swr';
import apiEndpoints from '../../libs/apiEndpoints';
import SimilarCard from '../../components/SimilarCard';

const ComponentName = (props) => {
	const { data, error } = useSWR(
		apiEndpoints.movieDetails(props.match.params.id),
		fetcher
	);
	const [crews, setCrews] = useState([]);
	const [similar, setSimilar] = useState([]);
	const dispatch = useDispatch();
	useEffect(() => {
		tmdbInstance
			.get(apiEndpoints.crewsAndCasts(props.match.params.id))
			.then((res) => setCrews(res.data));
		tmdbInstance
			.get(apiEndpoints.similarMovies(props.match.params.id))
			.then((res) => setSimilar(res.data.results));
	}, [dispatch, props.match.params.id]);

	//TODOimplement error handling

	if (!data && !error) {
		return <Loader />;
	}
	return (
		<div className='flex flex-col gap-8 pb-10'>
			<div className='relative'>
				<img
					src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
					alt={data.title}
					className='w-full'
				/>
				<h1 className='absolute font-bold break-words text-7xl bottom-96 left-32 text-netflixwhite'>
					{data.title}
				</h1>
			</div>
			<div className='flex flex-col gap-4 px-32'>
				<div className='grid grid-cols-2 gap-32 '>
					<div className='flex flex-col gap-4'>
						<div className='flex items-center gap-8 '>
							<span>{getYear(data.release_date)}</span>
							<span>{runtimeConverter(data.runtime)}</span>
						</div>
						<p className='text-lg font-medium'>{data.overview}</p>
					</div>
					<div className='flex flex-col gap-4'>
						<small>
							<span className='text-sm font-medium text-netflixsemiBlack'>
								Cast:
							</span>{' '}
							<span className='text-sm'>{filterCast(crews.cast)}</span>
						</small>
						<small>
							<span className='text-sm font-medium text-netflixsemiBlack'>
								Genres:
							</span>{' '}
							<span className='text-sm'>{getGenres(data.genres)}</span>
						</small>
					</div>
				</div>
				<div className='flex flex-col gap-4'>
					<h3 className='text-2xl font-bold'>More Like This</h3>
					<div className='grid content-center grid-cols-5 gap-8 justify-items-center'>
						{similar
							.filter((backdropCheck) => backdropCheck.backdrop_path !== null)
							.filter((_, idx) => idx < 15)
							.map((similarMovieData) => (
								<SimilarCard
									id={similarMovieData.id}
									key={similarMovieData.id}
									overview={similarMovieData.overview}
									imageUrl={similarMovieData.backdrop_path}
									release={getYear(similarMovieData.release_date)}
								/>
							))}
					</div>
				</div>
				<hr />
				<div className='flex flex-col gap-6 '>
					<h3 className='text-2xl'>
						About <strong>{data.title}</strong>
					</h3>
					<div className='flex flex-col w-1/2 gap-4'>
						<small>
							<span className='text-sm font-medium text-netflixsemiBlack'>
								Director:
							</span>{' '}
							<span className='text-sm'>{filterDirector(crews.crew)}</span>
						</small>
						<small>
							<span className='text-sm font-medium text-netflixsemiBlack'>
								Cast:
							</span>{' '}
							<span className='text-sm'>{filterCast(crews.cast)}</span>
						</small>
						<small>
							<span className='text-sm font-medium text-netflixsemiBlack'>
								Genres:
							</span>{' '}
							<span className='text-sm'>{getGenres(data.genres)}</span>
						</small>
					</div>
				</div>
			</div>
		</div>
	);
};
export default ComponentName;
