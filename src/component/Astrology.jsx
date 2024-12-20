import chakkar from "../assets/chakkar.png";
import bg from "../assets/bg.jpg";
export default function Astrology() {
  return (
    <div
      className="md:grid md:grid-cols-2 py-4"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex justify-center items-center px-4">
        <img src={chakkar} alt="" className="lg:h-[80vh]" />
      </div>
      <div className="flex flex-col items-center md:items-start lg:py-36 ">
        <h3 className="text-white text-2xl sm:text-5xl font-bold px-9  sm:text-start">We know Everthing </h3>
        <h3 className="text-white text-2xl sm:text-5xl font-bold text-center px-9 sm:text-start ">About Astrology</h3>
        <p className="text-gray-600 md:text-xl text-center md:pl-8 md:py-7 md:px-32 p-2 sm:text-start ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nisi
          atque nam officiis quod mollitia culpa omnis dolor itaque hic minima
          ad, veniam dolorum! A expedita ea nihil dolorem placeat? quod mollitia culpa omnis dolor itaque hic minima
          ad, veniam dolorum! A expedita ea nihil dolore 
        </p>
        <button className="rounded-3xl bg-[rgb(217,158,54)] hover:bg-white text-gray-800 py-2 px-5 md:ml-7">Read More</button>
      </div>
    </div>
  );
}
