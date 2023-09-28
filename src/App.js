import './App.css';
import lightBG from './assets/bg-light.png';
import WeatherLayout from './components/Layout/WeatherLayout';
import SearchContextProvider from './contexts/search-context';

function App() {
    const myStyle = {
        backgroundImage: `url(${lightBG})`,
        height: '100%',
        // fontSize: '50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };

    return (
        <SearchContextProvider>
            <div className="App" style={myStyle}>
                <div className="container py-5">
                    <WeatherLayout />
                </div>
            </div>
        </SearchContextProvider>
    );
}

export default App;
