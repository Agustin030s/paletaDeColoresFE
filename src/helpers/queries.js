import Swal from "sweetalert2";

const URI_API_COLORES = import.meta.env.VITE_API_COLORES;

export const obtenerColoresAPI = async () => {
  try {
    const respuesta = await fetch(URI_API_COLORES);
    return respuesta;
  } catch (error) {
    Swal.fire({
      title: "Servicio no disponible momentaneamente",
      text: `Sucedio el error "${error}", intentelo nuevamente en unos minutos`,
      icon: "error",
    });
  }
};

export const agregarColorAPI = async (color) => {
  try {
    const respuesta = await fetch(URI_API_COLORES, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(color),
    });
    return respuesta;
  } catch (error) {
    Swal.fire({
      title: "Servicio no disponible momentaneamente",
      text: `Sucedio el error "${error}", intentelo nuevamente en unos minutos`,
      icon: "error",
    });
  }
};

export const obtenerColorAPI = async (id) => {
  try {
    const respuesta = await fetch(`${URI_API_COLORES}/${id}`);
    return respuesta;
  } catch (error) {
    Swal.fire({
      title: "Servicio no disponible momentaneamente",
      text: `Sucedio el error "${error}", intentelo nuevamente en unos minutos`,
      icon: "error",
    });
  }
};

export const eliminarColorAPI = async (id) => {
  try {
    const respuesta = await fetch(`${URI_API_COLORES}/${id}`, {
      method: "DELETE",
    });
    return respuesta;
  } catch (error) {
    Swal.fire({
      title: "Servicio no disponible momentaneamente",
      text: `Sucedio el error "${error}", intentelo nuevamente en unos minutos`,
      icon: "error",
    });
  }
};
