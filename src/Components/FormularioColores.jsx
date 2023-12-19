const FormularioColores = () => {
  return (
    <section className="container contenedorFormulario">
      <div className="py-3">
        <p className="lead">Administrar Colores</p>
      </div>
      <form action="">
        <div className="row justify-content-center align-items-center bg-info py-4 border border-dark">
          <div className="col-md-4 d-flex justify-content-center mb-2">
            <div className="cajaColor"></div>
          </div>
          <div className="col-md-8">
            <input
              type="text"
              placeholder="Ingrese un color Ej. Blue"
              className="form-control"
            />
          </div>
        </div>
        <div className="py-4 text-end">
          <button className="btn btn-primary">Guardar</button>
        </div>
      </form>
    </section>
  );
};

export default FormularioColores;
