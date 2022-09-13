import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import CharacterCard from './components/CharacterCard'
import axios from 'axios';

function App() {
  const [location, setLocation] = useState({});
  const [typeId, setTypeId] = useState("");


  useEffect(() => {
    const randomId = Math.floor(Math.random()*126);
    axios.get(`https://rickandmortyapi.com/api/location/${randomId}`)
    .then((res) => setLocation(res.data));
  }, []);

  const searchType = () => {
    axios.get(`https://rickandmortyapi.com/api/location/${typeId}`)
    .then(res => setLocation(res.data));
  }


  return (
    <div className="App">
    <div className="img-container">
      <img  className="wallpaper" src="./src/assets/wallpaper.png" />
    </div>
      <div className="universe-info">

        <div className="universe-data">
          <p className="info-title">Name</p>
          <p className="data-universe">{location.name}</p>
        </div>
        <div className="universe-data">
          <p className="info-title">Type</p>
          <p className="data-universe">{location.type}</p>
        </div>
        <div className="universe-data">
          <p className="info-title">Dimension</p>
          <p className="data-universe">{location.dimension}</p>
        </div>
        <div className="universe-data">
          <p className="info-title">Residents</p>
          <p className="data-universe">{location.residents?.length}</p>
        </div>


      </div>

      <div className="input-section">
        <input placeholder="Num universe"
        type="text"
        value = {typeId}
        onChange = {e => setTypeId(e.target.value)}
        />
        <button onClick={searchType}>Search</button>
    </div>

    <div className="button-search">
    </div>

    <div className="gallery">
    {location.residents?.map(residents => (
      <CharacterCard
      url={residents}
      key={residents}

       />
    ))}
    </div>
    </div>
  )
}

export default App
