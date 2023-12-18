const CardColor = () => {
  return (
    <article className="card">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Nombre Color</li>
          <li class="list-group-item d-flex justify-content-center">
            <div className="cajaColorCard"></div>
          </li>
          <li class="list-group-item text-end">
            <button className="btn btn-danger">Borrar</button>
          </li>
        </ul>
    </article>
  );
};

export default CardColor;
