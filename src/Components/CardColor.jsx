const CardColor = () => {
  return (
    <div className="card">
      <div className="card-header">
        <p>Nombre Color</p>
      </div>
      <div className="card-body d-flex justify-content-center">
        <div className="cajaColorCard"></div>
      </div>
      <div className="card-footer text-end">
        <button className="btn btn-danger">Borrar</button>
      </div>
    </div>
  );
};

export default CardColor;
