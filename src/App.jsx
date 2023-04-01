import React, { useState } from 'react'
import './App.css'
import Header from './components/Header';
import Search from './components/Search';
import WeatherCard from './components/WeatherCard';

function App() {
  const [weatherDetails , setWeatherDetails] = React.useState(null)

  return (
    <div className="App">
      <div class="container">
        <Header/>
        <Search setWeatherDetails={setWeatherDetails}/>
       {
        weatherDetails !== null ? <WeatherCard weatherDetails={weatherDetails}/> : null
       }
        {/* <Footer/> */}
      </div>
    </div>
  )
}

export default App
