import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-gray-900 text-white p-4 flex items-center justify-between">
      <div className="text-xl font-bold">LOGO</div>
      <nav className="space-x-4">
        <Link to="/products" className="hover:text-yellow-400">Home</Link>
        <Link to="/recipes" className="hover:text-yellow-400">Food</Link>
        <Link to="/users" className="hover:text-yellow-400">User</Link>
      </nav>
      <Link to="/login">
        <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-md">
          Login
        </button>
      </Link>
    </header>
  );
}
