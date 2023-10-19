/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

const GalleryCard = () => {
  return (
    <div>
      <Link href="/">
        <div className="max-w-sm shadow-shadow1 mt-8">
          <div className="bg-orange-400/10  flex flex-col items-center justify-center px-4 pt-2">
            <h1 className="text-center mb-4 tracking-widest font-extralight text-xl">
              Kitchen Gallery
            </h1>
            <p className="text-sm mb-2">
              Enjoy these granite kitchen design ideas & pictures. When you’re
              ready to take the next step, call for an appointment request a
              quote online.
            </p>
          </div>
          <img
            src="/images/portfolio/kitchenRedesign.jpg"
            alt="Kitchen"
            className="w-full"
          />
        </div>
      </Link>
    </div>
  );
};
export default GalleryCard;
