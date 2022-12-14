import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { reducer } from './reducer';

//* Devtools
const composeEnhancers =
    (typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose);



const middleware = [ thunk ];

const persistConfig = {
    key: 'root',
    storage,
};


const persistedReducer = persistReducer(persistConfig, reducer);
const enhancer = composeEnhancers(applyMiddleware(...middleware));

export const store = createStore(persistedReducer, enhancer);
export const persistor = persistStore(store);
