import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import tmdbInstance from '../../libs/tmdbInstance';
import apiEndpoints from '../../libs/apiEndpoints';
import { runtimeConverter, getYear } from '../../libs/helperFuntions';

const ItemCard = (props) => {
	const [runtime, setRuntime] = useState(null);
	useEffect(() => {
		tmdbInstance
			.get(apiEndpoints.movieDetails(props.id))
			.then((res) => setRuntime(res.data.runtime));
	}, [props.id]);
	return (
		<Link to={`/movies/${props.id}`}>
			<div className='flex flex-col gap-2 min-w-netflixCard '>
				<img
					src={`https://image.tmdb.org/t/p/w500${props.imageUrl}`}
					alt={props.title}
					className='transition duration-500 transform rounded hover:scale-105'
				/>
				<p className='px-1 line-clamp-2'>{props.description}</p>
				<small className='flex items-center gap-2 px-1'>
					<span className='font-semibold'>
						{runtime && runtimeConverter(runtime)}
					</span>
					<span>&#8226;</span>
					<span>{getYear(props.release)}</span>
				</small>
			</div>
		</Link>
	);
};
export default ItemCard;
