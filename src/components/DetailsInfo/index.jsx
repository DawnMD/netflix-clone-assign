const DetailsInfo = (props) => {
	return (
		<small className='text-sm'>
			<span className='font-medium text-netflixsemiBlack'>
				{`${props.title}: `}
			</span>
			{`${props.detail}`}
		</small>
	);
};
export default DetailsInfo;
