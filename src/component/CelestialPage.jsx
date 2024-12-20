import room from '../assets/room.jpeg'
function CelestialPage() {
  return (
    <div className="bg-black text-white">
      {/* Header Section */}
      <section className="text-center py-12 px-6 lg:px-24">
        <h1 className="text-3xl md:text-5xl font-serif text-start ">
          At <span className="italic">Celestial</span>, we are committed to
          helping you discover the incredible wisdom that the stars and planets
          hold.Our <span className="italic">commitment</span> includes:
        </h1>
      
      </section>

      {/* Commitment Section */}
      <section className="flex flex-col md:flex-row justify-center gap-8 px-6 md:px-12 lg:px-24 py-12">
        <div className="text-center md:text-left">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            Providing accurate and insightful astrological readings
          </h2>
          <p className="text-sm md:text-base text-gray-400">
            Lorem ipsum dolor sit amet consectetur. Adipiscing sodales cras
            dictum enim sit neque enim enim. Integer semper pretium felis libero
            magna a ipsum vivamus vitae. Pulvinar dolor nibh tortor ornare
            nullam risus mi.
          </p>
        </div>

        <div className="text-center md:text-left">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            Delivering timely and reliable guidance for your daily life
          </h2>
          <p className="text-sm md:text-base text-gray-400">
            Lorem ipsum dolor sit amet consectetur. Adipiscing sodales cras
            dictum enim sit neque enim enim. Integer semper pretium felis libero
            magna a ipsum vivamus vitae. Pulvinar dolor nibh tortor ornare
            nullam risus mi.
          </p>
        </div>

        <div className="text-center md:text-left">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            Continuously learning and growing in the field of astrology
          </h2>
          <p className="text-sm md:text-base text-gray-400">
            Lorem ipsum dolor sit amet consectetur. Adipiscing sodales cras
            dictum enim sit neque enim enim. Integer semper pretium felis libero
            magna a ipsum vivamus vitae. Pulvinar dolor nibh tortor ornare
            nullam risus mi.
          </p>
        </div>
      </section>

      {/* Image Section */}
      <section className="flex justify-center py-12">
        <img
          src={room}
          alt="Astrology chart with crystals"
          className="rounded-lg shadow-lg max-w-full "
        />
      </section>
    </div>
  );
}

export default CelestialPage;
