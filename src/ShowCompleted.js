import { useContext } from "react";
import { Alert, Button, Container } from "reactstrap";
import { TodoContext } from "./Context";
import { BiArrowBack } from "react-icons/bi";
export default function ShowInprogress() {
  const context = useContext(TodoContext);
  return (
    <Container fluid style={{ marginTop: "10px" }}>
      Completed
      {context.todoData
        .filter((value) => value.status === "completed")
        .map((data) => {
          return (
            <Alert
              color="success"
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "10px"
              }}
            >
              {data.todoValue}{" "}
              <Button
                color="success"
                onClick={() => context.changeStatus(data.id, "inprogress")}
              >
                <BiArrowBack />
              </Button>
            </Alert>
          );
        })}
    </Container>
  );
}
