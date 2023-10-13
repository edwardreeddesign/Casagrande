/* eslint-disable @next/next/no-img-element */
const WhoWeAre = () => {
  return (
    <div className="my-8 px-4 md:px-8 lg:px-12 ">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl font-thin tracking-widest text-center  ">
          Who We Are
        </h1>
        <div className="w-40 ml-28 bg-orange-400 h-[2px]  bottom-1 left-3 " />
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-8">
        <img
          src="/images/whoWeAre.jpg"
          alt="Kitchen with new marble"
          className="h-[500px] shadow-shadow1 object-cover"
        />
        <div className="flex flex-col mt-8  flex-1 leading-7">
          <p className="mb-4">
            Looking for the perfect finishing touches for your home or
            commercial space? Look no further than our family-owned and operated
            marble and granite business!
          </p>
          <p className="mb-4">
            We offers a unique and high-end selection of stone and tile products
            to elevate the look and feel of any space.
          </p>
          <p className="mb-4">
            As a family-owned and operated business, we take pride in our
            exceptional customer service and quality products.
          </p>
          <p>
            Come visit us and see why we are the go-to choice for stone and tile
            products in the area.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <button className="btn btn-primary my-8 ">Request a Quote</button>
      </div>
    </div>
  );
};
export default WhoWeAre;
