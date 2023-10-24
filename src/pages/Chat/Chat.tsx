import ChatLeft from "./components/ChatLeft";
import adrian from "./images/adrian.jpeg";
import ChatRight from "./components/ChatRight";
import rock from "./images/rock.jpeg";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Iphone from "../Inbox/images/Iphone.jpeg";

export default function Chat() {
  return (
    <div className=" flex flex-col w-full pb-32">
      <div className="w-full h-16 bg-[#E4E2E9]" />
      <div className="w-full h-16 bg-[#E4E2E9] mb-6 flex justify-start items-center pl-2 ">
        <div className="flex text-4xl text-[#806FA3] pr-6">
          <Link to="/inbox">
            <BsFillArrowLeftCircleFill />
          </Link>
        </div>
        <img
          src={Iphone}
          className="object-contain rounded-full w-12 h-12 mx-2"
        />
        <h1 className="text-[#806FA3] font-serif text-xl">Mistet Iphone</h1>
      </div>
      <ChatLeft
        text="Halla mann, jeg har mistet jomfrudommen min og ser at du kanskje har
          funnet den?"
        image={adrian}
      />
      <ChatRight
        text="Yo bror! Ja ser ut som vi to matchet sammen når det gjalt den saken. Kom over til meg du så fikser vi det. Safe!"
        image={rock}
      />
      <ChatLeft
        text="Å fyfaen du er en ekte legende ass, kommer over kl 12.00. Tar med litt penger som finnerlønn!"
        image={adrian}
      />

      <div className="mt-10 flex justify-center items-center text-xl font-serif text-gray-500">
        <h2>Saken er Avsluttet...</h2>
      </div>
    </div>
  );
}
