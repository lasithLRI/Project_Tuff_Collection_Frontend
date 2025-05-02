
type NavItemDProps = {
    name: string;
  };

export default function NavItem({name}:Readonly<NavItemDProps>) {
  return (
    <li>
      <a href="#">
        <div className="w-auto h-auto flex items-center text-sm">
          <p className="mr-1 font-bold">{name}</p>
        </div>
      </a>
    </li>
  );
}
