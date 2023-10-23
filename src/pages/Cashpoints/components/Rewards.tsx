import coin from "../../Profile/images/coin.png";
import dnb from "../images/dnb.jpeg";
import flax from "../images/flax.jpeg";
import kaffe from "../images/kaffe.jpeg";
import sekk from "../images/sekk.webp";

export default function Rewards() {
  return (
    <div className="p-4">
      <h1 className="w-full flex justify-start items-center text-center gap-2 text-2xl font-serif text-gray-600">
        Du har <img className="w-6" src={coin} />{" "}
        <b className="text-black">2050</b> poeng
      </h1>
      <h2 className="w-full flex justify-start mt-2 text-gray-600 text-xl font-serif">
        Prøv lykken 🎰
      </h2>
      <div className="w-full h-[40%] flex gap-2 mt-4">
        <div className="flex flex-col w-[50%]">
          <div className="w-full h-[210px] border-2 border-blue-300 shadow-xl rounded-lg overflow-hidden">
            <h3 className="px-2 pt-1 font-extrabold text-xl text-blue-900">
              Vinn stipend på 5000 kr
            </h3>
            <img src={dnb} className="p-2" />
            <div className="bg-cyan-400 h-[70px]">
              <p className="font-serif text-lg flex justify-center items-center text-center pt-1">
                100 poeng
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-gray-600 font-serif text-xl mt-2">
              Vinn ett stipend
            </h2>
            <h3 className="text-serif text-gray-600 font-serif">Danske bank</h3>
          </div>
        </div>
        <div className="flex flex-col w-[50%]">
          <div className="w-full h-[210px] border-2 border-gray-300 shadow-xl rounded-lg overflow-hidden">
            <img src={flax} className="h-[170px]" />
            <div className="bg-yellow-300 h-[40px]">
              <p className="font-serif text-lg flex justify-center items-center text-center pt-1">
                kommer snart
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-gray-600 font-serif text-xl mt-2">
              Million Flax
            </h2>
            <h3 className="text-serif text-gray-600 font-serif">Flax</h3>
          </div>
        </div>
      </div>

      <div className="w-full h-[40%] flex gap-2 mt-4 mb-32">
        <div className="flex flex-col w-[50%]">
          <div className="w-full h-[210px] border-2 border-blue-300 shadow-xl rounded-lg overflow-hidden">
            <h3 className="px-2 pt-1 font-extrabold text-xl text-blue-900">
              Vinn en sekk med tilbehør
            </h3>
            <img src={sekk} className="p-2 h-[110px]" />
            <div className="bg-cyan-400 h-[70px]">
              <p className="font-serif text-lg flex justify-center items-center text-center pt-1">
                600 poeng
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-gray-600 font-serif text-xl mt-2">
              Vinn en sekk
            </h2>
            <h3 className="text-serif text-gray-600 font-serif">Akademika</h3>
          </div>
        </div>
        <div className="flex flex-col w-[50%]">
          <div className="w-full h-[210px] border-2 border-gray-300 shadow-xl rounded-lg overflow-hidden">
            <img src={kaffe} className="h-[170px]" />
            <div className="bg-cyan-400 h-[40px]">
              <p className="font-serif text-lg flex justify-center items-center text-center pt-1">
                500 poeng
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-gray-600 font-serif text-xl mt-2">
              Gratis kaffe
            </h2>
            <h3 className="text-serif text-gray-600 font-serif">Godt brød</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
