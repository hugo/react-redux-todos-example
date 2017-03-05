import { connect } from 'react-redux'

import { todosUpdate } from '../actions/todos'
import Todo from '../components/Todo'

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch) => ({
  toggleDoneStatus: (todo) => dispatch(todosUpdate({ ...todo, done: !todo.done }))
})

const TodoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo)

export default TodoContainer
