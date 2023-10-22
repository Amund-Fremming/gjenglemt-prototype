import profile from "./images/profile.png";
import coin from "./images/coin.png";

export default function Profile() {
  return (
    <>
      <div className="mb-20 flex flex-col items-center h-screen w-full justify-center">
        <img className="w-[50%] mb-8" src={profile} />
        <div className="flex justify-center items-centers mb-4">
          <img className="mx-1" src={coin} />
          <p className="mx-1 flex justify-center items-center font-bold text-xl">
            2050
          </p>
        </div>
        <div className="flex flex-col justify-start w-[300px]">
          <div className="flex flex-col border-b-2 border-black mb-4">
            <label className="text-sm font-serif mb-4 text-gray-600">
              Fornavn
            </label>
            <input
              type="text"
              className="font-serif text-xl outline-none"
              value={"Ola"}
            />
          </div>
          <div className="flex flex-col border-b-2 border-black mb-4">
            <label className="text-sm font-serif mb-4 text-gray-600">
              Etternavn
            </label>
            <input
              type="text"
              className="font-serif text-xl outline-none"
              value={"Nordmann"}
            />
          </div>
          <div className="flex flex-col border-b-2 border-black mb-4">
            <label className="text-sm font-serif mb-4 text-gray-600">
              E-post
            </label>
            <input
              type="text"
              className="font-serif text-xl outline-none"
              value={"OlaNordmann@gmail.com"}
            />
          </div>
        </div>
        <button className="mb-10 mt-6 font-semibold text-xl rounded-xl shadow-xl px-6 py-2 bg-[#806FA3] text-white">
          Rediger Profil
        </button>
      </div>
    </>
  );
}
