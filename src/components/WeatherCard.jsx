import React from 'react'
import { WiCloud, WiDaySunny, WiRain, WiSnow } from 'react-icons/wi';

const WeatherCard = ({city, temp, humidity, pressure, wind, description, icon, date, time, country}) => {
    const tem = Math.round(temp - 273.15); // Convert Kelvin to Celsius

    const getWeIcon = (description) => {
        // switch (description) {
        //     case 'clear sky':
        //         return <i className="fas fa-sun text-yellow-500"></i>;
        //     case 'few clouds':
        //         return <i className="fas fa-cloud-sun text-gray-400"></i>;
        //     case 'scattered clouds':
        //         return <i className="fas fa-cloud text-gray-500"></i>;
        //     case 'broken clouds':
        //         return <i className="fas fa-cloud-meatball text-gray-600"></i>;
        //     case 'shower rain':
        //         return <i className="fas fa-cloud-showers-heavy text-blue-500"></i>;
        //     case 'rain':
        //         return <i className="fas fa-cloud-rain text-blue-600"></i>;
        //     case 'thunderstorm':
        //         return <i className="fas fa-bolt text-yellow-700"></i>;
        //     case 'snow':
        //         return <i className="fas fa-snowflake text-white"></i>;
        //     case 'mist':
        //         return <i className="fas fa-smog text-gray-300"></i>;
        //     default:
        //         return <i className="fas fa-question-circle text-gray-500"></i>;
        if(description.includes("sun")) {
            return <WiDaySunny className='text-yellow-500 text-5xl' />
        } else if(description.includes("rain")) {
            return <WiRain className='text-blue-500 text-5xl' />
        } else if (description.includes("cloud")) {
            return <WiCloud className='text-gray-500 text-5xl' />
        } else if (description.includes("snow")) {
            return <WiSnow className='text-white/40 text-5xl' />
        } else {
            return <WiDaySunny className='text-yellow-500 text-5xl' />
        }
    }
    

  return (
    <div className='p-4 bg-white shadow rounded-lg flex items-center'>

        <div className=' mr-5'>{getWeIcon(description)}</div>

        <div className='border-l-2 pl-5'>

            <h2 className=' text-xl font-bold'>{city} <span className='text-xs'>{country}</span></h2>
            
            <p className=' text-gray-600 capitalize'>{description}</p>

            <p className=' text-center text-gray-500 italic'>H~{humidity}</p>
            
            <p className=' text-2xl font-semibold'>{tem}°C {wind}
                <span className='italic text-xs'> km/s</span>
            </p>

            <p>{time}--{date}</p>

        </div>
    </div>
  )
}

export default WeatherCard