import React from "react";
import Kontakt from "../Kontakt";

export default function ONama() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center bg-gray-100 p-10">
        <div className="max-w-4xl text-center bg-white p-10 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold mb-6 text-green-600">O Nama</h1>
          <p className="text-lg text-gray-700 mb-4">
            Naša firma, osnovana pre više od 20 godina, posvećena je pružanju
            kvalitetnih rešenja za poljoprivrednike širom regiona. Kroz
            inovativne proizvode, poput traktora, kosačica i drugih alata,
            pomažemo našim kupcima da unaprede svoja gazdinstva i povećaju
            produktivnost.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Naš tim stručnjaka, sa dugogodišnjim iskustvom u poljoprivredi,
            neprestano istražuje nove trendove i tehnologije kako bi našim
            klijentima pružio najbolje usluge i podršku. Naša vizija je da
            postanemo lider u industriji, oslanjajući se na tradicionalne
            vrednosti i inovativne pristupe.
          </p>
          <p className="text-lg text-gray-700">
            Kroz decenije rada, izgradili smo poverenje naših klijenata,
            pružajući kvalitetne proizvode, vrhunsku uslugu i podršku u svakom
            trenutku.
          </p>
        </div>
      </div>
      <Kontakt />
    </div>
  );
}
