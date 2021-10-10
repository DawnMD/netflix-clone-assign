import classes from './scrollwrapper.module.css';
const ScrollWrapper = ({ children }) => {
  return <div className={`flex gap-2 ${classes.scroll}`}>{children}</div>;
};
export default ScrollWrapper;
