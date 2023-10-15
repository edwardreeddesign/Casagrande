import Link from 'next/link';
import Layout from '../components/Layout';

const PageDoesNotExist = () => {
  return (
    <Layout title="Not Found">
      <div className=" py-4 ">
        <h4 className="uppercase tracking-widest text-dark1 text-lg md:text-2xl text-center mb-4 mt-2">
          Seriously I said only a couple pages work. Now go back to the Home
          Page
        </h4>

        <div className="flex justify-center">
          <Link href="/" className="btn btn-outline">
            Go Back Home
          </Link>
        </div>
      </div>
    </Layout>
  );
};
export default PageDoesNotExist;
