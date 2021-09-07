import BrandLogo from '../../assets/Images/Netflix_Logo_RGB.png';
import Avatar1 from '../../assets/Images/avatar1.png';
const Header = () => {
	return (
		<nav className='w-full px-16 h-16 flex items-center justify-between'>
			<div className='flex items-center gap-12'>
				<img src={BrandLogo} alt='Brand Logo' className='h-12' />
				<div className='flex gap-6'>
					<span className='cursor-pointer'>Home</span>
					<span className='cursor-pointer'>TV Shows</span>
					<span className='cursor-pointer font-semibold text-white'>
						Movies
					</span>
					<span className='cursor-pointer'>News & Popular</span>
					<span className='cursor-pointer'>My List</span>
					<span className='cursor-pointer'>Watch Again</span>
				</div>
			</div>
			<div className='flex gap-6 items-center'>
				<span className='cursor-pointer'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-7 w-7'
						viewBox='0 0 20 20'
						fill='currentColor'>
						<path
							fillRule='evenodd'
							d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
							clipRule='evenodd'
						/>
					</svg>
				</span>
				<span className='cursor-pointer'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-7 w-7'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7'
						/>
					</svg>
				</span>
				<span className='cursor-pointer relative'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-7 w-7'
						viewBox='0 0 20 20'
						fill='currentColor'>
						<path d='M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z' />
					</svg>
					<small className='bg-netflixDarkRed rounded-2xl px-1 absolute top-0 right-0 text-xs'>
						9
					</small>
				</span>
				<span className='cursor-pointer flex items-center gap-1'>
					<img src={Avatar1} alt='avatar' className='h-7 w-7 rounded' />
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-5 w-5'
						viewBox='0 0 20 20'
						fill='currentColor'>
						<path
							fillRule='evenodd'
							d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
							clipRule='evenodd'
						/>
					</svg>
				</span>
				<span className='cursor-pointer flex items-center gap-1'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-6 w-6'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M4 6h16M4 12h8m-8 6h16'
						/>
					</svg>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-5 w-5'
						viewBox='0 0 20 20'
						fill='currentColor'>
						<path
							fillRule='evenodd'
							d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
							clipRule='evenodd'
						/>
					</svg>
				</span>
			</div>
		</nav>
	);
};
export default Header;
