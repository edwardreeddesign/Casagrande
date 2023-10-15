import Link from 'next/link';

/* eslint-disable @next/next/no-img-element */
const KitchenBaths = () => {
  return (
    <div className="flex items-center justify-center md:px-8 lg:px-32 my-6">
      <div className="relative ">
        <img
          src="/images/kitchen.jpg"
          alt="Kitchen with Granite"
          className=""
        />
        <div className="absolute w-full h-full top-0 bg-black/40" />
        <h2 className="text-2xl text-white font-thin tracking-widest absolute top-8 md:text-4xl left-[50%] translate-x-[-50%]">
          Kitchens
        </h2>
        <Link
          href="/portfolio/kitchens"
          className="btn-line text-white absolute bottom-6 left-[50%] translate-x-[-50%]"
        >
          Learn More
        </Link>
      </div>
      <div className="relative ">
        <img src="/images/bath.jpg" alt="Bath with Granite" className="" />
        <div className="absolute w-full h-full top-0 bg-black/40" />
        <h2 className="text-2xl text-white font-thin tracking-widest absolute top-8 md:text-4xl left-[50%] translate-x-[-50%]">
          Baths
        </h2>
        <Link
          href="/portfolio/baths"
          className="btn-line text-white absolute bottom-6 left-[50%] translate-x-[-50%]"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};
export default KitchenBaths;
