import { useState } from "react";

export default function Cashpoints() {
  const [toggleRewards, setToggleRewards] = useState(true);

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center items center font-serif text-2xl text-gray-500 font-bold h-12 mt-8 mb-6">
          Cash in dine poeng
        </div>

        <div className="w-[100%] flex justify-evenly items-center font-serif">
          <h1
            className={`w-[100%] text-center ${
              toggleRewards ? "border-b-2 border-orange-500" : ""
            }`}
            onClick={() => setToggleRewards(true)}
          >
            Belønninger
          </h1>
          <h1
            className={`w-[100%] text-center ${
              toggleRewards ? "" : "border-b-2 border-orange-500"
            }`}
            onClick={() => setToggleRewards(false)}
          >
            Kuponger
          </h1>
        </div>
      </div>
    </>
  );
}
