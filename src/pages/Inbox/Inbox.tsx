import Card from "./components/Card";
import Iphone from "./images/Iphone.jpeg";
import lommebok from "./images/lommebok.jpeg";

export default function Inbox() {
  return (
    <>
      <div className="mt-12 w-full h-16 text-[#39236C] flex justify-center items-center font-bold text-2xl font-serif">
        <h1>Mine saker</h1>
      </div>
      <div className="m-4 mt-6 flex flex-col justify-center items-center">
        <Card
          image={Iphone}
          header="Gjenstand funnet"
          text="Iphone, blå"
          status="Funnet: V/fløybanen 23.09.23"
        />
        <Card
          image={lommebok}
          header="Gjenstand savnet"
          text="Lommebok"
          status="Sist sett: Bybanen 12.10.23"
        />
      </div>
    </>
  );
}
