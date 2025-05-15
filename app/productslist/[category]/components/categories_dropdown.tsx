"use client";

import { useState } from "react";

export default function CategoriesDropdown(){
    const [isVisible,setIsVisible] = useState(true);
    return(
        <div className="w-full h-full px-2">
            <div className="w-full h-12 uppercase text-xl font-bold  flex justify-between items-center px-4">
                <p>categories</p>
                <button className="cursor-pointer h-full w-5" onClick={()=>setIsVisible(!isVisible)}>-</button>
            </div>

            {isVisible && <div className="w-full h-auto  ">
                <ul className="w-full h-auto flex flex-col items-start justify-center pl-16">
                    <li className="my-2">
                        <p>dfsgfgdfgfd</p>    
                    </li>    
                
                    <li className="my-2">
                        <p>dfsgfgdfgfd</p>    
                    </li> 

                    <li className="my-2">
                        <p>dfsgfgdfgfd</p>    
                    </li> 
                    

                    <li className="my-2">
                        <p>dfsgfgdfgfd</p>    
                    </li> 
                    
                    <li className="my-2">
                        <p>dfsgfgdfgfd</p>    
                    </li> 
                    <li className="my-2">
                        <p>dfsgfgdfgfd</p>    
                    </li> 
                    
                    
                </ul>    
            </div>}
            
        </div>
    );
}