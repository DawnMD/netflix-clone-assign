const SectionList = ({ title, children }) => {
  return (
    <section className='flex flex-col gap-4'>
      <h2 className='text-2xl font-semibold'>{title}</h2>
      {children}
    </section>
  );
};
export default SectionList;
