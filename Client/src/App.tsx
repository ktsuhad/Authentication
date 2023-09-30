import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Signup from "./Components/Signup/Signup";
import Login from "./Components/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
