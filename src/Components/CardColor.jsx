import { Button, Card, Col } from "react-bootstrap";

const CardColor = () => {

  return (
    <Col md="4" lg="3" className="mb-3">
      <Card>
        <Card.Header>
          <p className="lead m-0">Negro</p>
        </Card.Header>
        <Card.Body className="d-flex justify-content-center">
          <div className="cajaColorCard"></div>
        </Card.Body>
        <Card.Footer className="text-end">
          <Button variant="warning" className="me-2"><i class="bi bi-pencil-square"></i></Button>
          <Button variant="danger"><i class="bi bi-trash3"></i></Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default CardColor;
