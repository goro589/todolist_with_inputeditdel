import React from 'react'

const TodoItem = ({todos , deleteTodo , editTodo}) => {





  return todos.map((todo) => (
    <div key={todo.id} className='todo-item'>
      <p>ID : {todo.id} , {todo.name}</p>
        <div>
            <button className='edit' onClick={()=>editTodo(todo.id)} >Edit</button>
            <button className='del' onClick={()=>deleteTodo(todo.id)} >Delete</button>
        </div>
    </div>
  )) 
}

export default TodoItem