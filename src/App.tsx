import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import GameCard from './features/common/gameCard/GameCard';
import SearchBar from './features/searchbar/SearchBar';
import GamesPage from './features/games/GamesPage';
import FiltersAside from './features/filters/FiltersAside';
import FiltersList from './features/filters/FiltersList';
import RootPage from './features/root/RootPage';
import { Route, Routes } from 'react-router-dom';
import DiscoverPage from './features/discover/DiscoverPage';

function App() {


  return (
    <div>


      {/* <FiltersAside /> */}

      <RootPage>
        <Routes>
          <Route path="/browse" element={<GamesPage />} />
          <Route path="/" element={<DiscoverPage />} />
        </Routes>
      </RootPage>
      <div>
        {/* <GamesPage /> */}
      </div>
    </div>
  )
}

export default App;
