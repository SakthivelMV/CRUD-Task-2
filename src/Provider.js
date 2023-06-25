import { useState } from "react";
import { TodoContext } from "./Context";

export default function Provider(props) {
  const [todoData, setTodoData] = useState([]);

  const addToAllTodos = (todo) => {
    setTodoData([...todoData, todo]);
  };

  const changeStatus = (id, status) => {
    let tempTodo = todoData;
    let index = tempTodo.findIndex((value) => value.id === id);
    tempTodo[index].status = status;
    setTodoData([...tempTodo]);
  };
  return (
    <TodoContext.Provider value={{ todoData, addToAllTodos, changeStatus }}>
      {props.children}
    </TodoContext.Provider>
  );
}
