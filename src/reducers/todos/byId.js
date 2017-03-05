import {
  TODOS_ADD,
  TODOS_UPDATE_START,
  TODOS_UPDATE_SUCCESS,
  TODOS_REPLACE,
  TODOS_DELETE_START,
  TODOS_DELETE_SUCCESS,
  TODOS_DELETE_MULTIPLE_SUCCESS
} from '../../actions/todos'

const removeTodo = (state, id) => {
  const nextState = { ...state }
  delete nextState[id]
  return nextState
}

const replaceTodo = (state, todo) => ({ ...state, [todo.id]: todo })

const byId = (state = {}, action) => {
  switch (action.type) {
    case TODOS_ADD:
      return replaceTodo(state, action.todo)
    case TODOS_UPDATE_START:
    case TODOS_UPDATE_SUCCESS:
      return replaceTodo(state, action.todo)
    case TODOS_DELETE_START:
    case TODOS_DELETE_SUCCESS:
      return removeTodo(state, action.id)
    case TODOS_REPLACE:
      return action.todos.reduce(replaceTodo, {})
    case TODOS_DELETE_MULTIPLE_SUCCESS:
      return action.ids.reduce(removeTodo, state)
    default:
      return state
  }
}

export default byId
