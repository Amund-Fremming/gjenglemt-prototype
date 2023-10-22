import { BsFillPersonFill } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { AiFillHome } from "react-icons/ai";
import { FaInbox, FaMoneyBillAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="fixed rounded-full bg-[#E4E2E9] h-20 w-20 bottom-[25px] right-[41%] z-10 flex justify-center items-center text-4xl font-extrabold text-[#39236C]">
        <FaPlus />
      </div>

      <div className="shadow-2xl fixed bottom-0 left-0 w-full bg-[#E4E2E9] h-20 flex justify-between items-center pr-4 pl-4 text-3xl text-[#806FA3]">
        <Link to="/">
          <AiFillHome />
        </Link>
        <Link to="/inbox">
          <FaInbox />
        </Link>
        <div className="w-10" />
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
