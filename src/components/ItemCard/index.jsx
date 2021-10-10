import { Link } from 'react-router-dom';
import { runtimeConverter, getYear } from '../../utils/helperFuntions';

const ItemCard = ({ id, imageUrl, title, description, release, runtime }) => {
  return (
    <Link to={`/movies/${id}`}>
      <div className='flex flex-col gap-2 min-w-netflixCard '>
        <img
          src={`https://image.tmdb.org/t/p/w500${imageUrl}`}
          alt={title}
          className='transition duration-500 transform rounded hover:scale-105'
        />
        <p className='px-1 line-clamp-2'>{description}</p>
        <small className='flex items-center gap-2 px-1'>
          <span className='font-semibold'>{runtimeConverter(runtime)}</span>
          <span>&#8226;</span>
          <span>{getYear(release)}</span>
        </small>
      </div>
    </Link>
  );
};
export default ItemCard;
