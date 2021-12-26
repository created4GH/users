import { applyMiddleware, createStore, Store } from "redux"
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from "redux-devtools-extension"
import createSagaMiddleware from "@redux-saga/core";
import rootReducer, { RootState } from "./rootReducer"
import rootSaga from "./rootSaga";
import { Action } from "../interfaces";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['localLanguage', 'isAuthorized'],
};

const persistedReducer = persistReducer<RootState, Action>(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();
const store: Store<RootState> = createStore(persistedReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))
export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export default store;