import React, { useRef, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import TextInput from '../../../Common/TextInput';
import classes from './style.module.css';
import { SearchContext } from '../../../../contexts/search-context';

const SearchBar = () => {
    const inputRef = useRef();
    const Search = useContext(SearchContext);

    const handleOnSearch = () => {
        if (inputRef.current.value.trim() === '') {
            return;
        }
        Search.onSearch(inputRef.current.value);
    };

    const handleOnEnter = (e) => {
        if (e.keyCode === 13) {
            handleOnSearch();
        }
    };

    return (
        <div className="d-flex justify-content-between align-items-center">
            <TextInput
                label="Country"
                ref={inputRef}
                onKeyDown={handleOnEnter}
            />
            <div
                className={`ms-3 d-flex align-items-center ${classes['btn-search']}`}
                onClick={handleOnSearch}
            >
                <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" />
            </div>
        </div>
    );
};

export default SearchBar;
