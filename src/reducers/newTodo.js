import {
  NEWTODO_RESET,
  NEWTODO_SAVE_SUCCESS,
  NEWTODO_UPDATE
} from '../actions/newTodo'

const defaultState = { saving: false, todo: '' }

const newTodo = (state = defaultState, action) => {
  switch (action.type) {
    case NEWTODO_RESET:
    case NEWTODO_SAVE_SUCCESS:
      return { ...defaultState }
    case NEWTODO_UPDATE:
      return { ...state, todo: action.todo }
    default:
      return state
  }
}

export default newTodo
