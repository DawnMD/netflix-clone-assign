import classes from './scrollwrapper.module.css';
const ScrollWrapper = (props) => {
	return <div className={`flex gap-2 ${classes.scroll}`}>{props.children}</div>;
};
export default ScrollWrapper;
