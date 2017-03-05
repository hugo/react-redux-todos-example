import {
  TODO_EDIT,
  TODO_EDIT_CANCEL
} from '../../actions/todos'

const removeTodo = (state, todo) => {
  const nextState = { ...state }
  delete nextState[todo.id]
  return nextState
}

const edits = (state = {}, action) => {
  switch (action.type) {
    case TODO_EDIT:
      return { ...state, [action.todo.id]: action.todo }
    case TODO_EDIT_CANCEL:
      return removeTodo(state, action.todo)
    default:
      return state
  }
}

export default edits
