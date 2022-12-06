import "./App.css";
import Principal from "./Componentes/Principal";
import Mostrar from "./Componentes/Mostrar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Principal />} />
          <Route path="/mostrarfavoritas" element={<Mostrar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
