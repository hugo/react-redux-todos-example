import { connect } from 'react-redux'
import { push } from 'connected-react-router'

import {
  newTodoReset,
  newTodoUpdate,
  newTodoSave
} from '../actions/newTodo'
import AddTodo from '../components/AddTodo'

const mapStateToProps = (state) => ({
  todo: state.newTodo.todo
})

const mapDispatchToProps = (dispatch) => ({
  onChangeTodo: (todo) => dispatch(newTodoUpdate(todo)),
  onSaveTodo: (todo) => {
    dispatch(newTodoSave(todo))
  },
  onCancelTodo: () => {
    dispatch(newTodoReset())
    dispatch(push('/'))
  }
})

const AddTodoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo)

export default AddTodoContainer
