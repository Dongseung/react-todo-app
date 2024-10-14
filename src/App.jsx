import { useState } from "react";
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function fetchTodos() {
  const result = [];
  for (let i = 0; i < localStorage.length; i++) {
    const value = localStorage.key(i);
    result.push(value);
  }
  return result;
}

function App() {
  const [todos, setTodos] = useState(fetchTodos());
  // const [count, setCount] = useState(0);


  const removeTodo = (todo) => {

    const result = todos.filter((todoItem) => {
      if (todoItem !== todo) {
        return true;
      }
    });
    setTodos(result);
    localStorage.removeItem(todo);
  };

  const addTodo = (todo) => {
    console.log("clicked");
    localStorage.setItem(todo, todo);
    setTodos((currentTodos) => {
      return [...currentTodos, todo];
    });
  };

  return (
    <div>
      <TodoHeader />
      <TodoInput onTodoAdd={addTodo} />
      <TodoList todos={todos} onTodoRemove={removeTodo} />
      {/* <div>
        <ul>
          {todos.map((todo, index) => {
            return (
              <li key={index}>
                <span>{todo}</span>
                <button onClick={() => removeTodo(todo, index)}>
                  삭제 x
                </button>
              </li>
            );
          })}
        </ul>

        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Click count is {count}
        </button>
      </div> */}
    </div>
  );
}

export default App;
