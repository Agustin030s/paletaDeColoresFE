const CardColor = ({ color, borrarColor }) => {
  const esNombreColorValido = (col) => {
    const coloresValidos = [
      "blue",
      "red",
      "green",
      "yellow",
      "purple",
      "silver",
      "maroon",
      "white",
      "gray",
      "lime",
      "aquamarine",
      "aliceblue",
      "coral",
      "gold"
    ];
    return coloresValidos.includes(col.toLowerCase());
  };

  const colorFondo = esNombreColorValido(color) ? color : 'black';

  return (
    <div className="col-md-4 col-lg-3 mb-3">
      <article className="card">
        <div className="card-header">
          <h6>{color.toUpperCase()}</h6>
        </div>
        <div className="card-body d-flex justify-content-center">
          <div className="cajaColorCard" style={{ background: colorFondo }}></div>
        </div>
        <div className="card-footer text-end">
          <button className="btn btn-danger" onClick={() => borrarColor(color)}>Borrar</button>
        </div>
      </article>
    </div>
  );
};

export default CardColor;
