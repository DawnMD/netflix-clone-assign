import { Link } from 'react-router-dom';
import { runtimeConverter, getYear } from '../../utils/helperFuntions';

const SimilarCard = ({ id, title, imageUrl, release, overview, runtime }) => {
  return (
    <Link to={`/movies/${id}`}>
      <div className='max-w-xs overflow-hidden rounded-md bg-netflixCard'>
        <div className='relative'>
          <img src={`https://image.tmdb.org/t/p/w500${imageUrl}`} alt={title} />
          <span className='absolute font-medium text-netflixwhite top-1 right-2 '>
            {runtimeConverter(runtime)}
          </span>
        </div>
        <div className='flex flex-col gap-2 p-4'>
          <div className='flex items-center justify-between'>
            <span>{getYear(release)}</span>
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
          <p className='line-clamp-3'>{overview}</p>
        </div>
      </div>
    </Link>
  );
};
export default SimilarCard;
