"use client";


import { useState } from "react";

export default function CategoryCard() {
  const [isHovered, setHovered] = useState(false);
  return (
    <div className="w-full h-[46rem]  flex flex-col cursor-pointer">
      <div className="w-full flex-1  overflow-hidden border border-gray-400">
        <img
          src={isHovered ? "/images/42.jpg" : "/images/22.jpg"}
          alt=""
          className={`w-full h-full object-cover transition-transform duration-700 ease-in-out ${
            isHovered ? "scale-125" : "scale-110"
          }`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        />
      </div>
      <div className="w-full h-32  flex flex-col justify-center items-center">
        <div className="w-full h-16  text-xl pt-2 flex justify-center items-center text-center">
          <p>Halter Neck Pleat Detail Maxi Dress - 020525</p>
        </div>
        <div className="w-full flex-1 text-3xl px-2 flex font-bold justify-center items-center text-center">
          <p>4,500.00</p>
        </div>
      </div>
    </div>
  );
}
