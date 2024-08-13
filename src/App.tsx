import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from "react-router-dom"
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { Login } from './pages/Login';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {/* <Navbar />
      <Login />
      <Home /> */}
    </>
  );
}

export default App;
