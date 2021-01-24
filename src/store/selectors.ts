import { createSelector } from 'reselect'
import { RootState } from './reducers'

export const selectTodos = createSelector(
  (state: RootState) => state.todos,
  (todos) => todos.todos
)
