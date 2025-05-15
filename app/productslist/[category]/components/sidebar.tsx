import CategoriesDropdown from "./categories_dropdown";
import Colors from "./colours";
import Sizes from "./sizes";

export default function SideBar(){
    return(
        <div className="w-full h-auto">
            <div className="w-full h-auto ">
                <CategoriesDropdown/>
            </div>
            <div className="w-full h-auto  px-2 mt-4">
                <div className="w-full h-12 text-xl uppercase font-bold px-4 ">sizes</div>
                <Sizes/>
            </div>
            <div className="w-full h-auto  px-2">
                <div className="w-full h-12 text-xl uppercase font-bold px-4 ">colors</div>
                <Colors/>
            </div>
        </div>
    );
}