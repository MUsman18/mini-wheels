import { Link } from "react-router-dom";

export default function CarCard({ car }) {
  return (
    <Link to={`/car/${car.id}`} className="block border rounded shadow hover:shadow-lg transition bg-white">
      <img
  src={car.image || "https://via.placeholder.com/300x200"}
  alt={`${car.make} ${car.model}`}
  className="w-full h-56 object-contain bg-white rounded-t"
/>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{car.make} {car.model}</h3>
        <p>{car.year} • {car.location}</p>
        <p className="text-green-600 font-bold mt-1">PKR {car.price.toLocaleString()}</p>
        <p className="text-sm text-gray-500">{car.condition}</p>
      </div>
    </Link>
  );
}
