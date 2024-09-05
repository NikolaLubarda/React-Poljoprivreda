import React, { useEffect, useRef, useState } from "react";
import "./SplitSekcija.css"; // CSS za animacije

export default function SplitSekcija() {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className={`flex h-screen ${inView ? "animate-slide" : ""}`}>
      <div className="w-1/2 bg-black text-white flex items-center justify-center padding-green-1">
        <h2 className="text-3xl text-green-600 m-10">
          Poljoprivreda Svaki put naši kupci daju nam energiju i bude iskrenu
          želju da budemo još bolji, kako bi ispunili njihova očekivanja i
          ostali dosljedni kvalitetu koji nudimo.
        </h2>
      </div>
      <div className="w-1/2 bg-white text-black flex items-center justify-center ">
        <h2 className="text-3xl text-green-600 m-10">
          Zašto odabrati baš nas? Zato što mi zaista volimo to što radimo, što
          imamo dugogodišnje iskustvo koje nam je omogučilo da stalno
          unapređujemo naše znanje i zato što smo mi pravi partner koji će
          prepoznati šta Vam zaista treba. I zato što volimo raditi s ljudima!
        </h2>
      </div>
    </div>
  );
}
