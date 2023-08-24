// rootReducer.js

import { combineReducers } from "redux";
import CartReducer from "./addCart/CartReducer";
import ProductReducer from "./Products/ProductReducer";
import UserReducer from "./UserName/UserReducer";
import FavoritesReducer from "./isFavorite/favoriteReducer";
import FilterReducer from "./Filter/FilterReducer";

export const rootReducer = combineReducers({
  products: ProductReducer,
  cart: CartReducer,
  favorites: FavoritesReducer,
  filter: FilterReducer,
  user: UserReducer,
});
