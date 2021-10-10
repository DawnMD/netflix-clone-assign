const DetailsInfo = ({ title, detail }) => {
  return (
    <small className='text-sm'>
      <span className='font-medium text-netflixsemiBlack'>{title}: </span>
      {detail}
    </small>
  );
};
export default DetailsInfo;
