import { takeEvery, call, put } from 'redux-saga/effects'
import { FETCH_TODOS } from './todos/actionTypes'
import { apiCall } from '../utils/backendApi'
import { setFetchedTodo } from './todos/actions'
import { IFetchedTodo } from '../interfaces'

function* workerFetchData() {
  const newTodo: IFetchedTodo = yield call(() => apiCall('todos/1'))

  yield put(setFetchedTodo(newTodo))
}

export function* watcherFetchData() {
  yield takeEvery(FETCH_TODOS, workerFetchData)
}
