import { Link } from "react-router-dom";

interface CardProps {
  image: string;
  header: string;
  text: string;
  status: string;
}

export default function Card({ image, header, text, status }: CardProps) {
  return (
    <>
      <div className="shadow-2xl w-[100%] h-[180px] bg-[#E4E2E9] rounded-md my-2 flex p-4">
        <img
          src={image}
          className="object-contain rounded-full w-16 h-16 font-serif mt-4"
        />
        <div className="flex flex-col ml-4">
          <h1 className="text-serif font-bold text-xl mb-1">{header}</h1>
          <p className="text-gray-600">{text}</p>
          <div className="flex justify-between">
            <p className="my-2 text-gray-800">{status}</p>
            <button className="mr-4 flex justify-center items-center mt-2 px-2 h-[35px] rounded-md bg-blue-500 text-white hover:bg-white hover:text-blue-500">
              <Link to="/chat">Chat</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
