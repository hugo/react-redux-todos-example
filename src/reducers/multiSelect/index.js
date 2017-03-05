import { combineReducers } from 'redux'

import ids from './ids'
import active from './active'

const multiSelect = combineReducers({
  ids,
  active
})

export default multiSelect
