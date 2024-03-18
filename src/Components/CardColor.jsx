import { Button, Card, Col } from "react-bootstrap";
import Swal from "sweetalert2";
import {
  eliminarColorAPI,
  obtenerColorAPI,
  obtenerColoresAPI,
} from "../helpers/queries";

const CardColor = ({
  color,
  setColores,
  setEditar,
  setId,
  setValue,
  setTextoBoton,
}) => {
  
  let backgroundColor = "black";

  if (color.hexaColor === "" && color.rgbColor === "") {
    backgroundColor = color.nombreColor;
  } else if (color.hexaColor === "") {
    backgroundColor = color.rgbColor;
  } else {
    backgroundColor = color.hexaColor;
  }

  const editarColor = () => {
    Swal.fire({
      title: "Estás seguro que deseas editar este color?",
      text: "Editaras las propiedades del color",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Editar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        setEditar(true);
        setId(color.id);
        setTextoBoton("Editar");
        setValue("nombreColor", color.nombreColor);
        setValue("hexaColor", color.hexaColor);
        setValue("rgbColor", color.rgbColor);
      }
    });
  };

  const eliminarColor = async (id) => {
    Swal.fire({
      title: "Estás seguro que deseas eliminar este color?",
      text: "No podrás revertir este paso",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const respuesta = await eliminarColorAPI(id);
        if (respuesta.status === 200) {
          Swal.fire({
            title: "Color eliminado!",
            text: `El color ${color.nombreColor} se elimino con éxito`,
            icon: "success",
          });
          const respuestaColores = await obtenerColoresAPI();
          if (respuestaColores.status === 200) {
            const coloresRestantes = await respuestaColores.json();
            setColores(coloresRestantes);
          }
        } else {
          Swal.fire({
            title: "Ocurrio un error",
            text: `El color no pudo ser eliminado, intentelo nuevamente dentro de unos minutos`,
            icon: "error",
          });
        }
      }
    });
  };

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
          <Button variant="warning" className="me-2" onClick={editarColor}>
            <i className="bi bi-pencil-square"></i>
          </Button>
          <Button variant="danger" onClick={() => eliminarColor(color.id)}>
            <i className="bi bi-trash3"></i>
          </Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default CardColor;
