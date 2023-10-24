import kart from "./images/kart.png";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center pt-20">
        <img src={kart} />
        <button className="rounded-r-full rounded-l-full h-[50px] w-[210px] bg-orange-500 text-center text-white  text-xl font-semibold">
          Logg inn med vipps
        </button>
      </div>
    </>
  );
}
