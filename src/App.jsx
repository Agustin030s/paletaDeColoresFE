import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FormularioColores from "./Components/FormularioColores";
import ListaColores from "./Components/ListaColores";

function App() {
  return (
    <div className="my-5">
      <FormularioColores></FormularioColores>
      <ListaColores></ListaColores>
    </div>
  );
}

export default App;
