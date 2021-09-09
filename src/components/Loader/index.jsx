const Loader = () => {
	return (
		<div className='flex items-center justify-center h-screen'>
			<img
				src='https://assets.nflxext.com/en_us/pages/wiplayer/site-spinner.png'
				alt='loading'
				className='w-12 h-12 animate-spin'
			/>
		</div>
	);
};
export default Loader;
