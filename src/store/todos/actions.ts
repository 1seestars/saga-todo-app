import { CREATE_NEW_TODO, FETCH_TODOS, SET_FETCHED_TODO } from './actionTypes'
import { IFetchedTodo, ITodo } from '../../interfaces'

export interface IAction {
  type: string
  payload?: any
}

export const createNewTodo = (payload: ITodo): IAction => ({
  type: CREATE_NEW_TODO,
  payload
})

export const fetchTodos = (): IAction => ({
  type: FETCH_TODOS
})

export const setFetchedTodo = (payload: IFetchedTodo): IAction => ({
  type: SET_FETCHED_TODO,
  payload
})
