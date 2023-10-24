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
      <Link to="/chat">
        <div className="border-2 border-gray-400 shadow-2xl w-[350px] h-[160px] bg-[#E4E2E9] rounded-2xl my-2 flex p-4">
          <img
            src={image}
            className="object-cover rounded-xl w-20 h-20 font-serif mt-6"
          />
          <div className="flex flex-col ml-4 mt-4">
            <h1 className="text-serif font-bold text-md mb-1">{header}</h1>
            <p className="text-gray-600 text-xl">{text}</p>
            <div className="flex justify-between">
              <p className="my-2 text-gray-800">{status}</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
