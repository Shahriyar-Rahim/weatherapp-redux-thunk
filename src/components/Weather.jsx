import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import weatherBan from '../assets/weather-banner.png'
import WeatherCard from './WeatherCard'
import { clearWeatherData, fetchWeatherData } from '../redux/features/weather/weatherSlice'

const Weather = () => {

    const { weatherData, loading, error } = useSelector((state) => state.weather)
    const dispatch = useDispatch();

    console.log(weatherData)

    const [city, setCity] = useState('');

    const handleFetchWeather = (e) => {
        e.preventDefault();
        console.log()
        if (city.trim() === '') return alert('Please enter a city name');

        // dispatch fetchWeatherData action
        dispatch(fetchWeatherData(city))
        setCity('')
    }

    return (
        <div className=' bg-blue-300 min-h-screen px-6 py-20 container max-w-screen mx-auto'>
            <div >
                <h1 className=' text-3xl md:text-5xl font-bold text-center mb-3'>Weather Dashboard</h1>

                <div className='w-full flex justify-center'>
                    <p className=' bg-red-600 text-white inline-block px-2 text-center mb-6'>Fetchs weather data from different cities uding redux toolkit and redux thunk</p>
                </div>

                <div className='w-full flex justify-center'>
                    <img src={weatherBan} alt="weather ban" />
                </div>

                {/* search weather  */}

                <form
                    onSubmit={handleFetchWeather}
                    className=' my-6 flex flex-wrap gap-2 md:gap-4'>
                    <input
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        type="text" placeholder='Enter city name with correct spelling!!' className='flex-auto p-2 border rounded bg-white text-black placeholder:text-center ' />
                    <button type='submit' className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700'>Search Weather</button>

                    <button
                    // now handle clear button
                    onClick={() => dispatch(clearWeatherData())}

                    type='button' 
                    className=' px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600'>Clear</button>
                </form>

                <div className='w-full flex justify-start items-center mb-6'>
                    {/* weather cards and loadind/error */}

                    {
                        loading && <p className=' text-center text-blue-500'>Loading...</p>
                    }
                    {
                        error && <p className=' text-center text-red-500'>{error.message}</p>
                    }

                    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4'>
                        {
                            weatherData.map((data, index) => (
                                <WeatherCard
                                    key={index}
                                    city={data.name}
                                    temp={data.main.temp}
                                    humidity={data.main.humidity}
                                    pressure={data.main.pressure}
                                    wind={data.wind.speed}
                                    description={data.weather[0].description}
                                    icon={data.weather[0].icon}
                                    date={new Date(data.dt * 1000).toLocaleDateString()}
                                    time={new Date(data.dt * 1000).toLocaleTimeString()}
                                    timezone={data.timezone}
                                    country={data.sys.country}
                                    lat={data.coord.lat}
                                    lon={data.coord.lon}
                                    timezoneOffset={data.timezone}
                                />
                            ))
                        }
                    </div>
                </div>







            </div>
        </div>
    )
}

export default Weather