import { Container, Row } from "react-bootstrap";
import CardColor from "./CardColor";

const ListaColores = ({colores}) => {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        {colores.map((color) => <CardColor key={color.id} color={color}></CardColor>)}
      </Row>
    </Container>
  );
};

export default ListaColores;
