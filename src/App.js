import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import AddCar from "./pages/AddCar";
import CarDetail from "./pages/CarDetail";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddCar />} />
        <Route path="/car/:id" element={<CarDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
