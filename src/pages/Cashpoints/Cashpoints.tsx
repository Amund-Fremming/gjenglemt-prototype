import cashpoints from "./images/cashpoints.png";

export default function Cashpoints() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center items center font-serif text-2xl text-gray-500 font-bold h-12 mt-8 mb-6">
          Cash in dine poeng
        </div>
        <img src={cashpoints} />
      </div>
    </>
  );
}
