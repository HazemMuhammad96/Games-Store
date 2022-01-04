import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import CartRequests from '../../data/api/cartRequests';
import GamesRequests from '../../data/api/gamesRequests';
import { RootState, AppThunk } from '../../data/store/store';

export interface DetailsState {
    game: {};
    loading: boolean;
}

const initialState: DetailsState = {
    game: {},
    loading: false,
};


export const fetch = createAsyncThunk(
    'gameDetails/fetchAll',
    async (params: {}) => {

        let res = await GamesRequests.get(params);

        const detailsKeys = ["stock", "publisher", "rating"];


        res.details = detailsKeys.reduce((acc, key) => {
            
            acc[key] = res[key];
            delete res[key];
            return acc;
        }, {});

        res.details["release Date"] = res.releaseDate.split('T')[0];

        return res;
    }
);

export const add = createAsyncThunk(
    'gameDetails/add',
    async (params: {}) => {

        let res = await CartRequests.add(params);

        const detailsKeys = ["stock", "publisher", "rating"];


        res.details = detailsKeys.reduce((acc, key) => {

            acc[key] = res[key];
            delete res[key];
            return acc;
        }, {});

        res.details["release Date"] = res.releaseDate.split('T')[0];

        return res;
    }
)


export const detailsSlice = createSlice({
    name: 'gameDetails',
    initialState,
    reducers: {
        clear: (state) => {
            state.game = {};
            state.loading = true;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetch.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetch.fulfilled, (state, action) => {
                state.loading = false;
                console.log(action.payload);
                state.game = action.payload;
            });
    },
});

export const { clear } = detailsSlice.actions;

export const selectDetails = (state: RootState) => state.gameDetails;


export default detailsSlice.reducer;
