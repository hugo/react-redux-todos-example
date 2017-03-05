import { deleteTodos } from '../api'

import {
  todosDeleteMultipleSuccess
} from './todos'

export const MULTISELECT_CANCEL = 'MULTISELECT_CANCEL'
export const MULTISELECT_TOGGLE_TODO = 'MULTISELECT_TOGGLE_TODO'
export const MULTISELECT_SET_ACTIVE = 'MULTISELECT_SET_ACTIVE'
export const MULTISELECT_SET_INACTIVE = 'MULTISELECT_SET_INACTIVE'

export const toggleSelected = (id) => ({
  type: MULTISELECT_TOGGLE_TODO,
  id
})

export const cancel = () => ({
  type: MULTISELECT_CANCEL
})

export const activate = () => ({
  type: MULTISELECT_SET_ACTIVE
})

export const deactivate = () => ({
  type: MULTISELECT_SET_INACTIVE
})

export const deleteSelected = (ids) => (dispatch) => {
  deleteTodos(ids).then((deletedIds) => {
    dispatch(todosDeleteMultipleSuccess(deletedIds))
    dispatch(deactivate())
  })
}
