/* eslint-disable @next/next/no-img-element */
const Hero = () => {
  return (
    <section className="relative w-full h-[75%]">
      <img
        src="/images/hero.jpg"
        alt="marble kitchen"
        className="w-full object-fill"
      />
      <div className="absolute w-full h-full top-0 bg-black/50" />

      <div className="absolute flex top-[45%] left-[40%] translate-x-[-50%] translate-y-[-50%] z-10 flex-col align-center justify-center drop-shadow-2xl ">
        <h1 className="text-light1 text-left font-medium text-2xl md:text-3xl  drop-shadow-2xl tracking-widest">
          Welcome To
        </h1>
        <h1 className="text-light1 text-left font-semibold tracking-widest text-3xl md:text-5xl my-2 drop-shadow-2xl">
          Casagrande Granite and Marble
        </h1>
        <p className="text-white font-thin text-sm md:text-base tracking-wide mt-4">
          Your premier artisan for marble, granite, and quartz in Windsor, Essex
          County
        </p>
        <p className="text-white font-thin text-sm md:text-base tracking-wide">
          Since 1969
        </p>
      </div>
    </section>
  );
};
export default Hero;
