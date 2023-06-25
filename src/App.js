import "./styles.css";
import { Container, Row, Col } from "reactstrap";
import TodoInput from "./TodoInput";
import ShowTodo from "./ShowTodo";
import ShowInprogress from "./ShowInprogress";
import ShowCompleted from "./ShowCompleted";
import Provider from "./Provider";
export default function App() {
  return (
    <Provider>
      <Container style={{ marginTop: "10px" }}>
        <TodoInput />

        <Row xs="3">
          <Col>
            <ShowTodo />
          </Col>
          <Col>
            <ShowInprogress />
          </Col>
          <Col>
            <ShowCompleted />
          </Col>
        </Row>
      </Container>
    </Provider>
  );
}
