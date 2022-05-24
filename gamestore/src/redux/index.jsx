import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cart/reducer';
import gamesReducer from './game/reducer';
import categoryReducer from './filter/reducer';

export const store = configureStore({
    reducer: {
        games: gamesReducer,
        cart: cartReducer,
        category: categoryReducer,
    }
  })