import React, { useEffect, useState } from "react";
import axios from "axios";
import Kontakt from "../Kontakt";

export default function Shop() {
  const [products, setProducts] = useState([]);

  // Fetch products from the API
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div>
      <div className="container mx-auto p-10">
        <h1 className="text-5xl font-bold text-center mb-10 text-green-700 mt-10">
          Proizvodi
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative border rounded-lg shadow-lg p-5 bg-white hover:shadow-2xl transition-all duration-300"
            >
              {/* Slika proizvoda */}
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-56 object-cover mb-4 transition-transform duration-300 group-hover:scale-105 rounded-lg"
              />
              {/* Naslov proizvoda */}
              <h2 className="text-xl font-semibold mb-2 group-hover:text-green-600 transition-colors duration-300">
                {product.title}
              </h2>
              {/* Cena proizvoda */}
              <p className="text-lg text-gray-700 font-bold mb-4">
                ${product.price.toFixed(2)}
              </p>
              {/* Opis proizvoda */}
              <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                {product.description.substring(0, 100)}...
              </p>
              {/* Dugme za dodavanje u korpu */}
              <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white py-2 px-6 rounded-full opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                Dodaj u korpu
              </button>
            </div>
          ))}
        </div>
      </div>
      <Kontakt />
    </div>
  );
}
