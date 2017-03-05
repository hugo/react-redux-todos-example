import { connect } from 'react-redux'

import App from '../components/App'

import { fetchAllTodos } from '../actions/todos'

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch) => ({
  fetchAllTodos: () => dispatch(fetchAllTodos())
})

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppContainer
