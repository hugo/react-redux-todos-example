import { combineReducers } from 'redux'

import todos from './todos'
import multiSelect from './multiSelect/index'
import newTodo from './newTodo'

const rootReducer = combineReducers({
  todos,
  multiSelect,
  newTodo
})

export default rootReducer
