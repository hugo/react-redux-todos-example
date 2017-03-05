import {
  todoEdit,
  todoEditCancel
} from '../../actions/todos'
import reducer from './edits'

const todo = {
  id: 'ae1bbd3c-de92-41a1-9e00-ac88f0cc7a98',
  todo: 'A todo'
}

it('starts editing a todo', () => {
  const state = reducer(undefined, todoEdit(todo))

  expect(state[todo.id]).toBe(todo)
})

it('cancels editing a todo', () => {
const state = reducer({ [todo.id]: todo }, todoEditCancel(todo))

  expect(state).toEqual({})
})
