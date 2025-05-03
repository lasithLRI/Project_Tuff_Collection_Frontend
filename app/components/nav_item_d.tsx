
type NavItemDProps = {
    name: string;
  };

export default function NavItemD({name}:Readonly<NavItemDProps>) {
  return (
    <li className="relative group">
      <a href="#">
        <div className="w-auto h-auto flex items-center text-sm justify-end">
          <p className="mr-1 font-bold">{name}</p>
          <i className="ri-arrow-down-s-line"></i>
        </div>
      </a>
      <div className="absolute w-96 mt-2 h-36 bg-amber-200 border border-black hidden group-hover:block z-10"></div>
    </li>
  );
}
