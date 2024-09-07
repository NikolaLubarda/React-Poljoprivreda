import React from "react";

import Traktor from "../OpremaSlike/Traktor.jpg";
import Alati from "../OpremaSlike/Alati.jpg";
import Freza from "../OpremaSlike/Freza.jpg";
import Motokultivator from "../OpremaSlike/Motokultivator.png";
import Prikolica from "../OpremaSlike/Prikolica.jpg";
import Kosacica from "../OpremaSlike/Kosacica.jpg";
import TraktorKosacica from "../OpremaSlike/TraktorKosacica.jpg";
import RotacioniKultivator from "../OpremaSlike/RotacioniKultivator.jpg";

export default function DodatneSlike() {
  return (
    <div>
      {/* Glavni deo sa tekstom */}
      <a href="#" className="block">
        <div className="relative flex items-center justify-center bg-gray-100 p-10 rounded-lg overflow-hidden cursor-pointer group">
          {/* Pozadina sa zeleni efekat */}
          <div className="absolute inset-0 bg-green-400 opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
          <div className="relative w-full max-w-4xl p-10 text-center bg-white rounded-lg shadow-lg transition-transform duration-300 ease-in-out group-hover:translate-y-[-10px]">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">
              POGLEDAJTE NEKE OD NASIH PROIZVODA
            </h1>
            <p className="text-lg text-gray-600">
              TRAKTORI, KOSAČICE, FREZE, PRIHRANA, BURAD, STABLA sve što možete
              da zamislite za vaše imanje mi imamo...
            </p>
          </div>
        </div>
      </a>

      {/* Male slike ispod glavnog sadržaja */}
      <div className="flex space-x-2 p-10 overflow-x-auto">
        <div className="flex-1">
          <img
            src={Traktor}
            alt="Slika 1"
            className="w-full h-auto object-cover rounded-md shadow-md transition-transform transform hover:scale-105"
          />
        </div>
        <div className="flex-1">
          <img
            src={Freza}
            alt="Slika 2"
            className="w-full h-auto object-cover rounded-md shadow-md transition-transform transform hover:scale-105"
          />
        </div>
        <div className="flex-1">
          <img
            src={Alati}
            alt="Slika 3"
            className="w-full h-auto object-cover rounded-md shadow-md transition-transform transform hover:scale-105"
          />
        </div>
        <div className="flex-1">
          <img
            src={Kosacica}
            alt="Slika 4"
            className="w-full h-auto object-cover rounded-md shadow-md transition-transform transform hover:scale-105"
          />
        </div>
        <div className="flex-1">
          <img
            src={Motokultivator}
            alt="Slika 5"
            className="w-full h-auto object-cover rounded-md shadow-md transition-transform transform hover:scale-105"
          />
        </div>
        <div className="flex-1">
          <img
            src={Prikolica}
            alt="Slika 6"
            className="w-full h-auto object-cover rounded-md shadow-md transition-transform transform hover:scale-105"
          />
        </div>
        <div className="flex-1">
          <img
            src={RotacioniKultivator}
            alt="Slika 7"
            className="w-full h-auto object-cover rounded-md shadow-md transition-transform transform hover:scale-105"
          />
        </div>
        <div className="flex-1">
          <img
            src={TraktorKosacica}
            alt="Slika 8"
            className="w-full h-auto object-cover rounded-md shadow-md transition-transform transform hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
}
