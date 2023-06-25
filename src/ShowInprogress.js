import { useContext } from "react";
import { Alert, Button, Container } from "reactstrap";
import { TodoContext } from "./Context";
import { BiArrowBack } from "react-icons/bi";
export default function ShowInprogress() {
  const context = useContext(TodoContext);
  return (
    <Container fluid style={{ marginTop: "10px" }}>
      In Progress
      {context.todoData
        .filter((value) => value.status === "inprogress")
        .map((data) => {
          return (
            <Alert
              color="warning"
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "10px"
              }}
            >
              {data.todoValue}{" "}
              <Button
                color="warning"
                onClick={() => context.changeStatus(data.id, "todo")}
              >
                <BiArrowBack />
              </Button>
              <Button
                color="warning"
                outline
                onClick={() => context.changeStatus(data.id, "completed")}
              >
                Move To In Completed
              </Button>
            </Alert>
          );
        })}
    </Container>
  );
}
