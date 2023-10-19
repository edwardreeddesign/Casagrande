import Link from 'next/link';

const MaterialWidget = () => {
  return (
    <article className="bg-white shadow-shadow1 rounded-lg p-6 mb-8 ">
      <h1 className="text-lg mb-6 font-extralight tracking-widest text-center">
        Find the perfect color for your countertop surface.
      </h1>
      <div className="flex items-center justify-center">
        <Link className="btn btn-primary w-full text-center" href="/">
          browse materials
        </Link>
      </div>
    </article>
  );
};
export default MaterialWidget;
