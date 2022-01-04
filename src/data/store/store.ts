import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../../features/counter/counterSlice';
import gamesReducer from '../../features/games/gamesSlice';
import filtersReducer from '../../features/filters/filtersSlice';
import gameDetailsReducer from '../../features/gameDetails/gameDetailsSlice';
import discoverReducer from '../../features/discover/discoverSlice';
import cartReducer from './../../features/cart/cartSlice';

export const store = configureStore({
  reducer: {
    games: gamesReducer,
    counter: counterReducer,
    filters: filtersReducer,
    discover: discoverReducer,
    gameDetails: gameDetailsReducer,
    cart: cartReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
