interface LeftProps {
  image: string;
  text: string;
}

export default function ChatLeft({ image, text }: LeftProps) {
  return (
    <>
      <div className="bg-white w-[270px] h-[140px] flex justify-end">
        <div className="bg-blue-200 rounded-t-2xl rounded-r-2xl w-[210px] h-[140px] p-4 text-black font-serif">
          {text}
        </div>
      </div>
      <img className="w-12 h-12 rounded-full" src={image} />
    </>
  );
}
