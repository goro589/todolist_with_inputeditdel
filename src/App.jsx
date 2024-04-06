import React, { useState ,useEffect } from "react";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import "./App.css";

{/*} {*/}

let id = 1;


const App = () => {
  const [todos, setTodos] = useState([]);  {/*}set default todos to be empty list {*/}
  const [display, setDisplay] = useState(true); {/*}set default display to be true {*/}
  const [edit, setEdit] = useState({});

 
  
  useEffect(() => {
    console.log(todos);
  }, [todos]);


  const addTodo = (todo) => {

    if(!todo){

      return;
    }

    const data = {
      name : todo,
      id : id

    }

    id += 1;

    const newTodos = [...todos, data];

    setTodos(newTodos);
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);


    setTodos(newTodos);
  };

  const editTodo = (id) =>{
    const edit = todos.find((todo) => todo.id === id);
    setEdit(edit);
    setDisplay(!display);
  }


  const handleEditTodo =  (input, id) => {

    setTodos((prev)=> prev.map((todo) => todo.id === id ? {name : input , id : id} : todo));
    setDisplay(!display);
    setEdit(null);
  }



  return <div className="container">
    <h1>Todo List </h1>
    <AddTodo handleEditTodo={handleEditTodo} handleAddTodo={addTodo} edit={edit} display={display}/>
    {
      display &&
      <TodoItem todos={todos} deleteTodo={deleteTodo} editTodo={editTodo}/>
    }
  </div>;
};

export default App;
