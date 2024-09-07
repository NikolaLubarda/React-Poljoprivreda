import React from "react";

export default function Kontakt() {
  return (
    <div
      className="relative bg-cover bg-center h-[50vh]"
      style={{
        backgroundImage: `url('https://investintrebinje.com/wp-content/uploads/2018/06/poljoprivreda.jpg')`,
      }} // Smanji sliku za 40%
    >
      {/* Overlay sa transparencijom */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Sadržaj */}
      <div className="relative flex flex-row items-center justify-between h-full text-white p-10">
        {/* Leva strana - Kontaktirajte Nas i Email */}
        <div className="flex flex-col text-left space-y-8 w-1/2">
          <h1 className="text-5xl font-bold">Kontaktirajte Nas</h1>
          <div>
            <p className="text-2xl">
              Adresa: Ulica Poljoprivredna 123, 71000 Sarajevo
            </p>
            <p className="text-2xl">Telefon: +387 33 123 456</p>
          </div>
          <div>
            <p className="text-lg">Email: info@poljoprivredafirma.com</p>
          </div>
        </div>

        {/* Desna strana - Radno vrijeme */}
        <div className="flex flex-col text-right space-y-8 w-1/2">
          <h2 className="text-3xl font-bold">Radno Vrijeme</h2>
          <div>
            <p className="text-xl">Ponedjeljak - Petak: 08:00 - 16:00</p>
            <p className="text-xl">Subota: 09:00 - 14:00</p>
            <p className="text-xl">Nedjelja: Zatvoreno</p>
          </div>
        </div>
      </div>
    </div>
  );
}
