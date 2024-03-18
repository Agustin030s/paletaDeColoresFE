import { Container, Row } from "react-bootstrap";
import CardColor from "./CardColor";

const ListaColores = ({colores, setColores}) => {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        {colores.map((color) => <CardColor key={color.id} color={color} setColores={setColores}></CardColor>)}
      </Row>
    </Container>
  );
};

export default ListaColores;
