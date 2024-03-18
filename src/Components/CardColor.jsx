import { Button, Card, Col } from "react-bootstrap";
import { obtenerColorAPI } from "../helpers/queries";

const CardColor = ({ color }) => {
  let backgroundColor = "black";

  if (color.hexaColor === "" && color.rgbColor === "") {
    backgroundColor = color.nombreColor;
  } else if (color.hexaColor === "") {
    backgroundColor = color.rgbColor;
  } else {
    backgroundColor = color.hexaColor;
  }

  const obtenerColor = async (id) =>{
    const respuesta = await obtenerColorAPI(id);
    if(respuesta.status === 200){
      console.log('El color soy yo');
    }
  }

  return (
    <Col md="4" lg="3" className="mb-3">
      <Card>
        <Card.Header>
          <p className="lead m-0">{color.nombreColor}</p>
        </Card.Header>
        <Card.Body className="d-flex justify-content-center">
          <div
            className="cajaColorCard border rounded"
            style={{ background: backgroundColor }}
          ></div>
        </Card.Body>
        <Card.Footer className="text-end">
          <Button variant="warning" className="me-2" onClick={() => obtenerColor(color.id)}>
            <i className="bi bi-pencil-square"></i>
          </Button>
          <Button variant="danger">
            <i className="bi bi-trash3"></i>
          </Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default CardColor;
