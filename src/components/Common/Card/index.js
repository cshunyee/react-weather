import classes from './style.module.css';
import cx from 'classnames';

const Card = ({ children }) => {
    return <div className={cx(classes.wrapper)}>{children}</div>;
};

export default Card;
