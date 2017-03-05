const endpoint = 'https://infinite-earth-76322.herokuapp.com'

const toApi = ({ dateAdded, done, id, todo  }) => ({
  date_added: dateAdded,
  done,
  id,
  todo
})

const fromApi = ({ date_added, done, id, todo  }) => ({
  dateAdded: new Date(date_added),
  done,
  id,
  todo
})

const toJson = (res => res.json())

const parseTodos = ({ todos }) => todos

const parseTodo = ({ todo }) => todo

const ensureRemoved = ({ removed }) => removed
  ? Promise.resolve()
  : Promise.reject('Not removed')

export const getAllTodos = () => fetch(`${endpoint}`)
.then(toJson)
.then(parseTodos)
.then(todos => todos.map(fromApi))
.catch(console.log)

export const getTodo = (id) => fetch(`${endpoint}/todo/${id}`)
.then(toJson)
.then(parseTodo)
.then(fromApi)
.catch(console.log)

export const deleteTodo = (id) => fetch(`${endpoint}/todo/${id}`, {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json'
  }
})
.then(toJson)
.then(ensureRemoved)
.catch(console.log)

const ensureMultipleRemoved = ({ no_removed, removed }) => no_removed > 0
  ? Promise.resolve(removed)
  : Promise.reject('Removal error')

const getRemovedIds = (todos) => todos.map(todo => todo.id)

export const deleteTodos = (ids) => fetch(`${endpoint}/todo/`, {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ todos: ids })
})
.then(toJson)
.then(ensureMultipleRemoved)
.then(getRemovedIds)
.catch(console.log)

export const updateTodo = (todo) => fetch(`${endpoint}/todo/${todo.id}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ ...toApi(todo) })
})
.then(toJson)
.then(parseTodo)
.then(fromApi)
.catch(console.log)

export const addTodo = (todo) => fetch(`${endpoint}/todo`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ todo, done: false })
})
.then(toJson)
.then(parseTodos)
.then(todos => todos.map(fromApi))
.catch(console.log)
