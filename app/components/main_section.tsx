import HomeItemCard from "./home_item_card";

export default function MainSection() {
  return (
    <div className="xl:w-3/4 w-full h-full my-4">
      <div className="w-full h-32 flex justify-center items-center">
        <div className="inline-block text-center">
          <p className="text-4xl font-semibold">NEW ARRIVALS</p>
          <div className="mt-4 mx-auto w-12 border-b-2 border-black"></div>
        </div>
      </div>
      <div
        className="w-full h-auto grid px-4 xl:px-0 
          xl:grid-cols-4 
          sm:grid-cols-2  
          md:grid-cols-3 
          grid-cols-1 auto-rows-auto gap-4"
      >
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
