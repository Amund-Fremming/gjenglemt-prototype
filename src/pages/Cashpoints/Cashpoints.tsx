import { useState } from "react";
import Rewards from "./components/Rewards";
import Coupons from "./components/Coupons";

export default function Cashpoints() {
  const [toggleRewards, setToggleRewards] = useState(true);

  return (
    <>
      <div className=" p-4 mt-12 flex flex-col justify-center items-center">
        <div className="w-[100%] flex justify-evenly items-center font-serif">
          <h1
            className={`w-[100%] text-center text-gray-600 ${
              toggleRewards ? "border-b-2 border-orange-500" : ""
            }`}
            onClick={() => setToggleRewards(true)}
          >
            Belønninger
          </h1>
          <h1
            className={`w-[100%] text-center text-gray-600 ${
              toggleRewards ? "" : "border-b-2 border-orange-500"
            }`}
            onClick={() => setToggleRewards(false)}
          >
            Kuponger
          </h1>
        </div>
      </div>

      {toggleRewards && <Rewards />}
      {!toggleRewards && <Coupons />}
    </>
  );
}
