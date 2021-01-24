import { CREATE_NEW_TODO, SET_FETCHED_TODO } from './actionTypes'
import { IAction } from './actions'
import { ITodo } from '../../interfaces'

interface IState {
  todos: Array<ITodo>
}

const initialState: IState = {
  todos: []
}

export const todosReducer = (state: IState = initialState, action: IAction) => {
  switch (action.type) {
    case CREATE_NEW_TODO:
    case SET_FETCHED_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }
    default:
      return state
  }
}
