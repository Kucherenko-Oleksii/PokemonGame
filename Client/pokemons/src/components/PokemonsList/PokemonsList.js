import React, {useState, useEffect} from 'react';
import headerPokemonImg from '../../imgs/headerPokemon.png';
import { NavLink } from 'react-router-dom';
// import { MongoClient } from 'mongodb';

export const PokemonsList = () => {
    const [activeButton, setActiveButton] = useState('');
    const [activeButton2, setActiveButton2] = useState('');

    const [loading, setLoading] = useState(true); //Стан для завантаження 
    const [pokemons, setPokemons] = useState([]);

    const handleButtonClick = buttonId => {
        setActiveButton(buttonId);
    }

    const handleButtonClick2 = buttonId => {
        setActiveButton2(buttonId);
    }

    // useEffect(() => {
    //     const uri = "mongodb+srv://kucherenkoolexiy:Alex_21@pokemondb.ukhz5ei.mongodb.net/test";
    //     const client = new MongoClient(uri);
    
    //     const fetchData = async () => {
    //         setLoading(true); // Встановлюю стан loading на початку
    //         try {
    //             await client.connect();
    //             const database = client.db('pokemondb');
    //             const collection = database.collection('pokemons');
    //             const result = await collection.find().toArray();
    //             setPokemons(result);
    //         } catch (error) {
    //             console.log(error);
    //         } finally {
    //             setLoading(false); // Оновлюю стан loading
    //             await client.close();
    //         }
    //     };
    
    //     fetchData();
    // }, []);

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

            {/* {loading && <div>Loading...</div>} {/*повідомлення завантаження*/}
            {/* {!loading && !pokemons.length && <div>No data found!</div>} повідомлення про відсутність даних */}

            <main className='cardPokemon'>
                {/* {pokemons.map(pokemon => (
                    <div key={pokemon._id}>{pokemon.name}</div>
                ))} */}
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>            
            </main>

            <footer className='pokemonFooter'>
                <div className='buttonContainerFooter'>
                    <button
                        className={`prevButton ${activeButton2 === 'prevButton' ? 'active' : ''}`}
                        onClick={() => handleButtonClick2('prevButton')}
                    >
                        Prev
                    </button>
                    <button
                        className={`nextButton ${activeButton2 === 'nextButton' ? 'active' : ''}`}
                        onClick={() => handleButtonClick2('nextButton')}
                    >
                        Next
                    </button>
                </div>
            </footer>
        </>
    )
}
