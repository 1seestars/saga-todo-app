import React from 'react'
import Todo from './Todo'
import { ITodo } from '../interfaces'
import { useSelector } from 'react-redux'
import { selectTodos } from '../store/selectors'
import styled from 'styled-components'

const Todos = styled.ul`
  list-style: none;
  text-align: left;
  padding: 0 30px;
`

const TodoList: React.FC = () => {
  const todos = useSelector(selectTodos)

  return (
    <Todos>
      {(todos as Array<ITodo>).map((todo) => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </Todos>
  )
}

export default TodoList
