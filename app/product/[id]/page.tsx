import { use } from "react";
import ImagesContainer from "./components/images_container";
import InfoContainer from "./components/info_container";
import HomeItemCard from "@/app/components/home_item_card";

export default function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  return (
    <div className="w-full h-full flex justify-center items-center flex-col text-2xl">
      <div className="w-3/4 h-auto ">
        <div className="w-full h-20 "></div>
        <div className="w-full h-auto flex">
          <div className="h-full flex-1/2 ">
            <ImagesContainer />
          </div>
          <div className="h-full flex-1/2">
            <InfoContainer id={id}/>
          </div>
        </div>

        <div className="w-full h-auto">
          <div className="w-full h-20 uppercase text-xl font-bold flex items-center">
            <p>Related Items</p>
          </div>
          <div className="w-full h-auto grid grid-cols-4 gap-4 ">
            <HomeItemCard />
            <HomeItemCard />
            <HomeItemCard />
            <HomeItemCard />
          </div>
        </div>
      </div>
    </div>
  );
}
