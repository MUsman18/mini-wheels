export default function SearchBar({ filters, setFilters }) {
  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-gradient-to-b from-black to-blue-900 p-8 text-white text-center">
      <h2 className="text-3xl font-semibold mb-2">Find Used Cars in Pakistan</h2>
      <p className="mb-6">With thousands of cars, we have just the right one for you</p>

      <div className="flex flex-wrap justify-center gap-2">
        <input
          type="text"
          name="makeModel"
          placeholder="Make or Model"
          className="p-2 rounded text-black w-48"
          onChange={handleChange}
          value={filters.makeModel}
        />
        <select
          name="location"
          className="p-2 rounded text-black w-40"
          onChange={handleChange}
          value={filters.location}
        >
          <option value="">All Cities</option>
          <option value="Lahore">Lahore</option>
          <option value="Karachi">Karachi</option>
          <option value="Islamabad">Islamabad</option>
        </select>
        <select
          name="priceRange"
          className="p-2 rounded text-black w-40"
          onChange={handleChange}
          value={filters.priceRange}
        >
          <option value="">Price Range</option>
          <option value="0-1000000">Under 10 Lac</option>
          <option value="1000000-2000000">10-20 Lac</option>
          <option value="2000000-5000000">20-50 Lac</option>
          <option value="5000000-7000000">50-70 Lac</option>
          <option value="7000000-9000000">70-90 Lac</option>
          <option value="9000000-10000000">90-100 Lac</option>
        </select>
      </div>
    </div>
  );
}
