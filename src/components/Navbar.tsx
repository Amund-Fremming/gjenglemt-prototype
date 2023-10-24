import { BsFillPersonFill } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { AiFillHome } from "react-icons/ai";
import { FaInbox, FaMoneyBillAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="fixed bottom-[25px] w-full h-20 z-0 flex justify-center items-center">
        <div className="z-10 rounded-full bg-[#E4E2E9] h-20 w-20 flex justify-center items-center text-4xl font-extrabold text-[#39236C]"></div>
      </div>

      <div className="fixed bottom-0 left-0 w-full bg-[#E4E2E9] h-20 flex justify-between items-center pr-6 pl-6 text-3xl text-[#806FA3]">
        <Link to="/">
          <AiFillHome />
        </Link>
        <Link to="/inbox">
          <FaInbox />
        </Link>
        <div className="mb-14 text-4xl text-[#39236C]">
          <Link to="/modal">
            <FaPlus />
          </Link>
        </div>
        <Link to="/cashpoints">
          <FaMoneyBillAlt />
        </Link>
        <Link to="/profile">
          <BsFillPersonFill />
        </Link>
      </div>
    </>
  );
}
