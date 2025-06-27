import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import CarCard from "../components/CarCard";

export default function Home() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    makeModel: "",
    location: "",
    priceRange: ""
  });
  const [sortBy, setSortBy] = useState(""); // ✅ new state for sorting

  useEffect(() => {
    setTimeout(() => {
      const localCars = JSON.parse(localStorage.getItem("cars") || "[]");

      const defaultCars = [
        {
          id: 1,
          make: "Toyota",
          model: "Corolla",
          year: 2018,
          price: 4500000,
          location: "Lahore",
          condition: "Used",
          image: "/images/CorollaX.jpg",
          description: "Well maintained Toyota Corolla with no mechanical faults.",
        },
        {
          id: 2,
          make: "Honda",
          model: "Civic",
          year: 2020,
          price: 5800000,
          location: "Karachi",
          condition: "Used",
          image: "/images/CivicX.jpg",
          description: "2020 Honda Civic in excellent condition, single owner.",
        },
        {
          id: 3,
          make: "Suzuki",
          model: "Swift",
          year: 2025,
          price: 4900000,
          location: "Islamabad",
          condition: "New",
          image: "/images/Swift.jpg",
          description: "Brand new Suzuki Swift, zero meter.",
        },
      ];

      setCars([...defaultCars, ...localCars]);
      setLoading(false);
    }, 1000);
  }, []);

  // 🔍 Filter cars
  const filteredCars = cars.filter((car) => {
    const matchMakeModel =
      filters.makeModel === "" ||
      `${car.make} ${car.model}`.toLowerCase().includes(filters.makeModel.toLowerCase());

    const matchLocation =
      filters.location === "" || car.location === filters.location;

    const matchPrice =
      filters.priceRange === "" ||
      (() => {
        const [min, max] = filters.priceRange.split("-").map(Number);
        return car.price >= min && car.price <= max;
      })();

    return matchMakeModel && matchLocation && matchPrice;
  });

  // 🔃 Sort cars
  const sortedCars = [...filteredCars].sort((a, b) => {
    if (sortBy === "price-asc") return a.price - b.price;
    if (sortBy === "price-desc") return b.price - a.price;
    if (sortBy === "year-asc") return a.year - b.year;
    if (sortBy === "year-desc") return b.year - a.year;
    return 0;
  });

  return (
    <div>
      <SearchBar filters={filters} setFilters={setFilters} />

      {/* Sort Dropdown */}
      {!loading && (
        <div className="flex justify-end px-4">
          <select
            className="p-2 border rounded mb-2"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="">Sort By</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="year-asc">Year: Old to New</option>
            <option value="year-desc">Year: New to Old</option>
          </select>
        </div>
      )}

      {/* Spinner or Car Grid */}
      {loading ? (
        <div className="text-center py-10 text-gray-500 animate-pulse">
          Loading cars...
        </div>
      ) : (
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {sortedCars.length > 0 ? (
            sortedCars.map((car) => <CarCard key={car.id} car={car} />)
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No cars match your search.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
