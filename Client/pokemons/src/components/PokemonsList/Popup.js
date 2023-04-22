import React, { useState } from 'react';
import '../../App.scss';
import axios from 'axios';

export const Popup = ({ isOpen, onClose, pokemon }) => {
  const [evolvedPokemon, setEvolvedPokemon] = useState([]);
  const [startPokemon, setStartPokemon] = useState(pokemon);

  const evolutionPokemon = () => {
    axios.get(`http://localhost:4000/api/pokemons`)
      .then(response => {
        const filteredPokemons = response.data.filter(p => p.type === startPokemon.type && p.level > startPokemon.level);

        if (filteredPokemons.length === 0) {
          const message = document.querySelector('.message');
          message.style.color = "red";
          message.innerHTML = `Покемон <strong>${startPokemon.name}</strong> має фінальну стадію еволюції!`;
          
          setTimeout(() => {
            message.innerHTML = '';
          }, 2000);
        
        } else {
          setStartPokemon(filteredPokemons[0]);
          setEvolvedPokemon(filteredPokemons.slice(1));
        }
      })
      .catch(error => console.error(error));
  }

  const evolvePokemonContent = () => {
    if (evolvedPokemon.length > 0) {
      return evolvedPokemon.map((p, index) => (
        <img key={index} src={p.imageUrl} alt={p.name} />
      ))
    } else {
      return (
        <img src={startPokemon.imageUrl} alt={startPokemon.name} />
      )
    }
  }

  return (
    <div className={`popup ${isOpen ? 'popup--open' : ''}`}>
      <div className='popup__content'>
        <button className='popup__close' onClick={onClose}>
          X
        </button>
        <div className='evolvePokemon'>
          {evolvePokemonContent()}
          <p className='message'></p>
        </div>
        <div className='pokemonDetails'>
          <h2>{startPokemon.name}</h2>
          <table className='popup__table'>
            <tbody>
              <tr>
                <td>Type: <span className='valuePokemonTd'>{startPokemon.type}</span></td>
              </tr>
              <tr>
                <td>Level: <span className='valuePokemonTd'>{startPokemon.level}</span></td>
              </tr>
              <tr>
                <td>Abilities: <span className='valuePokemonTd'>{startPokemon.abilities.join(', ')}</span></td>
              </tr>
            </tbody>
          </table>
          <button className='addToMyList'>Add to My list</button>
          <button className='evolutionPokemon' onClick={evolutionPokemon}>Evolution Pokemon</button>
        </div>
      </div>
    </div>
  );
};
