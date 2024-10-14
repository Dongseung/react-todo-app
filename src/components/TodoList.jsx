import { useState } from "react";


function TodoList({ todos, onTodoRemove }) {
  const [count, setCount] = useState(0);


  return (
    <div>
        <ul>
          {todos.map((todo, index) => {
            return (
              <li key={index}>
                <span>{todo}</span>
                <button onClick={() => onTodoRemove(todo)}>
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
      </div>
  )
}

export default TodoList