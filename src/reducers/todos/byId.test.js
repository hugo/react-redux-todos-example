import {
  todosAdd,
  todosUpdateSuccess
} from '../../actions/todos'
import reducer from './byId'

const todos = [
  {
    todo: 'Something to do',
    done: false,
    id: 'ae1bbd3c-de92-41a1-9e00-ac88f0cc7a98',
    dateAdded: new Date(2017, 2, 18, 11, 40)
  },
  {
    todo: 'A new task',
    done: false,
    id: '15ceb349-51f1-4a7b-9e79-ac18e3262e91',
    dateAdded: new Date(2017, 2, 18, 11, 40)
  },
  {
    todo: 'Do Another thing',
    done: true,
    id: '5a06dbe8-b05f-46dd-ab0f-2ab65cac1858',
    dateAdded: new Date(2017, 2, 18, 11, 40)
  }
]

it('adds a todo', () => {
  const state = reducer(undefined, todosAdd(todos[0]))

  expect(state[todos[0].id]).toBe(todos[0])
})

it('updates a todo', () => {
  const state = reducer(undefined, (todosAdd(todos[0])))
  const action = todosUpdateSuccess({ ...todos[0], todo: 'changed' })
  const nextState = reducer(state, action)

  expect(nextState[todos[0].id].todo).toBe('changed')
})
