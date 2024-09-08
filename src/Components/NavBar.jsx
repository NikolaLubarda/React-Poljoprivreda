import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white w-full fixed top-0 shadow-lg z-10">
      <div className="container mx-auto flex justify-center items-center py-4">
        <div className="mr-20 text-green-600">
          <h1 className="text-xl font-semibold">POLJOPRIVREDA</h1>
        </div>
        <ul className="flex space-x-6">
          <li>
            <Link
              to="/"
              className="text-gray-800 no-underline hover:text-green-600 hover:no-underline"
            >
              Pocetna
            </Link>
          </li>
          <li>
            <Link
              to="/o-nama"
              className="text-gray-800 no-underline hover:text-green-600 hover:no-underline"
            >
              O nama
            </Link>
          </li>
          <li>
            <Link
              to="/shop"
              className="text-gray-800 no-underline hover:text-green-600 hover:no-underline"
            >
              Prodaja
            </Link>
          </li>

          <li>
            <Link
              to="/kontakt"
              className="text-gray-800 no-underline hover:text-green-600 hover:no-underline"
            >
              Kontakt
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
