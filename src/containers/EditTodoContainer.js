import { connect } from 'react-redux'
import { push } from 'connected-react-router'

import {
  todoEdit,
  todoEditCancel,
  fetchTodo,
  todosUpdate
} from '../actions/todos'

import EditTodo from '../components/EditTodo'

const mapStateToProps = (state, props) => ({
  todo: { ...state.todos.byId[props.id], ...state.todos.edits[props.id] }
})

const mapDispatchToProps = (dispatch) => ({
  onChangeTodo: (todo) => dispatch(todoEdit(todo)),
  onSaveTodo: (todo) => {
    dispatch(todosUpdate(todo))
    dispatch(push('/'))
  },
  onCancelTodo: (todo) => {
    dispatch(todoEditCancel(todo))
    dispatch(push('/'))
  },
  loadTodo: (id) => dispatch(fetchTodo(id))
})

const EditTodoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditTodo)

export default EditTodoContainer
