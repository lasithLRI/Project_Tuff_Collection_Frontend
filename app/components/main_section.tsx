import HomeItemCard from "./home_item_card";

export default function MainSection(){
    return(
        <div className="xl:w-2/3 w-full h-full bg-pink-500 my-4">
          <div className="w-full h-32 bg-amber-200"></div>
          <div className="w-full h-auto bg-purple-400 grid px-4 xl:px-0 
          xl:grid-cols-4 xl:grid-rows-3 
          sm:grid-cols-2 sm:grid-rows-6 gap-4 
          md:grid-cols-3 md:grid-rows-4
          grid-cols-1 grid-rows-6">


            
            <HomeItemCard></HomeItemCard>

            <HomeItemCard></HomeItemCard>

            <HomeItemCard></HomeItemCard>

            <HomeItemCard></HomeItemCard>

            <HomeItemCard></HomeItemCard>

            <HomeItemCard></HomeItemCard>

            <HomeItemCard></HomeItemCard>

            <HomeItemCard></HomeItemCard>

            <HomeItemCard></HomeItemCard>

            <HomeItemCard></HomeItemCard>

            <HomeItemCard></HomeItemCard>

            <HomeItemCard></HomeItemCard>
            
          </div>

        </div>
    );
}