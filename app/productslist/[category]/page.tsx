import { use } from "react";
import SideBar from "./components/sidebar";
import CategoryContent from "./components/categorycontent";

export default function ProductsList({params,}: {params: Promise<{ category: string }>;}){

    

    const { category } = use(params);

    const decodedSlug = decodeURIComponent(category);
    return(
        <div className="w-3/4 h-full mx-auto ">

            <div className="w-full h-20 flex items-center justify-between px-4 border-b-2">
                <h1 className="text-4xl uppercase font-bold">{decodedSlug}</h1>
                <button className="px-4 py-2 bg-amber-600 rounded ">Date: New t old</button>
            </div>

            <div className="w-full h-auto  flex">
                <div className="w-1/4 h-full ">
                    <SideBar/>
                </div>
                <div className="w-3/4 h-full p-4 ">
                    <CategoryContent/>
                </div>
            </div>
            
        </div>
    );
}