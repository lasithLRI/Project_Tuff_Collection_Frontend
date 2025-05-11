type InfoContainerProps = {
    id: string;
  };

export default function InfoContainer({id}:InfoContainerProps){
    return(
        <div className="w-full h-auto pl-4">
            <div className="w-full h-10 text-sm font-bold uppercase flex items-center">
                <p>frocks</p>
            </div>
            <div className="w-full h-24 justify-start flex items-center text-4xl font-bold">
                <p>Halter Neck Pleat Detail Maxi Dress - 020525</p>
            </div>
            <div className="w-full h-10  justify-start flex items-center text-sm">
                p1234gms-${id}
            </div>
            <div className="w-full h-20 pl-4 text-4xl font-bold flex items-center">
                <p>4,500.00</p>
            </div>
            <div className="w-full h-24 justify-center flex items-start text-sm flex-col">
                <p>1 usits left</p>
                <div className="progress-container py-2">
                    <div className="w-96 h-1 bg-amber-200 "></div>
                </div>
            </div>
            <div className="w-full h-auto  text-lg flex flex-col font-bold mb-2">
                <p>size</p>
                <div className="w-full flex-1 p-2 flex items-center gap-2">
                    <div>
                        <input type="radio" name="size" value="lg" id="size-lg" className="hidden peer" />
                        <label htmlFor="size-lg" className="w-12 h-12 flex items-center justify-center border border-black peer-checked:ring-2 cursor-pointer">LG</label>
                    </div>
                    <div>
                        <input type="radio" name="size" value="xl" id="size-xl" className="hidden peer" />
                        <label htmlFor="size-xl" className="w-12 h-12 flex items-center justify-center border border-black peer-checked:ring-2 cursor-pointer">XL</label>
                    </div>
                    <div>
                        <input type="radio" name="size" value="xxl" id="size-xxl" className="hidden peer" />
                        <label htmlFor="size-xxl" className="w-12 h-12 flex items-center justify-center border border-black peer-checked:ring-2 cursor-pointer">XXL</label>
                    </div>
                </div>
            </div>
            <div className="w-full h-auto  text-lg flex flex-col font-bold py-2">
                <p>color</p>
                <div className="w-full flex-1 p-2 flex items-center gap-2">

                        <div>
                            <input type="radio" name="color" value="1" id="color-1" className="hidden peer" />
                            <label htmlFor="color-1" className="w-12 h-12 rounded-full bg-amber-300 flex items-center justify-center border border-black peer-checked:ring-2 peer-checked:ring-offset-2  cursor-pointer"></label>
                        </div>
                        <div>
                            <input type="radio" name="color" value="2" id="color-2" className="hidden peer" />
                            <label htmlFor="color-2" className="w-12 h-12 rounded-full flex items-center justify-center bg-red-400 border border-black peer-checked:ring-2 peer-checked:ring-offset-2  cursor-pointer"></label>
                        </div>
                        <div>
                            <input type="radio" name="color" value="3" id="color-3" className="hidden peer" />
                            <label htmlFor="color-3" className="w-12 h-12 flex items-center justify-center rounded-full bg-green-500 border border-black peer-checked:ring-2 peer-checked:ring-offset-2  cursor-pointer"></label>
                        </div>

                </div>
                
                
            </div>
            
            <div className="w-full h-10  italic text-sm flex items-center py-2">
                <p>1 items left</p>
            </div>
            <div className="w-full h-44  flex flex-col px-4 text-base text-white justify-between mb-2">
                <button className="w-full h-12 bg-blue-900 rounded ">Buy now</button>
                <button className="w-full h-12 bg-gray-800 rounded ">Add to cart</button>
                <button className="w-full h-12 bg-gray-300 text-black rounded ">Add to Wishlist</button>
            </div>
            <div className="w-full h-48 text-base mt-4">
                <ul className="list-disc pl-8 mb-4 mt-2">
                    <li>Occasional & Evening Wear</li>
                    <li>Material : Polyester</li>
                    <li>Material Composition : 100% Polyester</li>
                </ul>

                <p>Model Height 5&apos; 8&quot; , wearing size UK 10 (Size Guide)</p>

                <p className="mt-4">Please bear in mind that the photo may be slightly different from the actual item in terms of color due to lighting conditions or the display used to view</p>

            </div>
        </div>
    );
}