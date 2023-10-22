import kart from "./images/norgekart.webp";
import { BsFillPersonFill } from "react-icons/bs";
import { RiLockPasswordFill } from "react-icons/ri";

export default function HomePrev() {
  return (
    <div className="bg-[#DCEFEB] h-screen">
      <img src={kart} />
      <div className="flex flex-col items-center bg-[#DCEFEB]">
        <h1 className="font-serif text-5xl mt-2 pb-6 text-gray-700">
          Gjenglemt
        </h1>

        <div className="text-gray-600 font-serif flex w-full justify-evenly mb-2">
          <h2>Login</h2>
          <h2>Register</h2>
        </div>
        <div className="w-[80%] bg-white shadow-2xl h-[190px] rounded-xl flex flex-col justify-center items-center">
          <div className="flex justify-center items-center my-4 border-b-2 border-black text-xl">
            <BsFillPersonFill />
            <input className="outline-none" type="text" />
          </div>
          <div className="flex my-4 border-b-2 border-black text-xl justify-center items-center">
            <RiLockPasswordFill />
            <input className="outline-none" type="text" />
          </div>
        </div>
      </div>
    </div>
  );
}
