import { push } from 'connected-react-router'

import {
  addTodo
} from '../api'
import { todosReplace } from './todos'

export const NEWTODO_RESET = 'NEWTODO_RESET'

export const newTodoReset = () => ({
  type: NEWTODO_RESET
})

export const NEWTODO_UPDATE = 'NEWTODO_UPDATE'
export const newTodoUpdate = (todo) => ({
  type: NEWTODO_UPDATE,
  todo
})

export const NEWTODO_SAVE_START = 'NEWTODO_SAVE_START'
export const NEWTODO_SAVE_SUCCESS = 'NEWTODO_SAVE_SUCCESS'
export const NEWTODO_SAVE_FAILURE = 'NEWTODO_SAVE_FAILURE'

export const newTodoSave = (todo) => dispatch => {
  dispatch({ type: NEWTODO_SAVE_START })

  addTodo(todo).then(
    todos => {
      dispatch({ type: NEWTODO_SAVE_SUCCESS })
      dispatch(todosReplace(todos))
      dispatch(push('/'))
    },
    err => dispatch({ type: NEWTODO_SAVE_FAILURE, err })
  )
}
