import { connect } from 'react-redux'

import { todosDelete } from '../actions/todos'
import TodoControls from '../components/TodoControls'

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch) => ({
  deleteTodo: (id) => dispatch(todosDelete(id))
})

const TodoControlsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoControls)

export default TodoControlsContainer
