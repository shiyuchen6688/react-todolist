import TodoList from "./TodoList"
import AddTaskForm from "./AddTaskForm"
import { useState } from 'react';

function App() {
  const [todoList, setTodoList] = useState([])

  return (
    <div className="App">
      <h1>Todo List Application</h1>
      <AddTaskForm todoList={todoList} setTodoList={setTodoList} />


      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}

export default App;
