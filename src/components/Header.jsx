import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-black text-white flex justify-between items-center px-6 py-4">
      <h1 className="text-xl font-bold">MiniWheels</h1>
      <nav className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/add" className="bg-red-600 px-3 py-1 rounded hover:bg-red-700">Post an Ad</Link>
      </nav>
    </header>
  );
}
