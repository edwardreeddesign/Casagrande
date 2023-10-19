/* eslint-disable @next/next/no-img-element */
const PortfolioCard = () => {
  return (
    <div className="max-w-sm shadow-shadow1 mt-8">
      <div className="bg-orange-400/10  flex flex-col items-center justify-center px-4 pt-2">
        <h1 className="text-center mb-4 tracking-widest font-extralight text-xl">
          Kitchen Vision Turned Into Reality
        </h1>
        <p className="text-sm mb-2">
          The countertop pros at Casagrande Granite and Marble work with their
          clients from beginning to installation, ensuring the vision becomes
          reality.
        </p>
      </div>
      <img
        src="/images/portfolio/kitchenRedesign.jpg"
        alt="Kitchen"
        className="w-full"
      />
    </div>
  );
};
export default PortfolioCard;
