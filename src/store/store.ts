// Import Redux Toolkit's configure store (to create our store)
import { configureStore } from '@reduxjs/toolkit'

// Combine multiple reducers into one root reducer
import { combineReducers } from 'redux'

// Redux Persist: handles saving/loading redux state to localStorage
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

// Storage engine for Redux Persist (in this case , localStorage)
import storage from 'redux-persist/lib/storage';

// Our slices (reducers for specific pieces of state)
import themeReducer from './themeSlice';
import languageReducer from './languageSlice'

const rootReducer = combineReducers({
    theme: themeReducer,
    language: languageReducer
})

const persistConfig = {
    key: 'root', // localStorage key name
    storage, // where to store (defaults to localStorage)
    whitelist: ['theme', 'language'] // only persist these slices
}

const persistedReducer = persistReducer(persistConfig, rootReducer) // <= this wraps the reducer

// let's create the store
export const store = configureStore({
    reducer: persistedReducer, // the root reducer with persistance
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
        // These 6 actions are special actions from redux-persist
        // and we tell redux to ignore their "non-serializable" warnings
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
        }),
})

// So Far : we combined our THEME and LANGUAGE reducers
// we wrapped them in persistence logic
// we created the redux store using redux toolkit's configureStore

export const persistor = persistStore(store) // <= creates a persistor - watches the redux store and keeps localStorage in sync , we will pass this to <PersistGate> in _app.tsx
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
