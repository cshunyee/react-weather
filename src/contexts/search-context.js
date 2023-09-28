import dayjs from 'dayjs';
import { createContext, useState } from 'react';

const initData = {
    histories: [],
    updateHistories: () => {},
    onSearch: () => {},
    result: {},
};

export const SearchContext = createContext(initData);

const SearchContextProvider = ({ children }) => {
    const [searchResult, setSearchResult] = useState({});
    const [searchHistories, setSearchHistories] = useState([]);

    const onSearch = async (city) => {
        const query = city;
        const apiKey = '237f5a934d5679788b62bde5f9c62f7d';
        const unit = 'metric';
        const url =
            'https://api.openweathermap.org/data/2.5/weather?q=' +
            query +
            '&APPID=' +
            apiKey +
            '&units=' +
            unit;
        const response = await fetch(url);
        const resJson = await response.json();

        setSearchResult({
            temp: resJson.main.temp,
            temp_max: resJson.main.temp_max,
            temp_min: resJson.main.temp_min,
            name: `${resJson.name}, ${resJson.sys.country}`,
            time: dayjs().format('DD-MM-YYYY HH:mm a'),
            humidity: `${resJson.main.humidity} %`,
            weather: resJson.weather[0].main,
        });
        setSearchHistories((prev) => [
            ...prev,
            {
                name: `${resJson.name}, ${resJson.sys.country}`,
                time: dayjs().format('DD-MM-YYYY HH:mm a'),
                search: resJson.name,
            },
        ]);
    };

    const onHistoryRemove = (i) => {
        setSearchHistories((prev) => {
            let histories = [...prev];
            histories.splice(i, 1);
            return histories;
        });
    };

    console.log('refresh');

    const value = {
        histories: searchHistories,
        onSearch: onSearch,
        onRemove: onHistoryRemove,
        result: searchResult,
    };

    return (
        <SearchContext.Provider value={value}>
            {children}
        </SearchContext.Provider>
    );
};

export default SearchContextProvider;
