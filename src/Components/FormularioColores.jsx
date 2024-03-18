import { Button, Col, Form, Row } from "react-bootstrap";
import ListaColores from "./ListaColores";
import { useForm } from "react-hook-form";

const FormularioColores = () => {

  const {
    register,
    handleSubmit,
    formState: { erros },
    reset,
    setValue,
  } = useForm();

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
              <Form.Group controlId="nombreColor" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder= "Ej. Rojo"
                ></Form.Control>
                <Form.Text className="text-danger">
                  Ingrese un nombre de color, es obligatorio
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="hexaColor" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder= "Ej. #FF0000"
                ></Form.Control>
                <Form.Text className="text-danger">
                  Ingrese un nombre de color, es obligatorio
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="rgbColor" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder= "Ej. rgb(255, 0, 0)"
                ></Form.Control>
                <Form.Text className="text-danger">
                  Ingrese un nombre de color, es obligatorio
                </Form.Text>
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
