import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import GamesRequests from '../../data/api/gamesRequests';
import GenresRequests from '../../data/api/genresRequests';
import { RootState, AppThunk } from '../../data/store/store';

export interface GenreState {
    filters: {};
    loading: boolean;
}

const initialState: GenreState = {
    filters: {},
    loading: true,
};


export const fetchAll = createAsyncThunk(
    'filters/fetchAll',
    async () => {
        const response = await GenresRequests.getAll();
        
        
        
        return {
            genres: response,
        };
    }
);

export const genresSlice = createSlice({
    name: 'filters',
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
                state.filters = action.payload;
            });
    },
});

// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const selectFilters = (state: RootState) => state.filters;


export default genresSlice.reducer;
