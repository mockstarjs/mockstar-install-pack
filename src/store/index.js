import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import api from '../middlewares/api';
import electronRequest from '../middlewares/electron-request';

import rootReducer from '../reducers';

const configureStore = preloadedState => createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk, api, electronRequest)
);

export default configureStore;
