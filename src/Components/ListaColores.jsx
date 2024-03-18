import { Container, Row } from "react-bootstrap";
import CardColor from "./CardColor";

const ListaColores = () => {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <CardColor></CardColor>
      </Row>
    </Container>
  );
};

export default ListaColores;
