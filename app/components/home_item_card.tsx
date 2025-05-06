'use client'

import { useState } from "react";
import { useRouter } from 'next/navigation';

export default function HomeItemCard() {

  const router = useRouter();

  const [isHovered,setHovered] = useState(false)

  return (
    <div className="w-full overflow-hidden cursor-pointer"
    role="button"
    tabIndex={0}
     onClick={() => router.push("/product/123")}
    >
      <div className="w-full h-[420px] border border-black overflow-hidden ">
        <img src={isHovered? "/images/42.jpg": "/images/22.jpg"} alt="" 
        className={`w-full h-full object-cover border border-gray-400 transition-transform duration-700 ease-in-out ${isHovered ? 'scale-125' : 'scale-110'}`}
        onMouseEnter={()=>setHovered(true)}
        onMouseLeave={()=>setHovered(false)}
        />
      </div>
      <div className="w-full h-28  flex flex-col">
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
