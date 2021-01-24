import React, { FormEvent, useState } from 'react'
import { ITodo } from '../interfaces'
import { v4 as uuid } from 'uuid'
import moment from 'moment'
import { useDispatch } from 'react-redux'
import { createNewTodo } from '../store/todos/actions'
import styled from 'styled-components'

const Form = styled.form`
  padding: 0 30px;
`

const Input = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid #9abbf1;
  border-radius: 3px;
  background: #cdddec;
  box-sizing: border-box;
  padding-left: 10px;
  color: #999;
  font-weight: 700;
  font-size: 16px;
  transition: 0.2s;

  &:focus {
    padding-left: 15px;
    font-size: 19px;
  }
`

const AddTodo: React.FC = () => {
  const [value, setValue] = useState<string>('')
  const dispatch = useDispatch()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (value.trim()) {
      const newTodo: ITodo = {
        id: uuid(),
        title: value.trim(),
        createdAt: moment().format('DD.MM.YYYY h:mm:ss')
      }

      dispatch(createNewTodo(newTodo))

      setValue('')
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type={'text'}
        name={'title'}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
        placeholder={'Title'}
      />
    </Form>
  )
}

export default AddTodo
