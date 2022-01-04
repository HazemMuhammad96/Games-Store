import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import GamesRequests from '../../data/api/gamesRequests';
import GenresRequests from '../../data/api/genresRequests';
import { RootState, AppThunk } from '../../data/store/store';

export interface GenreState {
    data: {}
    loading: boolean;
}

const initialState: GenreState = {
    data: {},
    loading: true,
};


export const fetchAll = createAsyncThunk(
    'discover/fetchAll',
    async () => {
        let response = await GamesRequests.getFeatured();
        
        
        const final = {}
        final['featured'] = response.featured.map(it => {
            return {
                image: it.cover,
                name: it.name,
                price: it.price,
                _id: it._id,
            }
        });
        delete response.featured;
        final['groups'] = response;
        
        console.log(final);
        return final;
    }
);

export const genresSlice = createSlice({
    name: 'discover',
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
                state.data = action.payload;
                console.log(state.data);
            });
    },
});

// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const selectDiscover = (state: RootState) => state.discover;


export default genresSlice.reducer;
