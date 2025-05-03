export default function NavBottomButtons() {
  return (
    <div className="w-full h-16 items-center justify-end pb-2 lg:flex hidden">
      <div className="w-auto h-auto  flex">
        <button className="flex border border-gray-400 py-1 px-4 rounded-lg hover:border-black font-bold text-xl items-center hover:cursor-pointer">
          <i className="ri-heart-line"></i>
          <p className="text-sm ml-2">Wish List(0)</p>
        </button>

        <button className="flex border border-gray-400 py-1 px-4 rounded-lg hover:border-black ml-4 font-bold  text-xl items-center hover:cursor-pointer">
        <i className="ri-shopping-cart-2-fill"></i>
          <p className="text-sm ml-2">Cartt(0)</p>
        </button>
      </div>
    </div>
  );
}
