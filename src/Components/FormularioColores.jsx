import { useEffect, useState } from "react";
import ListaColores from "./ListaColores";

const FormularioColores = () => {
  const [color, setColor] = useState("");
  const coloresLocalStorage = JSON.parse(localStorage.getItem('colores')) || [];
  const [listaColores, setListaColores] = useState(coloresLocalStorage);

  useEffect(() => {
    localStorage.setItem('colores', JSON.stringify(listaColores));
  }, [listaColores]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setListaColores([...listaColores, color]);
    setColor("");
  };

  const borrarColor = (nombreColor) => {
    const filterArray = listaColores.filter((color) => color !== nombreColor);
    setListaColores(filterArray);
  };

  return (
    <>
      <section className="container contenedorFormulario">
        <div className="py-3">
          <p className="lead">Administrar Colores</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="row justify-content-center align-items-center bg-info py-4 border border-dark">
            <div className="col-md-4 d-flex justify-content-center mb-2">
              <div className="cajaColor"></div>
            </div>
            <div className="col-md-8">
              <input
                type="text"
                placeholder="Ingrese un color Ej. blue"
                className="form-control"
                onChange={(e) => setColor(e.target.value)}
                value={color}
              />
            </div>
          </div>
          <div className="py-4 text-end">
            <button className="btn btn-primary">Guardar</button>
          </div>
        </form>
      </section>
      <ListaColores listaColores={listaColores} borrarColor={borrarColor}></ListaColores>
    </>
  );
};

export default FormularioColores;
