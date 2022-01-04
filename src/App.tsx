import GamesPage from './features/games/GamesPage';
import RootPage from './features/root/RootPage';
import { Route, Routes } from 'react-router-dom';
import DiscoverPage from './features/discover/DiscoverPage';
import GameDetails from './features/gameDetails/GameDetails';
import Cart from './features/cart/Cart';
import Login from './features/login/Login';
import Register from './features/registration/Register';

function App() {


  return (
    <div>


      {/* <FiltersAside /> */}

      <RootPage>
        <Routes>
          <Route path="/" element={<DiscoverPage />} />
          <Route path="/browse" element={<GamesPage />} />
          <Route path="/browse/:id" element={<GameDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </RootPage>
      <div>
        {/* <GamesPage /> */}
      </div>
    </div>
  )
}

export default App;
