export default function Colors(){
    return(
        <div className="w-full h-auto">
            <ul className="w-full h-auto grid grid-cols-5 gap-4 p-4 ">
                    <li className="flex justify-center items-center">
                            <div>
                                <input type="radio" name="color" value="1" id="color-1" className="hidden peer" />
                                <label htmlFor="color-1" className="w-12 h-12 rounded-full bg-amber-300 flex items-center justify-center border border-black peer-checked:ring-2 peer-checked:ring-offset-2  cursor-pointer"></label>
                            </div>
                    </li>

                    <li className="flex justify-center items-center">
                            <div>
                                <input type="radio" name="color" value="2" id="color-2" className="hidden peer" />
                                <label htmlFor="color-2" className="w-12 h-12 rounded-full flex items-center justify-center bg-red-400 border border-black peer-checked:ring-2 peer-checked:ring-offset-2  cursor-pointer"></label>
                            </div>
                    </li>

                    <li className="flex justify-center items-center">
                            <div>
                                <input type="radio" name="color" value="2" id="color-2" className="hidden peer" />
                                <label htmlFor="color-2" className="w-12 h-12 rounded-full flex items-center justify-center bg-red-400 border border-black peer-checked:ring-2 peer-checked:ring-offset-2  cursor-pointer"></label>
                            </div>
                    </li>

                    <li className="flex justify-center items-center">
                            <div>
                                <input type="radio" name="color" value="3" id="color-3" className="hidden peer" />
                                <label htmlFor="color-3" className="w-12 h-12 flex items-center justify-center rounded-full bg-green-500 border border-black peer-checked:ring-2 peer-checked:ring-offset-2  cursor-pointer"></label>
                            </div>
                    </li>

                    <li className="flex justify-center items-center">
                            <div>
                                <input type="radio" name="color" value="1" id="color-1" className="hidden peer" />
                                <label htmlFor="color-1" className="w-12 h-12 rounded-full bg-amber-300 flex items-center justify-center border border-black peer-checked:ring-2 peer-checked:ring-offset-2  cursor-pointer"></label>
                            </div>
                    </li>

                    <li className="flex justify-center items-center">
                            <div>
                                <input type="radio" name="color" value="2" id="color-2" className="hidden peer" />
                                <label htmlFor="color-2" className="w-12 h-12 rounded-full flex items-center justify-center bg-red-400 border border-black peer-checked:ring-2 peer-checked:ring-offset-2  cursor-pointer"></label>
                            </div>
                    </li>

                    <li className="flex justify-center items-center">
                            <div>
                                <input type="radio" name="color" value="2" id="color-2" className="hidden peer" />
                                <label htmlFor="color-2" className="w-12 h-12 rounded-full flex items-center justify-center bg-red-400 border border-black peer-checked:ring-2 peer-checked:ring-offset-2  cursor-pointer"></label>
                            </div>
                    </li>

                    <li className="flex justify-center items-center">
                            <div>
                                <input type="radio" name="color" value="3" id="color-3" className="hidden peer" />
                                <label htmlFor="color-3" className="w-12 h-12 flex items-center justify-center rounded-full bg-green-500 border border-black peer-checked:ring-2 peer-checked:ring-offset-2  cursor-pointer"></label>
                            </div>
                    </li>
                        
                        
                        
                    
            </ul>
        </div>
    );
}