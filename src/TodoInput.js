import { useContext, useState } from "react";
import { Input, InputGroup, Button } from "reactstrap";
import { v4 as uuidv4 } from "uuid";
import { TodoContext } from "./Context";
export default function TodoInput() {
  const [inputValue, setInputValue] = useState("");
  const { addToAllTodos } = useContext(TodoContext);
  const handleSubmit = () => {
    let todoObj = {
      id: uuidv4(),
      todoValue: inputValue,
      status: "todo"
    };
    addToAllTodos(todoObj);
    setInputValue("");
  };
  return (
    <InputGroup>
      <Input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button color="info" outline onClick={handleSubmit}>
        Add Todo
      </Button>
    </InputGroup>
  );
}
