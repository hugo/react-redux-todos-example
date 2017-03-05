import {
  getAllTodos,
  getTodo,
  deleteTodo,
  updateTodo
} from '../api'

export const TODOS_ADD = 'TODOS_ADD'
export const todosAdd = (todo) => ({
  type: TODOS_ADD,
  todo
})

export const TODO_EDIT = 'TODO_EDIT'
export const todoEdit = (todo) => ({
  type: TODO_EDIT,
  todo
})

export const TODO_EDIT_CANCEL = 'TODO_EDIT_CANCEL'
export const todoEditCancel = (todo) => ({
  type: TODO_EDIT_CANCEL,
  todo
})

export const TODOS_UPDATE_START = 'TODOS_UPDATE_START'
export const TODOS_UPDATE_SUCCESS = 'TODOS_UPDATE_SUCCESS'
export const TODOS_UPDATE_FAILURE = 'TODOS_UPDATE_FAILURE'

export const todosUpdateSuccess = (todo) => ({
  type: TODOS_UPDATE_SUCCESS,
  todo
})

export const todosUpdate = (todo) => (dispatch) => {
  dispatch({ type: TODOS_UPDATE_START, todo })

  updateTodo(todo).then(
    todo => dispatch(todosUpdateSuccess(todo)),
    err => dispatch({ type: TODOS_UPDATE_FAILURE, err })
  )
}

export const TODOS_REPLACE = 'TODOS_REPLACE'
export const todosReplace = (todos) => ({
  type: TODOS_REPLACE,
  todos
})

export const TODOS_DELETE_START = 'TODOS_DELETE_START'
export const TODOS_DELETE_SUCCESS = 'TODOS_DELETE_SUCCESS'
export const TODOS_DELETE_FAILURE = 'TODOS_DELETE_FAILURE'

export const todosDelete = (id) => (dispatch) => {
  dispatch({ type: TODOS_DELETE_START, id })

  deleteTodo(id).then(
    () => dispatch({ type: TODOS_DELETE_SUCCESS, id }),
    err => dispatch({ type: TODOS_DELETE_FAILURE, err })
  )
}

export const TODOS_DELETE_MULTIPLE_SUCCESS = 'TODOS_DELETE_MULTIPLE_SUCCESS'
export const todosDeleteMultipleSuccess = (ids) => ({
  type: TODOS_DELETE_MULTIPLE_SUCCESS,
  ids
})

export const fetchTodo = (id) => (dispatch) =>
  getTodo(id).then(todo => dispatch(todosAdd(todo)))

export const fetchAllTodos = () => (dispatch) =>
  getAllTodos().then(todos => todos.forEach(todo => {
    dispatch(todosAdd(todo))
  }))
