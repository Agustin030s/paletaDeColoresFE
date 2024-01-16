import CardColor from "./CardColor";

const ListaColores = ({listaColores, borrarColor}) => {
  return (
    <section className="container my-5">
      <div className="row justify-content-center">
        {listaColores.map((color, index) => <CardColor key={index} color={color} borrarColor={borrarColor}></CardColor>)}
      </div>
    </section>
  );
};

export default ListaColores;
