const SectionList = (props) => {
	return (
		<section className='flex flex-col gap-4'>
			<h2 className='text-2xl font-semibold'>{props.title}</h2>
			{props.children}
		</section>
	);
};
export default SectionList;
