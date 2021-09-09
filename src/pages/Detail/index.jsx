import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchSelectedMovie } from '../../redux/slice/movieSlice';

const ComponentName = (props) => {
	const selectedMovie = useSelector((state) => state.movies.selectedMovie);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchSelectedMovie(props.match.params.id));
	}, [dispatch, props.match.params.id]);
	console.log(selectedMovie);
	return (
		<div className='flex flex-col gap-8 pb-10'>
			<img
				src={`https://image.tmdb.org/t/p/original${selectedMovie.backdrop_path}`}
				className='w-full'
				alt={selectedMovie.title}
			/>
			<div className='grid grid-cols-2 gap-32 px-32'>
				<div>
					<p className='text-lg font-medium'>{selectedMovie.overview}</p>
				</div>
				<div className='flex flex-col gap-4'>
					<small>
						<span className='text-sm font-medium text-netflixsemiBlack'>
							Case:
						</span>
					</small>
					<small>
						<span className='text-sm font-medium text-netflixsemiBlack'>
							Genres:
						</span>
					</small>
					<small>
						<span className='text-sm font-medium text-netflixsemiBlack'>
							This movies is:
						</span>
					</small>
				</div>
			</div>
		</div>
	);
};
export default ComponentName;
