import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItems: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const itemInCart = state.cartItems.find((item) => item._id === action.payload._id);
            if (itemInCart) {
                itemInCart.qty++;
            } else {
                state.cartItems.push({ ...action.payload, qty: 1 });
            }
        },
        removeCart: (state, action) => {
            state.cartItems = state.cartItems.filter(item => item._id !== action.payload._id)
        },

        inCreament: (state, action) => {
            const item = state.cartItems.find((item) => item._id === action.payload._id);
            if (item) {
                item.qty += 1;
            }
        },
        deCreament: (state, action) => {
            const item = state.cartItems.find((item) => item._id === action.payload._id);
            if (item && item.qty > 1) {
                item.qty -= 1;
            } else if (item) {
                state.cartItems = state.cartItems.filter((item) => item._id !== action.payload._id);
            }
        },
        clearCart: (state) => {
            state.cartItems = []
        }
    },
})
export const { addToCart, removeCart, inCreament, deCreament, clearCart } = cartSlice.actions

export default cartSlice.reducer