import React, {useState, useEffect} from 'react';
import headerPokemonImg from '../../imgs/headerPokemon.png';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import {Popup} from './Popup';

export const PokemonsList = () => {
    const [activeButton, setActiveButton] = useState('');
    const [loading, setLoading] = useState(true); //Стан для завантаження 
    const [pokemons, setPokemons] = useState([]);

    const [page, setPage] = useState(1);

    const [selectedPokemon, setSelectedPokemon] = useState(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const [evolutions, setEvolutions] = useState([]);
    const [loadingEvolutions, setLoadingEvolutions] = useState(false);
    const [errorEvolutions, setErrorEvolutions] = useState(null);

    const handlePokemonSelect = pokemon => {
        setSelectedPokemon(pokemon);
        setLoadingEvolutions(true);
        setErrorEvolutions(null);

        axios.get(`http://localhost:4000/api/evolutions?type=${pokemon.type}`)
         .then(response => {
            setEvolutions(response.data);
            setLoadingEvolutions(false);
         })
         .catch(error => {
            console.error(error);
            setErrorEvolutions(error);
            setLoadingEvolutions(false);
         });
    };

    const handleButtonClick = buttonId => {
      setActiveButton(buttonId);
    };
  
    const handleNextClick = () => {
        setPage(prevPage => prevPage + 1);
    }

    const handlePrevClick = () => {
        setPage(prevPage => prevPage - 1);
    }

    const handleCardClick = (pokemon) => {
        setSelectedPokemon(pokemon);
        setIsPopupOpen(true);
    }

    const handleClosePopup = () => {
        setSelectedPokemon(null);
        setIsPopupOpen(false);
    }

    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:4000/api/pokemons?page=${page}&limit=6`)
        .then(response => {
            setPokemons(response.data);
            setLoading(false);
        })
        .catch(error => {
            console.error(error);
            setLoading(false);
        })
    }, [page]);

    return (
        <>
            <header className='pokemonHeader'>
                <img src={headerPokemonImg} alt='Pokemon Logo' />
                <div className='buttonContainer'>
                    <NavLink
                        to="/"
                        activeclassname='active'
                        className={`pokemonList ${activeButton === 'pokemonList' ? 'active' : ''}`}
                        onClick={() => handleButtonClick('pokemonList')}
                    >
                        Pokémon List
                    </NavLink>
                    <NavLink
                        to="/myPokemons"
                        activeclassname='active'
                        className={`myPokemons ${activeButton === 'myPokemons' ? 'active' : ''}`}
                        onClick={() => handleButtonClick('myPokemons')}
                    >
                        My pokémons
                    </NavLink>
                </div>
            </header>

            {loading && <div>Loading...</div>}
            {!loading && !pokemons.length && <div>No data found!</div>}

            <main className='cardPokemon'>
                {pokemons.map((pokemon) => (
                    <div key={pokemon._id} className='card' onClick={() => handleCardClick(pokemon)}>
                    {pokemon.imageUrl && <img src={pokemon.imageUrl} alt={pokemon.name} />}
                    <h2>{pokemon.name}</h2>
                    <p>
                        <strong>Type: </strong>
                        {pokemon.type}
                    </p>
                    <p>
                        <strong>Level: </strong>
                        {pokemon.level}
                    </p>
                    </div>
                ))}
                {isPopupOpen && selectedPokemon && (
                    <Popup isOpen={isPopupOpen} onClose={handleClosePopup} pokemon={selectedPokemon} 
                        evolutions = {evolutions.filter(evo => evo.level > selectedPokemon.level).sort((a, b) => a.level - b.level)}
                    />
                )}
            </main>

            <footer className='pokemonFooter'>
                <div className='buttonContainerFooter'>
                    <button
                        className={`prevButton ${page === 'prevButton' ? 'active' : ''}`}
                        onClick={handlePrevClick}
                        disabled = {page === 1}
                    >
                        Prev
                    </button>
                    <button
                        className={`nextButton ${page === 'nextButton' ? 'active' : ''}`}
                        onClick={handleNextClick}
                        disabled = {!pokemons || pokemons.length < 6}
                    >
                        Next
                    </button>
                </div>
            </footer>
        </>
    )
}