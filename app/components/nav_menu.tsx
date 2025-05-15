
import NavItem from "./nav_item";
import NavItemD from "./nav_item_d";

const cat = {
  "WOMEN": [
    "DRESSES",
    "CASUAL WEAR",
    "OFFICE WEAR",
    "WHITE WEAR",
    "SKIRTS",
    "PANTS",
    "JUMPSUITS",
    "T-SHIRTS",
    "DENIM",
    "ACCESSORIES"
  ],
  "MEN": [
    "SHIRTS",
    "T-SHIRTS",
    "SHORTS",
    "PANTS",
    "DENIM",
    "ACCESSORIES"
  ],
  "KIDS & BABY": [
    "BOYS' CLOTHING (3-16)",
    "GIRL'S CLOTHING (3-16)"
  ],
  "MOTHER & BABY": [
    "BABY WEAR",
    "BABY CARE & ACCESSORIES"
  ]
}

export default function NavMenu() {

  return (
    <div className="w-[calc(100%-64px)] h-8 ml-auto lg:flex items-center hidden ">
      <ul className="flex items-center justify-between w-full h-full">
        
        {Object.entries(cat).map(
          ([category,items])=>(
            
            <NavItemD key={category} name={category} items={items}/>
          )
        )}
        {/* <NavItemD name="WOMEN" />
        <NavItemD name="MEN" />
        <NavItemD name="KIDS & BABY" />
        <NavItemD name="MOTHER & BABY" /> */}

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
