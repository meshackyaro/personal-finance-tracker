import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import UserSlice from '@/redux/userSlice';

const persistConfig = {
    key: 'hotels_root',
    storage,
    whitelist: ['expenses', 'income'],
};
const persistedReducer = persistReducer(persistConfig, UserSlice);

export const store = configureStore({
    reducer: {
        user: persistedReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const persist_store = persistStore(store);