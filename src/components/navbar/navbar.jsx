// components/Header.js
import Link from "next/link";

const Header = () => (
  <header className="bg-gray-800 text-white p-4">
    <div className="container flex items-center justify-between">
      <Link href="/">
        <h1 className="text-3xl font-bold">Iqra Albtros</h1>
      </Link>

      <nav className="hidden lg:flex space-x-4">
        <Link href="/" className="hover:text-gray-400">
          Home
        </Link>
        <Link href="/about" className="hover:text-gray-400">
          About Me
        </Link>
        <Link href="/services" className="hover:text-gray-400">
          Services
        </Link>
        <Link href="/contact" className="hover:text-gray-400">
          Contact
        </Link>
      </nav>
    </div>
  </header>
);

export default Header;
