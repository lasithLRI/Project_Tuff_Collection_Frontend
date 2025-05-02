
import NavItem from "./nav_item";
import NavItemD from "./nav_item_d";

export default function NavMenu() {
  return (
    <div className="w-[calc(100%-8rem)] h-8 ml-auto flex items-center">
      <ul className="flex items-center justify-between w-full h-full">
        
        <NavItemD name="WOMEN" />
        <NavItemD name="MEN" />
        <NavItemD name="KIDS & BABY" />
        <NavItemD name="MOTHER & BABY" />

        <NavItem name="OFFERS"/>
        <NavItem name="ACCESSORIES"/>
        <NavItem name="CASUAL WEAR"/>
        <NavItem name="DRESSES"/>
        <NavItem name="DENIM"/>
        <NavItem name="OFFICE WEAR"/>
        
      </ul>
    </div>
  );
}
