import "./App.css";
import Principal from "./Componentes/Principal";
import Mostrar from "./Componentes/Mostrar";
import Login from "./Componentes/Login";
import Register from "./Componentes/Register";
import Profile from "./Componentes/Profile";
import  {AuthProvider} from "./context/authContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <AuthProvider> {/* con este  authProvider le permite saber de donde sacar el usuario,de donde vienen los datos */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Principal />} />
          <Route path="/mostrarfavoritas" element={<Mostrar />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/Register" element={<Register/>} />
          <Route path="/Profile" element={<Profile/>} />
        </Routes>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
