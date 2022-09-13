import { useState, useEffect } from 'react'
import axios from 'axios';
import './css/CharacterCard.css'

const CharacterCard = ({ url }) => {

  const [character, setCharacter] = useState({});


  useEffect(() =>{
    axios.get(url).then((res) => setCharacter(res.data));
  }, []);

  console.log(character);

  return (
      <div className="character-card">
        <div className="character-img">
          <img className="img-img" src={character.image}/>
        </div>

        <div className="character-info">
          <div className="character-name">
            {character.name}
          </div>

          <div className="data">
            <div className="race">
            <span className="data-title">
              Race
            </span>
            <br/>
            <span className="data-text">
              {character.species}
            </span>
            </div>
            <div className="origin">
              <span className="data-title">
              Origin
              </span>
              <br/>
              <span className="data-text">
              {character.origin?.name}
              </span>
            </div>
            <div className="episodes">
            <span className="data-title">
            Aparitions
            </span>
              <br/>
              <span className="data-text">
              {character.episode?.length}
              </span>
            </div>
          </div>
        </div>
</div>
  )
}
export default CharacterCard
