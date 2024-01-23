import "./App.css";
import { Routes, Route } from "react-router-dom";
// import logo from "./logo.svg";
import Login from "./Components/Login/login.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<h2>Home</h2>} />
  
      </Routes>
      <Login/>
    </div>
  );
}

export default App;