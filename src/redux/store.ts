import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import { persistStore } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './root.reducer'
import rootSaga from './root.saga'

const logger = createLogger()
const sagaMiddleware = createSagaMiddleware()
const middleware = []

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger)
}
export const store = createStore(rootReducer, applyMiddleware(...middleware, sagaMiddleware))
sagaMiddleware.run(rootSaga)
export const persistor = persistStore(store)
