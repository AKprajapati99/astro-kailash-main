import girl from "../assets/girl.jpeg";
export default function Services() {
  return (
    <div className=" py-14 px-5 space-y-10 bg-gradient-to-b from-zinc-900 via-zinc-950 to-black flex flex-col  ">
      <div className="flex flex-col justify-center items-center space-y-5 ">
        <button className="bg-[rgb(217,158,54)] py-2 px-3 rounded-3xl text-slate-900 uppercase">
          Services
        </button>
        <h3 className="text-white text-3xl text-center font-bold ">
          Astrology is just a finger <br /> pointing at reality
        </h3>
      </div>
      <div className="grid md:grid-cols-6 md:grid-rows-1 sm:grid-cols-3 sm:grid-rows-2 grid-cols-2 grid-rows-3 gap-4 md:gap-6 md:px-6">
        <div className="p-4 bg-white text-center rounded shadow hover:scale-105">
          <img src={girl} alt="girl"/>
          <h5 className="text-sm md:font-bold ">General consultation</h5>
        </div>
        <div className="p-4 bg-white text-center rounded shadow hover:scale-105">
          <img src={girl} alt="girl"/>
          <h5 className="text-sm md:font-bold ">Personal life Advice</h5>
        </div>
        <div className="p-4 bg-white text-center rounded shadow hover:scale-105">
          <img src={girl} alt="girl"/>
          <h5 className="text-sm md:font-bold ">Annual Forecast</h5>
        </div>
        <div className="p-4 bg-white text-center rounded shadow hover:scale-105">
          <img src={girl} alt="girl"/>
          <h5 className="text-sm md:font-bold ">Work, Career, Finance</h5>
        </div>
        <div className="p-4 bg-white text-center rounded shadow hover:scale-105">
          <img src={girl} alt="girl"/>
          <h5 className="text-sm md:font-bold">Forecast of Future</h5>
        </div>
        <div className="p-4 bg-white text-center rounded shadow hover:scale-105">
          <img src={girl} alt="girl"/>
          <h5 className="text-sm md:font-bold ">Current Life Situation</h5>
        </div>
      </div>
    </div>
  );
}
