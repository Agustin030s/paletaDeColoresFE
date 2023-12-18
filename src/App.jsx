import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FormularioColores from "./Components/FormularioColores";
import CardColor from "./Components/CardColor";

function App() {
  return (
    <div className="my-5">
      <FormularioColores></FormularioColores>
      <CardColor></CardColor>
    </div>
  );
}

export default App;
