import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cartState from './cartState/cartState';

const rootReduser = combineReducers({ [cartState.name]: cartState.reducer });

const store = configureStore({
    reducer: rootReduser,
});
export default store;

export type TrootState = ReturnType<typeof store.getState>;
export type TappDispatch = typeof store.dispatch;
