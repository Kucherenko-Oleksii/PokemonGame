import React from 'react';
import '../../App.scss';

export const Popup = ({ isOpen, onClose, pokemon }) => {

  const evolvedPokemon = pokemon.evolutions.filter(evo => evo.type === pokemon.type).sort((a,b) => a.level - b.level);

  return (
    <div className={`popup ${isOpen ? 'popup--open' : ''}`}>
      <div className='popup__content'>
        <button className='popup__close' onClick={onClose}>
          X
        </button>
        <div className='evolvePokemon'>
          {evolvedPokemon.map(evo => {
            return <img key={evo.id} src={evo.image} alt={evo.name}/>
          })}
        </div>
        <div className='pokemonDetails'>
          <h2>{pokemon.name}</h2>
          <table className='popup'>
            <tbody>
              <tr>
                <td>Type:</td>
                <td>{pokemon.type}</td>
              </tr>
              <tr>
                <td>Level:</td>
                <td>{pokemon.level}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};