import React, { useEffect, useState } from 'react'
import Context from './context'
import TodoList from './Todo/TodoList/TodoList'
import Loader from './UI/Loader/Loader'
import Modal from './UI/Modal/Modal'

const AddTodo = React.lazy(() => import('./Todo/AddTodo/AddTodo'))


function App() {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(response => response.json())
      .then(todos => {
        setTimeout(() => {
          setTodos(todos)
          setLoading(false)
        }, 2000);
      })
  }, [])


  const toggleTodo = (id) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.complited = !todo.complited
      }
      return todo
    }))
  }

  const removeTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const addTodo = title => {
    setTodos(todos.concat([{
      title,
      id: Date.now(),
      complited: false,
    }]))
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className='wrapper'>
        <h1>React Todo App</h1>

        <Modal />

        <React.Suspense fallback={<p>Loading...</p>}>
          <AddTodo onCreate={addTodo} />
        </React.Suspense>

        {loading && <Loader />}

        {todos.length
          ? <TodoList todos={todos} onToggle={toggleTodo}></TodoList>
          : loading ? null : <p>No Todos!</p>
        }

      </div>
    </Context.Provider>
  )
}

export default App
