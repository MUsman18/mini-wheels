import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddCar() {
  const navigate = useNavigate();
  const [car, setCar] = useState({
    make: "",
    model: "",
    year: "",
    price: "",
    location: "",
    condition: "Used",
    image: "",
    description: "",
  });

  const handleChange = (e) => {
    setCar({ ...car, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  if (!car.make || !car.model || !car.price || !car.year || !car.location) {
    alert("Please fill all required fields");
    return;
  }

  const storedCars = JSON.parse(localStorage.getItem("cars") || "[]");
  const newCar = { ...car, id: Date.now() };
  localStorage.setItem("cars", JSON.stringify([...storedCars, newCar]));
  navigate("/");
};

  return (
    <div className="max-w-xl mx-auto p-4 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Post a Car Ad</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input name="make" type="text" placeholder="Make" required className="w-full p-2 border rounded" onChange={handleChange} />
        <input name="model" type="text" placeholder="Model" required className="w-full p-2 border rounded" onChange={handleChange} />
        <input name="year" type="number" placeholder="Year" required className="w-full p-2 border rounded" onChange={handleChange} />
        <input name="price" type="number" placeholder="Price" required className="w-full p-2 border rounded" onChange={handleChange} />
        <input name="location" type="text" placeholder="Location" required className="w-full p-2 border rounded" onChange={handleChange} />
        <select name="condition" className="w-full p-2 border rounded" onChange={handleChange}>
          <option>Used</option>
          <option>New</option>
        </select>
        <input name="image" type="text" placeholder="Image URL (optional)" className="w-full p-2 border rounded" onChange={handleChange} />
        <textarea name="description" placeholder="Description" className="w-full p-2 border rounded" onChange={handleChange}></textarea>
        <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">Post Ad</button>
      </form>
    </div>
  );
}
