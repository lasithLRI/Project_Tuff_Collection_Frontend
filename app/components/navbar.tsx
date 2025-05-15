'use client';

import localFont from "next/font/local";
import NavMenu from "./nav_menu";
import NavBottomButtons from "./nav_bottom_buttons";
import { useState } from "react";
import { useRouter } from "next/navigation";


const trajan = localFont({
  src: [
    {
      path: "../../public/fonts/Trajan.woff",
      weight: "400",
    },
  ],
});

export default function Navbar() {

  const router = useRouter()

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div className="w-full h-auto  flex justify-center py-2 pl-2  lg:pl-0 ">
      <div className="lg:w-3/4 w-full h-auto lg:mr-0 mr-2">
        <div className="w-full h-20 flex items-center justify-between">
          
          <div className="w-auto h-full lg:items-end flex items-center justify-center">
          <div className="w-16 h-16 flex lg:hidden  lg:mr-0 mr-4 rounded-lg relative">
            <button className="w-full h-full border border-gray-400 rounded-lg text-2xl cursor-pointer" onClick={toggleMenu}>
              <i className="ri-menu-line"></i>
              </button>

            {isOpen && (
        <div className="w-96 h-96 absolute border border-gray-400 top-16 left-0 rounded-lg shadow-lg z-50">
          {/* Your dropdown content here */}
        </div>
      )}

          </div>
          <button className={`${trajan.className} font-light text-gray-700 text-6xl cursor-pointer`} onClick={()=>router.push("/")}>Tuff</button>
          </div>
          <div className="w-auto h-full  flex items-center">
            <div className="w-20 h-10  mr-2">
              <button className="w-full h-full font-bold text-gray-400 cursor-pointer text-sm">Signup</button>
            </div>
            <div className="w-48 h-10 border-gray-400 border flex rounded-lg">
              <button
                type="submit"
                className="w-14 h-full  text-lg rounded-l-lg cursor-pointer text-gray-400"
              >
                <i className="ri-search-2-line"></i>
              </button>
              <input
                type="text"
                name="search"
                id="search"
                className="w-full h-full rounded-r-lg focus:outline-none focus:ring-0"
                placeholder="Search"
              />
            </div>
          </div>
        </div>
        <NavMenu></NavMenu>
        <NavBottomButtons/>
      </div>
    </div>
  );
}
