import React from 'react'
import { Route } from 'react-router-dom'
import {
  applyMiddleware,
  createStore,
  compose
} from 'redux'
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history'
import {
  connectRouter,
  ConnectedRouter,
  routerMiddleware
} from 'connected-react-router'
import styled from 'styled-components'
import thunk from 'redux-thunk'

import MultiSelectTodoList from '../containers/MultiSelectTodoListContainer'
import EditTodo from '../containers/EditTodoContainer'
import AddTodo from '../containers/AddTodoContainer'

import rootReducer from '../reducers/index'

const history = createBrowserHistory()

const store = createStore(
  connectRouter(history)(rootReducer),
  compose(
    applyMiddleware(
      thunk,
      routerMiddleware(history)
    )
  )
)

const AppStyled = styled.div`
  width: 640px;
  margin-top: 2rem;
  margin-right: auto;
  margin-left: auto;
`

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <AppStyled>
        <Route exact path='/' render={() => (
          <MultiSelectTodoList />
        )} />

        <Route exact path='/todos/:id' render={({ match: { params: { id } } }) => (
          <EditTodo id={id} />
        )} />

        <Route exact path='/add' component={AddTodo} />
      </AppStyled>
    </ConnectedRouter>
  </Provider>
)

export default App
