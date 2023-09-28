import { useContext } from 'react';
import SearchHistoryItem from '../SearchHistoryItem';
import { SearchContext } from '../../../../contexts/search-context';
import classes from './style.module.css';

const SearchHistory = () => {
    const Search = useContext(SearchContext);

    return (
        <div className="d-flex flex-column">
            <span className="mb-3 text-start">Search History</span>
            <div className={classes.wrapper}>
                {Search.histories.map((history, i) => (
                    <div key={i}>
                        <SearchHistoryItem
                            location={history.name}
                            time={history.time}
                            index={i}
                            name={history.search}
                        />
                    </div>
                ))}
            </div>
            {Search.histories.length === 0 && <span>No historical data</span>}
        </div>
    );
};

export default SearchHistory;
