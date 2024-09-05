import React from "react";

export default function DodatneSlike() {
  return (
    <div>
      <div className=" flex items-center justify-center bg-gray-100">
        <div className="w-1/2 h-1/2 max-w-4xl p-10 text-center">
          <h1 className="text-4xl font-bold mb-4">
            POGLEDAJTE NEKE OD NASIH PROIZVODA
          </h1>
          <p className="text-lg">
            TRAKTORI, KOSAČICE, FREZE, PRIHRANA, BURAD, STABLA sve što možete da
            zamislite za vaše imanje mi imamo...
          </p>
        </div>
      </div>

      {/* Male slike ispod glavnog sadržaja */}
      <div className="flex space-x-2 p-10 overflow-x-auto">
        <div className="flex-shrink-1">
          <img
            src="https://via.placeholder.com/150"
            alt="Slika 1"
            className="w-40 h-40 object-cover rounded-md shadow-md transition-transform transform hover:scale-105"
          />
        </div>
        <div className="flex-shrink-1">
          <img
            src="https://via.placeholder.com/150"
            alt="Slika 2"
            className="w-40 h-40 object-cover rounded-md shadow-md transition-transform transform hover:scale-105"
          />
        </div>
        <div className="flex-shrink-0">
          <img
            src="https://via.placeholder.com/150"
            alt="Slika 3"
            className="w-40 h-40 object-cover rounded-md shadow-md transition-transform transform hover:scale-105"
          />
        </div>
        <div className="flex-shrink-0">
          <img
            src="https://via.placeholder.com/150"
            alt="Slika 4"
            className="w-40 h-40 object-cover rounded-md shadow-md transition-transform transform hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
}
