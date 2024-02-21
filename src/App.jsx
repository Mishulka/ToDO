import React, { useEffect, useState } from 'react'
import { Todo } from './components/Todo'

document.title = "ToDo";

const PlusIcon = ({ width, height }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.55173 20V0H11.4483V20H8.55173ZM0 11.4151V8.63208H20V11.4151H0Z" fill="white" />
    </svg>

  )
}

export const TickIcon = ({ width, height }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 5.41695L4.71215 9L13 1" stroke="#F9F9F9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

  )
}


export default function App() {
  const [newTodo, setNewTodo] = useState("")
  const [todos, setTodos] = useState([
    
  ])

  
  

  const createTodo = () => {

    setTodos((prev) => {
      return [...prev, {
        title: newTodo,
        is_done: false
      }]

    },)

  }
  const deleteTodo = () => {
    alert("Удаление")
  }
  const doneTodo = () => {
    alert("Изменить")
  }

  return (
    
    <div className={"app"}>
      <div className="todos-container">
        <div className="todos-header">
          <h2 className='todos-title'>Your <span className='txt-green'>Todos</span></h2>
          <div className="todos-input-block">
            <input value={newTodo} onChange={e => setNewTodo(e.target.value)} placeholder='Название дела...' type="text" className="todos-input" />
            <div onClick={createTodo} className="todos-create-btn">
              <PlusIcon width={12} height={12} />
            </div>
          </div>
        </div>
        <div className="todos-body">
          <div className="todos__filter">
            <div className="todos__filter_item todos__filter_current">Все</div>
            <div className="todos__filter_item">В процессе</div>
            <div className="todos__filter_item">Готовые</div>
          </div>
          <div className="todos__list">
            {
              todos.map((item) => {
                return (
                  <Todo is_done={item.is_done} title={item.title} />
                )
              })
            }

          </div>
        </div>
      </div>
    </div>
  )
}

