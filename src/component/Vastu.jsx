import Zodiac1 from "../assets/zodiac1.svg";
import Zodiac2 from "../assets/zodiac2.svg";
import Zodiac3 from "../assets/zodiac3.svg";
import Zodiac4 from "../assets/zodiac4.svg";
import Zodiac5 from "../assets/zodiac5.svg";
// import Zodiac6 from "../assets/zodiac6.svg";
export default function Vastu() {
  return (
    <div className="py-14 px-5 space-y-10 bg-gradient-to-b from-black via-zinc-950 to-zinc-900 flex flex-col text-white">
        <h6 className=" text-lg font-bold">Why Vastu Consultation is Crucial ?</h6>
      <div className="grid md:grid-cols-5 md:grid-rows-1 sm:grid-cols-3 sm:grid-rows-2 grid-cols-2 grid-rows-3 gap-4 md:gap-4 md:px-6">
        <div className="p-4 flex justify-center items-center flex-col bg-zinc-500 bg-opacity-30 text-center rounded shadow hover:scale-105">
          <img src={Zodiac1} alt="girl" />
          <h5 className="text-sm md:font-bold py-2">Bringing in Good Fortune</h5>
          <p className="text-zinc-400 text-[12px]">Following Vastu advice when it comes to property can help bring good fortune to the space</p>
        </div>
        <div className="p-4 flex justify-center items-center flex-col bg-zinc-500 bg-opacity-30 text-center rounded shadow hover:scale-105">
          <img src={Zodiac2} alt="girl" />
          <h5 className="text-sm md:font-bold py-2">Spread Positivity</h5>
          <p className="text-zinc-400 text-[12px]">Following Vastu advice when it comes to property can help bring good fortune to the space</p>
        </div>
        <div className="p-4 flex justify-center items-center flex-col bg-zinc-500 bg-opacity-30 text-center rounded shadow hover:scale-105">
          <img src={Zodiac3} alt="girl" />
          <h5 className="text-sm md:font-bold py-2">Keeps Negtivity at Bay</h5>
          <p className="text-zinc-400 text-[12px]">Following Vastu advice when it comes to property can help bring good fortune to the space</p>
        </div>
        <div className="p-4 flex justify-center items-center flex-col bg-zinc-500 bg-opacity-30 text-center rounded shadow hover:scale-105">
          <img src={Zodiac4} alt="girl" />
          <h5 className="text-sm md:font-bold py-2">Hormonising Energies</h5>
          <p className="text-zinc-400 text-[12px]">Following Vastu advice when it comes to property can help bring good fortune to the space</p>
        </div>
        <div className="p-4 flex justify-center items-center flex-col bg-zinc-500 bg-opacity-30 text-center rounded shadow hover:scale-105">
          <img src={Zodiac5} alt="girl" />
          <h5 className="text-sm md:font-bold py-2">Healthy Relationships</h5>
          <p className="text-zinc-400 text-[12px]">Following Vastu advice when it comes to property can help bring good fortune to the space</p>
        </div>
        {/* <div className="p-4 flex justify-center items-center flex-col bg-zinc-500 bg-opacity-30 text-center rounded shadow hover:scale-105">
          <img src={Zodiac6} alt="girl" />
          <h5 className="text-sm md:font-bold ">Current Life Situation</h5>
        </div> */}
      </div>
    </div>
  );
}
