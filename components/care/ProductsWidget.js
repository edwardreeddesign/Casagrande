import Link from 'next/link';

const ProductsWidget = () => {
  return (
    <article className="bg-white shadow-shadow1 rounded-lg p-6 mb-8 ">
      <h1 className="text-lg mb-6 font-extralight tracking-widest text-center">
        PRODUCTS
      </h1>
      <div className="flex flex-col">
        <Link href="/">CAESARSTONE</Link>
        <Link href="/">DUPONT</Link>
        <Link href="/">HANSTONE</Link>
        <Link href="/">ZODIAQ</Link>
        <Link href="/">TCE STONE</Link>
      </div>
    </article>
  );
};
export default ProductsWidget;
