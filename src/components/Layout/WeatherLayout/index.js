import Card from '../../Common/Card';
import SearchBar from '../../pages/weatherPage/SearchBar';
import SearchHistory from '../../pages/weatherPage/SearchHistory';
import classes from './style.module.css';
import cloud from '../../../assets/cloud.png';
import sun from '../../../assets/sun.png';
import { SearchContext } from '../../../contexts/search-context';
import { useContext, useEffect, useState } from 'react';

const WeatherLayout = () => {
    const Search = useContext(SearchContext);
    const result = Search.result;
    const [displayImg, setDisplayImg] = useState('');

    useEffect(() => {
        if (result.weather === 'Clouds') {
            setDisplayImg(cloud);
        } else {
            setDisplayImg(sun);
        }
    }, [result]);

    return (
        <div className={classes.wrapper}>
            <SearchBar />
            <Card>
                <img className={classes.image} src={displayImg} alt="sun" />
                <div className={classes.display}>
                    <span>Today's Weather</span>
                    <span className={classes.temp}>{result.temp}</span>
                    <div>
                        <span>H: {result.temp_max}</span>
                        <span>L: {result.temp_min}</span>
                    </div>
                    <div className={classes.details}>
                        <span style={{ textAlign: 'left' }}>
                            <b>{result.name}</b>
                        </span>
                        <span>{result.time}</span>
                        <span>Humunity: {result.humidity}</span>
                        <span>{result.weather}</span>
                    </div>
                </div>
                <div className="mt-5">
                    <Card>
                        <SearchHistory />
                    </Card>
                </div>
            </Card>
        </div>
    );
};

export default WeatherLayout;
