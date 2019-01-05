import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import api from '../middlewares/api';
import electronRequest from '../middlewares/electron-request';

import rootReducer from '../reducers';

// 处理 middleware，必须按照一定顺序插入 store
const middlewares = [
    thunk,
    api,
    electronRequest
];

// 开发场景下加入 logger 的 middleware
if (process.env.NODE_ENV !== 'production') {
    // 如果 url 中携带了 no_logger=1，则不再使用 redux-logger
    if (!/no_logger=1/.test(window.location)) {
        // 具体配置详见: https://github.com/evgenyrodionov/redux-logger#options
        const { createLogger } = require(`redux-logger`);
        middlewares.push(createLogger({
            // ...options
        }));
    }
}

const configureStore = preloadedState => createStore(
    rootReducer,
    preloadedState,
    applyMiddleware.apply(null, middlewares)
);

export default configureStore;
