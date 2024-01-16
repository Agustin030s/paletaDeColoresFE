const CardColor = () => {
  return (
    <div className="col-md-4 col-lg-3 mb-3"> 
    <article className="card">
      <div className="card-header">
        <h6>Nombre Color</h6>
      </div>
      <div className="card-body d-flex justify-content-center">
        <div className="cajaColorCard"></div>
      </div>
      <div className="card-footer text-end">
        <button className="btn btn-danger">Borrar</button>
      </div>
    </article>
    </div>
  );
};

export default CardColor;
