import natal from "../assets/cardt.jpeg";
import card from "../assets/tarot.jpeg";
import ball from "../assets/ball.jpeg";

const ReadingsSection = () => {
  return (
    <div className="bg-gradient-to-b from-zinc-900 via-zinc-950 to-black text-white py-16 px-4 lg:px-16">
        <h5 className="text-gray-400">SERVICES</h5>
        <div className="flex justify-between py-6 lg:flex-row flex-col">
            <h5 className="text-3xl font-serif pb-3">Discover Your Path in the stars with Us</h5>
            <button className="border-gray-400 border-2 p-2 rounded-lg text-gray-400 ">See All Services</button>
        </div>
      <div className="flex flex-col space-y-16">
        {/* Natal Chart Readings */}
        <div className="flex flex-col lg:flex-row items-center lg:justify-between space-y-8 lg:space-y-0">
          {/* <h2 className="text-green-400 text-lg font-semibold lg:w-1/12">01</h2> */}
          <div className="flex flex-col justify-center space-y-4 lg:w-7/12 text-center lg:text-left px-4  lg:px-36">
            <h3 className="text-2xl font-bold">Natal Chart Readings</h3>
            <p className="text-gray-300">
              We generate your natal chart and interpret the positions of the
              planets, signs, and houses to give you insights into your
              personality, strengths, weaknesses, and life path.
            </p>
          </div>
          <div className="lg:w-5/12">
            <img
              src={natal}
              alt="Natal Chart"
              className="rounded-lg mx-auto lg:mx-0 max-w-full"
            />
          </div>
        </div>

        {/* Compatibility Readings */}
        <div className="flex flex-col lg:flex-row-reverse items-center lg:justify-between space-y-8 lg:space-y-0">
          <div className="flex flex-col justify-center space-y-4 lg:w-7/12 text-center lg:text-left px-4 lg:px-36">
            <h3 className="text-2xl font-bold">Compatibility Readings</h3>
            <p className="text-gray-300 ">
              We can analyze the compatibility between two individuals by
              comparing their natal charts. This can help people understand
              their relationships with partners, friends, or family members
              better.
            </p>
          </div>
          <div className="lg:w-5/12">
            <img
              src={card}
              alt="Compatibility Reading"
              className="rounded-lg mx-auto lg:mx-0 max-w-full"
            />
          </div>
        </div>

        {/* Progression Readings */}
        <div className="flex flex-col lg:flex-row items-center lg:justify-between space-y-8 lg:space-y-0">
          {/* <h2 className="text-green-400 text-lg font-semibold lg:w-1/12">03</h2> */}
          <div className="flex flex-col justify-center space-y-4 lg:w-7/12 text-center lg:text-left px-4  lg:px-36">
            <h3 className="text-2xl font-bold">Progression Readings</h3>
            <p className="text-gray-300">
              We provide insights into upcoming planetary transits and
              progressions that may influence your life events and experiences.
              It can be useful for timing significant decisions or life changes.
            </p>
          </div>
          <div className="lg:w-5/12">
            <img
              src={ball}
              alt="Progression Reading"
              className="rounded-lg mx-auto lg:mx-0 max-w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadingsSection;
