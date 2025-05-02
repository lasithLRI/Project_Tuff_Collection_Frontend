import localFont from "next/font/local";
import NavMenu from "./nav_menu";
import NavBottomButtons from "./nav_bottom_buttons";


const trajan = localFont({
  src: [
    {
      path: "../../public/fonts/Trajan.woff",
      weight: "400",
    },
  ],
});

export default function Navbar() {
  return (
    <div className="w-full h-auto  flex justify-center pt-2">
      <div className="w-2/3 h-auto">
        <div className="w-full h-20 flex items-center justify-between">
          <div className="w-auto h-full items-end flex">
          <p className={`${trajan.className} font-light text-gray-700 text-6xl`}>Tuff</p>
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
