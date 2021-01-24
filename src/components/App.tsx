import React from 'react'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { fetchTodos } from '../store/todos/actions'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 10px;
  box-sizing: border-box;
  background: rgb(137, 192, 255);
  background: linear-gradient(
    165deg,
    rgb(184, 225, 255) 0%,
    rgb(188, 203, 255) 100%
  );
  background-repeat: no-repeat;
  min-height: 100vh;
`

const TodoWrapper = styled.div`
  background: #fafafa;
  width: 100%;
  max-width: 800px;
  min-height: 400px;
  align-self: center;
  border-radius: 7px;
  box-shadow: 0 0 30px 0 rgba(179, 192, 239, 0.5);
  padding: 20px 0 20px;

  -webkit-animation-name: zoomIn;
  animation-name: zoomIn;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;

  @-webkit-keyframes zoomIn {
    0% {
      opacity: 0;
      -webkit-transform: scale3d(0.8, 0.8, 0.8);
      transform: scale3d(0.8, 0.8, 0.8);
    }
    50% {
      opacity: 1;
    }
  }
  @keyframes zoomIn {
    0% {
      opacity: 0;
      -webkit-transform: scale3d(0.8, 0.8, 0.8);
      transform: scale3d(0.8, 0.8, 0.8);
    }
    50% {
      opacity: 1;
    }
  }
`

const TodoMainBlock = styled.div`
  padding: 7% 0 0;
  text-align: center;
  width: 90%;
  margin: 0 auto;
`

const Button = styled.button`
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  transition: 0.2s;
  &:hover {
    background: lightgray;
  }
`

const App: React.FC = () => {
  const dispatch = useDispatch()

  return (
    <>
      <Container>
        <TodoWrapper>
          <TodoMainBlock>
            <AddTodo />
            <TodoList />
            <Button onClick={() => dispatch(fetchTodos())}>Fetch todos</Button>
          </TodoMainBlock>
        </TodoWrapper>
      </Container>
    </>
  )
}

export default App
