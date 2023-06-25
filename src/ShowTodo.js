import { useContext } from "react";
import { Alert, Button, Container } from "reactstrap";
import { TodoContext } from "./Context";
import { BiX } from "react-icons/bi";
export default function ShowTodo() {
  const context = useContext(TodoContext);
  return (
    <Container fluid style={{ marginTop: "10px" }}>
      All Todo's
      {context.todoData
        .filter((value) => value.status === "todo")
        .map((data) => {
          return (
            <Alert
              color="primary"
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "10px"
              }}
            >
              {data.todoValue}{" "}
              <Button
                color="danger"
                onClick={() => context.changeStatus(data.id, "delete")}
              >
                <BiX />
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => context.changeStatus(data.id, "inprogress")}
              >
                Move To In Progress
              </Button>
            </Alert>
          );
        })}
    </Container>
  );
}
