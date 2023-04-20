import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PokemonsList } from './components/PokemonsList/PokemonsList';
import { MyPokemonsList } from './components/MyPokemonsList/MyPokemonsList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PokemonsList />} />
          <Route path='/myPokemons' element={<MyPokemonsList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
