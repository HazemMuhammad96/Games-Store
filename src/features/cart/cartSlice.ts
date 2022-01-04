import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import CartRequests from '../../data/api/cartRequests';
import GamesRequests from '../../data/api/gamesRequests';
import { RootState, AppThunk } from '../../data/store/store';

export interface CartState {
    cart: [];
    loading: boolean;
}

const initialState: CartState = {
    cart: [],
    loading: false,
};


export const fetchAll = createAsyncThunk(
    'cart/fetchAll',
    async (params: {}) => {
        const response = await CartRequests.getAll();

        console.log({ response });
        return response;
    }
);

export const clearCart = createAsyncThunk(

    'cart/clearCart',
    async () => {

        const response = await CartRequests.clear();

        console.log({ response });
        return response;
    }
);

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clear: (state) => { 
            state.cart = [];
            state.loading = true;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAll.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchAll.fulfilled, (state, action) => {
                state.loading = false;
                state.cart = action.payload;
            });
    },
});


export const { clear } = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart;


export default cartSlice.reducer;
