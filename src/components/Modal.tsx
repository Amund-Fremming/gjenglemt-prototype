import { Link } from "react-router-dom";

interface ModalProps {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Modal({ modalOpen, setModalOpen }: ModalProps) {
  return (
    <>
      <div
        className={`${
          modalOpen ? "flex" : "hidden"
        } w-[200px] h-[80px] bg-[#E4E2E9] rounded-l-full rounded-r-full absolute bottom-[95px] left-[50%] translate-x-[-50%] justify-evenly items-center text-xl font-semibold text-[#39236C]`}
      >
        <Link to="/caselost">
          <h1 onClick={() => setModalOpen(false)}>Mistet</h1>
        </Link>
        <Link to="/casefound">
          <h1 onClick={() => setModalOpen(false)}>Funnet</h1>
        </Link>
      </div>
    </>
  );
}
