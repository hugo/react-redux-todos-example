import { combineReducers } from 'redux'

import byId from './byId'
import edits from './edits'

const todos = combineReducers({
  byId,
  edits
})

export default todos
