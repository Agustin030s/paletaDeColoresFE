import { Button, Col, Form, Row } from "react-bootstrap";
import ListaColores from "./ListaColores";

const FormularioColores = () => {
  return (
    <>
      <section className="container contenedorFormulario">
        <div className="py-3">
          <p className="lead">Administrar Colores</p>
        </div>
        <Form>
          <Row className="justify-content-center align-items-center bg-info py-4 border border-dark">
            <Col md="4" className="d-flex justify-content-center mb-2">
              <div className="cajaColor"></div>
            </Col>
            <Col md="8">
              <Form.Group controlId="color">
                <Form.Control
                  type="text"
                  placeholder="Ingrese un color Ej. blue, gold, aquamarine"
                ></Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <div className="py-4 text-end">
            <Button>Guardar</Button>
          </div>
        </Form>
      </section>
      <ListaColores></ListaColores>
    </>
  );
};

export default FormularioColores;
