import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import Search from './components/Search';
import WeatherCard from './components/WeatherCard';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div class="container">
        <Header/>
        <Search/>
        <WeatherCard/>
        {/* <Footer/> */}
      </div>
    </div>
  )
}

export default App
