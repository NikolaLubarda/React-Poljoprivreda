import React from "react";
import Kontakt from "../Kontakt";

export default function KontaktPlus() {
  return (
    <div>
      <div className="bg-gray-100 py-10 px-5 mt-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Informacije o kontaktu */}
          <div className="space-y-5">
            <h2 className="text-3xl font-bold text-green-600">
              Kontaktirajte nas
            </h2>
            <p className="text-gray-800">
              Adresa: Ulica Poljoprivrede 123, 71000 Sarajevo, BiH
            </p>
            <p className="text-gray-800">Telefon: +387 33 123 456</p>
            <p className="text-gray-800">Email: info@poljoprivreda.ba</p>
            <p className="text-gray-800">
              Radno vrijeme: Pon - Pet: 08:00 - 17:00
            </p>
          </div>

          {/* Mapa sa GPS lokacijom */}
          <div>
            <iframe
              title="GPS Lokacija"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28521.476164037477!2d18.333045987350957!3d43.85625889922588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4758c8c94e5f4bf1%3A0x56cb8d8e80e17f2!2sSarajevo!5e0!3m2!1sen!2sba!4v1613030389532!5m2!1sen!2sba"
              width="100%"
              height="300"
              className="rounded-md shadow-md"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      <Kontakt />
    </div>
  );
}
