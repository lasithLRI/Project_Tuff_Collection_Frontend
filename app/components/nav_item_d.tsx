'use client';

import { useRouter } from 'next/navigation';

type NavItemDProps = {
    name: string;
    items:string[]
  };

export default function NavItemD({name,items}:Readonly<NavItemDProps>) {

  const router = useRouter();

  return (
    <li className="relative group">
      <div className="flex flex-col items-end">
        <button
          className="flex items-center text-sm font-bold"
          aria-haspopup="true"
          aria-expanded="false"
          onClick={()=>router.push(`/productslist/${name}`)}
        >
          <p className="mr-1">{name}</p>
          <i className="ri-arrow-down-s-line"></i>
        </button>

        <div className="absolute mt-4 min-w-[12rem] w-auto rounded-lg bg-white border border-black hidden group-hover:flex flex-col z-10 shadow-md px-4">
          <ul className="w-full">
            {items.map((item, index) => (
              <li key={index}>
                <button className="w-full text-left px-4 py-2 hover:bg-gray-100 flex whitespace-nowrap uppercase font-bold text-sm" onClick={()=>router.push(`/productslist/${item}`)}>
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
}
