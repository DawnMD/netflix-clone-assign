import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import apiEndpoints from '../../libs/apiEndpoints';
import tmdbInstance from '../../libs/tmdbInstance';
import { runtimeConverter } from '../../libs/helperFuntions';

const SimilarCard = (props) => {
	const [runtime, setRuntime] = useState(null);
	useEffect(() => {
		tmdbInstance
			.get(apiEndpoints.movieDetails(props.id))
			.then((res) => setRuntime(res.data.runtime));
	}, [props.id]);
	return (
		<Link to={`/movies/${props.id}`}>
			<div className='max-w-xs overflow-hidden rounded-md bg-netflixCard'>
				<div className='relative'>
					<img
						src={`https://image.tmdb.org/t/p/w500${props.imageUrl}`}
						alt={props.title}
					/>
					<span className='absolute font-medium text-netflixwhite top-1 right-2 '>
						{runtimeConverter(runtime)}
					</span>
				</div>
				<div className='flex flex-col gap-2 p-4'>
					<div className='flex items-center justify-between'>
						<span>{props.release}</span>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='w-8 h-8'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
							/>
						</svg>
					</div>
					<p className='line-clamp-3'>{props.overview}</p>
				</div>
			</div>
		</Link>
	);
};
export default SimilarCard;
