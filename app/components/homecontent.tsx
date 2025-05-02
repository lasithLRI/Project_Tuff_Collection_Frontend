import MainSection from "./main_section";

export default function HomeContent() {
  return (
    <div className="w-full h-full bg-amber-400 flex justify-center flex-col 
    items-center px-4 xl:px-0">
      <MainSection></MainSection>

      <MainSection></MainSection>

      <MainSection></MainSection>
    </div>
  );
}
