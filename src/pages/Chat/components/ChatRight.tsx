interface RightProps {
  image: string;
  text: string;
}

export default function ChatRight({ image, text }: RightProps) {
  return (
    <>
      <div className="flex justify-end">
        <div className="bg-pink w-[280px] h-[140px] flex justify-end mr-[60px]">
          <div className="bg-blue-200 rounded-t-2xl rounded-l-2xl w-[220px] h-[140px] p-4 text-black font-serif">
            {text}
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <img className=" w-12 h-12 rounded-full" src={image} />
      </div>
    </>
  );
}
