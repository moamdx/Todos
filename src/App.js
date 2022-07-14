
import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/form.js'
import ToDoList from './components/Todolist';

function App() {


  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [errorText, setErrorText] = useState("");


  useEffect(() => {
    getLocalTodos();
  }, []);


  useEffect(() => {
    filteredHandler();
    saveLocalTodos();
  }, [todos, status]);



  const filteredHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos)
    }

  }




  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }



  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    }
    else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  }





  return (
    <div className="App">
      <header>
        <h1>Pist Academy Todo List</h1>
      </header>
      <Form inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} setStatus={setStatus} setErrorText={setErrorText} />
      <p className="error">{errorText}</p>
      <ToDoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />
    </div>
  );
}

export default App;
