import {
  MULTISELECT_CANCEL,
  MULTISELECT_TOGGLE_TODO,
} from '../../actions/multiSelect'

const addOrRemove = (ids, id) => ids.indexOf(id) !== -1
  ? ids.filter(_id => _id !== id)
  : ids.concat(id)

const ids = (state = [], action) => {
  switch (action.type) {
    case MULTISELECT_TOGGLE_TODO:
      return addOrRemove(state, action.id)
    case MULTISELECT_CANCEL:
      return []
    default:
      return state
  }
}

export default ids
