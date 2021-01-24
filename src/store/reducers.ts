import { combineReducers, createStore, applyMiddleware } from 'redux'
import { todosReducer } from './todos/reducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import { watcherFetchData } from './sagas'

export const rootReducer = combineReducers({
  todos: todosReducer
})

const sagaMiddleware = createSagaMiddleware()

export type RootState = ReturnType<typeof rootReducer>

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(watcherFetchData)
