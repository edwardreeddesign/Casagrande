/* eslint-disable @next/next/no-img-element */
import Layout from '../components/Layout';
import MaterialWidget from '../components/care/MaterialWidget';
import ProductsWidget from '../components/care/ProductsWidget';
import Questions from '../components/care/Questions';

const CarePage = () => {
  return (
    <Layout title="Care">
      <div className="grid grid-cols-1 gap-12  lg:grid-cols-12 overflow-hidden pt-10 px-8 lg:px-16">
        <div className="col-span-1 md:col-span-10">
          <div className="flex items-center justify-center gap-8 flex-col md:flex-row">
            <div>
              <h1 className="text-xl tracking-wider mb-2 font-semibold">
                Sealing Natural Stone
              </h1>
              <p className="mb-2">
                As a general practice, it is advisable to apply a granite sealer
                to all natural stones.
              </p>
              <p className="mb-2">
                Preserving the impeccable appearance of your stone involves
                steering clear of habits that could compromise its integrity.
                While granite, marble, travertine, limestone, soapstone, quartz,
                and solid surfaces share similarities, their unique
                characteristics demand tailored maintenance approaches.
              </p>
              <p className="mb-2">
                By conscientiously applying the granite care and cleaning
                techniques outlined below to all your countertops, regardless of
                the stone or surface type, you can effortlessly preempt most
                potential issues. This ensures you won&apos;t need to dwell on
                the process or fret about inadvertently causing damage.
              </p>
            </div>
            <div>
              <img
                src="/images/care/care.jpg"
                alt="marble countertop"
                className="shadow-shadow1"
              />
            </div>
          </div>
          <div className="col-span-1 lg:col-span-6 my-10">
            <h1 className="text-xl tracking-wider mb-2 font-semibold">
              Let Us Clear Up Your Countertop Questions
            </h1>
            <Questions />
          </div>
        </div>
        <div className="  col-span-1 md:col-span-2">
          <div className="">
            <MaterialWidget />
            <ProductsWidget />
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default CarePage;
