import {
  cancel,
  toggleSelected
} from '../../actions/multiSelect'
import reducer from './ids'

it('toggles a todo selected', () => {
  const action = toggleSelected(1)
  const state = reducer(undefined, action)

  expect(state.length).toBe(1)
  expect(state[0]).toBe(1)
})

it('toggles a todo deselected', () => {
  const action = toggleSelected(2)
  const state = reducer([1, 2, 3], action)

  expect(state.length).toBe(2)
  expect(state[0]).toBe(1)
  expect(state[1]).toBe(3)
})

it('cancels selecting', () => {
  const action = cancel()
  const state = reducer([1, 2, 3], action)

  expect(state.length).toBe(0)
})
