import { connect } from 'react-redux'
import { push } from 'connected-react-router'

import { fetchAllTodos } from '../actions/todos'
import {
  activate,
  cancel,
  deactivate,
  deleteSelected
} from '../actions/multiSelect'
import MultiSelectTodoList from '../components/MultiSelectTodoList'

const mapStateToProps = (state) => ({
  todos: Object.keys(state.todos.byId).map(id => state.todos.byId[id]),
  active: state.multiSelect.active,
  selectedIds: state.multiSelect.ids
})

const mapDispatchToProps = (dispatch) => ({
  addTodo: () => dispatch(push('/add')),
  deleteSelectedTodos: (ids) => dispatch(deleteSelected(ids)),
  multiSelectEnd: () => {
    dispatch(cancel())
    dispatch(deactivate())
  },
  multiSelectStart: () => dispatch(activate()),
  fetchAllTodos: () => dispatch(fetchAllTodos())
})

const MultiSelectTodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MultiSelectTodoList)

export default MultiSelectTodoListContainer
