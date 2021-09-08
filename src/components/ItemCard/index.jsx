import { useEffect, useState } from 'react';

const ItemCard = (props) => {
	const [runtime, setRuntime] = useState(null);
	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/movie/${props.id}?api_key=ed8703f3f7f3eb8eab6620b68091e297&language=en-US`
		)
			.then((res) => res.json())
			.then((res) => setRuntime(res.runtime));
	}, [props.id]);
	return (
		<div className='flex flex-col gap-2 min-w-netflixCard'>
			<img
				src={`https://image.tmdb.org/t/p/w500${props.imageUrl}`}
				alt={props.title}
				className='rounded'
			/>
			<p className='px-1 line-clamp-2'>{props.description}</p>
			<small className='flex items-center gap-2 px-1'>
				<span className='font-semibold'>
					{`${Math.floor(runtime / 60)}h ${runtime % 60}min`}
				</span>
				<span>&#8226;</span>
				<span>{props.release}</span>
			</small>
		</div>
	);
};
export default ItemCard;
