import {
  MULTISELECT_SET_ACTIVE,
  MULTISELECT_SET_INACTIVE
} from '../../actions/multiSelect'

const active = (state = false, action) => {
  switch (action.type) {
    case MULTISELECT_SET_ACTIVE:
      return true
    case MULTISELECT_SET_INACTIVE:
      return false
    default:
      return state
  }
}

export default active
