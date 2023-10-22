import Card from "./components/Card";
import Iphone from "./images/Iphone.jpeg";
import lommebok from "./images/lommebok.jpeg";

export default function Inbox() {
  return (
    <>
      <div className="w-full h-16 text-[#39236C] flex justify-center items-center font-bold text-2xl font-serif">
        <h1>Mine saker</h1>
      </div>
      <div className="m-4 mt-6 flex flex-col justify-center items-center">
        <Card
          image={Iphone}
          header="Mistet Iphone"
          text="Jeg har mistet min iphone 11, den er blå og har riper på skjermen."
          status="FUNNET"
        />
        <Card
          image={lommebok}
          header="Mistet lommebok"
          text="Jeg har mistet min lommebok, den er sort. Navnet på bankkortet er Gabe Itch."
          status="FUNNET"
        />
      </div>
    </>
  );
}
