import React from 'react'
import './WeatherCard.css'
import WeatherCloudy from '../assets/images/weather-cloudy.png'
import Rain from '../assets/images/rain.png'
import Humidity from '../assets/images/humidity.png'

function WeatherCard() {
  return (
    <div className='weather-section'>
        <div className='weather-card'>
            <div className='weather-temp-c'>
                29<sup>o</sup>
            </div>
            <div className='weather-info'>
                <span>
                  <img src={Humidity} alt="" />
                    68%
                </span>
                <span>
                    <img src={Rain} alt="" />
                     25
                </span>
            </div>
            <div className="weather-place">
               Tirupati, Andhra Pradesh, India
            </div>
            <div className="weather-avatar">
                <img src={WeatherCloudy} alt="" />
            </div>
        </div>
        
    </div>
  )
}

export default WeatherCard