import { Button, Col, Form, Row } from "react-bootstrap";
import ListaColores from "./ListaColores";
import { useForm } from "react-hook-form";
import CajaColor from "./auxiliar/CajaColor";

const FormularioColores = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  const onSubmit = () =>{
    console.log("desde el form");
  }

  return (
    <>
      <section className="container contenedorFormulario">
        <div className="py-3">
          <p className="lead">Administrar Colores</p>
        </div>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row className="justify-content-center align-items-center bg-info py-4 border border-dark">
            <Col md="4" className="d-flex justify-content-center mb-2">
              {/* <div className="cajaColor"></div> */}
              <CajaColor></CajaColor>
            </Col>
            <Col md="8">
              <Form.Group controlId="nombreColor" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder= "Ej. Rojo"
                  {...register("nombreColor",{
                    required: "Debe ingresar el nombre del color",
                    minLength: {
                      value: 3,
                      message: "Debe ingresar como minimo 3 caracteres"
                    },
                    maxLength: {
                      value: 20,
                      message: "Debe ingresar como máximo 20 caracteres"
                    },
                  })}
                ></Form.Control>
                <Form.Text className="text-danger">
                  {errors.nombreColor?.message}
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="hexaColor" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder= "Ej. #FF0000"
                  {...register("hexaColor",{
                    minLength: {
                      value: 7,
                      message: "El codigo hexadecimal debe tener 7 caracteres"
                    },
                    pattern:{
                      value: /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
                      message: "Debes ingresar un código hexadecimal válido"
                    }
                  })}
                ></Form.Control>
                <Form.Text className="text-danger">
                  {errors.hexaColor?.message}
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="rgbColor" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder= "Ej. rgb(255, 0, 0)"
                  {...register("rgbColor", {
                    pattern: {
                      value: /^rgb\(\s*(\d{1,3}\s*,\s*\d{1,3}\s*,\s*\d{1,3})\s*\)$/,
                      message: "Debes ingresar un código rgb válido"
                    }
                  })}
                ></Form.Control>
                <Form.Text className="text-danger">
                  {errors.rgbColor?.message}
                </Form.Text>
              </Form.Group>
            </Col>
          </Row>
          <div className="py-4 text-end">
            <Button type="submit">Guardar</Button>
          </div>
        </Form>
      </section>
      <ListaColores></ListaColores>
    </>
  );
};

export default FormularioColores;
