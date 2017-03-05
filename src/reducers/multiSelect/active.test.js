import {
  activate,
  deactivate
} from '../../actions/multiSelect'
import reducer from './active'

it('activates', () => {
  const state = reducer(false, activate())

  expect(state).toBe(true)
})

it('deactivates', () => {
  const state = reducer(true, deactivate())

  expect(state).toBe(false)
})
