import { useState } from "react";

function TodoInput({ onTodoAdd }) {
    
  const [inputText, setInputText] = useState("");

  const handleInput = (event) => {
    console.log(event);
    const value = event.target.value;
    setInputText(value);
  };

  const handleClick = () => {
    onTodoAdd(inputText);
    setInputText('');
  }

  // const handleClick = () => {
  //   console.log("clicked");
  //   localStorage.setItem(inputText, inputText);
  //   setTodos((currentTodos) => {
  //     return [...currentTodos, inputText];
  //   });
  //   setInputText("");
  // };

  return (
    <div style={{ marginBottom: "20px" }}>
      <input type="text" value={inputText} onChange={handleInput} />
      <button onClick={handleClick}>할 일 저장하기</button>
    </div>
  );
}

export default TodoInput;
