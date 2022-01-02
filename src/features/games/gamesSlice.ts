import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import GamesRequests from '../../data/api/gamesRequests';
import { RootState, AppThunk } from '../../data/store/store';

export interface GameState {
    games: [];
    loading: boolean;
}

const initialState: GameState = {
    games: [],
    loading: false,
};


export const fetchAll = createAsyncThunk(
    'games/fetchAll',
    async (params: {}) => {
        const response = await GamesRequests.getAll(params);

        console.log({ params });
        return response;
    }
);

export const gamesSlice = createSlice({
    name: 'games',
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAll.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchAll.fulfilled, (state, action) => {
                state.loading = false;
                state.games = action.payload;
            });
    },
});

// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const selectGames = (state: RootState) => state.games;


export default gamesSlice.reducer;
