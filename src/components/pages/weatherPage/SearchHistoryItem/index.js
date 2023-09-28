import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from './style.module.css';
import { faMagnifyingGlass, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { SearchContext } from '../../../../contexts/search-context';

const SearchHistoryItem = ({ location, time, index, name }) => {
    const Search = useContext(SearchContext);
    return (
        <div className={classes.wrapper}>
            <span>{location}</span>
            <div className={classes.actionContainer}>
                <span>{time}</span>
                <span
                    className={classes.icon}
                    onClick={() => Search.onSearch(name)}
                >
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </span>
                <span
                    className={classes.icon}
                    onClick={() => Search.onRemove(index)}
                >
                    <FontAwesomeIcon icon={faTrash} />
                </span>
            </div>
        </div>
    );
};

export default SearchHistoryItem;
