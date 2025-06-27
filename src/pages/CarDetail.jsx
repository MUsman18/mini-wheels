import { useParams } from "react-router-dom";
import carData from "../data/cars.json";

export default function CarDetail() {
  const { id } = useParams();
  const car = carData.find((car) => car.id === parseInt(id));

  if (!car) return <div className="p-4">Car not found!</div>;

  return (
    <div className="p-4 max-w-4xl mx-auto bg-white rounded shadow">
      <img
  src={car.image || "https://via.placeholder.com/600x400"}
  alt={`${car.make} ${car.model}`}
  className="w-full h-[400px] object-contain bg-white rounded"
/>
      <h2 className="text-3xl font-bold mt-4">{car.make} {car.model}</h2>
      <p className="text-gray-600 text-sm">{car.year} • {car.location}</p>
      <p className="text-green-600 font-semibold text-xl mt-2">PKR {car.price.toLocaleString()}</p>
      <p className="text-sm text-gray-500">{car.condition}</p>

      <div className="mt-4">
        <h3 className="font-semibold text-lg mb-1">Description</h3>
        <p>{car.description}</p>
      </div>

      <div className="mt-6">
        <h3 className="font-semibold text-lg mb-1">Contact Info</h3>
        <p>Name: John Doe</p>
        <p>Phone: 0300-1234567</p>
        <p>Email: seller@example.com</p>
      </div>
    </div>
  );
}
