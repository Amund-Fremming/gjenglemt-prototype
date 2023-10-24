import pin from "./images/pin.png";

export default function CaseFound() {
  return (
    <>
      <div className="flex flex-col p-4 justify-center items-center w-full h-full gap-2 pt-12 bg-[#FFF8F8]">
        {/* Endre denne til tabbing for mistet eller funnet */}
        <h1 className="text-4xl font-extrabold font-serif text-[#0B093C]">
          FUNNET
        </h1>
        <img className="flex justify-center items-center w-[50%]" src={pin} />
        <div className="pt-2 pb-20 w-[320px] border-[#0B093C] rounded-2xl ">
          <div className="flex justify-between border-x-2 border-t-2 rounded-t-2xl h-[58px] border- border-[#0B093C] items-center px-4">
            <h1 className="text-md font-semibold text-[#0B093C]">
              Beskrivelse
            </h1>
            <h1 className="text-xl font-semibold text-[#0B093C]">&gt;</h1>
          </div>
          <div className="flex justify-between border-x-2 border-t-2 rounded-t-2xl h-[58px] border- border-[#0B093C] items-center px-4">
            <h1 className="text-md font-semibold text-[#0B093C]">Lokasjon</h1>
            <h1 className="text-xl font-semibold text-[#0B093C]">&gt;</h1>
          </div>
          <div className="flex justify-between border-x-2 border-t-2 rounded-t-2xl h-[58px] border- border-[#0B093C] items-center px-4">
            <h1 className="text-md font-semibold text-[#0B093C]">Farge</h1>
            <h1 className="text-xl font-semibold text-[#0B093C]">&gt;</h1>
          </div>
          <div className="flex justify-between border-x-2 border-t-2 rounded-t-2xl h-[58px] border- border-[#0B093C] items-center px-4">
            <h1 className="text-md font-semibold text-[#0B093C]">Størrelse</h1>
            <h1 className="text-xl font-semibold text-[#0B093C]">&gt;</h1>
          </div>
          <div className="flex justify-between border-x-2 border-t-2 rounded-t-2xl h-[58px] border- border-[#0B093C] items-center px-4 z-9">
            <h1 className="text-md font-semibold text-[#0B093C]">Kategori</h1>
            <h1 className="text-xl font-semibold text-[#0B093C]">&gt;</h1>
          </div>
          <div className="flex justify-between border-x-2 border-t-2 rounded-t-2xl h-[68px] border- border-[#0B093C] items-center px-4 border-b-2 rounded-b-xl z-10">
            <h1 className="text-md font-semibold text-[#0B093C]">Bilder</h1>
            <h1 className="text-xl font-semibold text-[#0B093C]">&gt;</h1>
          </div>
        </div>
      </div>
    </>
  );
}
