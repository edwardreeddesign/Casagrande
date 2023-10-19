import Layout from '../components/Layout';
import GalleryCard from '../components/portfolio/GalleryCard';
import PortfolioCard from '../components/portfolio/PortfolioCard';

const PortfolioPage = () => {
  return (
    <Layout title="Portfolio">
      <div className="my-8 md:px-8 lg:px-20">
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-center  tracking-widest font-thin relative mb-8">
          GET INSPIRED BY THESE PROJECTS WITH COUNTERTOPS FROM OUR PORTFOLIO
          <div className=" absolute  w-1/2   bg-orange-400 h-[2px]  bottom-[-20%] left-[40%] " />
        </h1>
        <div className="flex items-center justify-center  gap-6 flex-wrap">
          <PortfolioCard />
          <PortfolioCard />
          <PortfolioCard />
          <PortfolioCard />
        </div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-center  tracking-widest font-thin relative my-8">
          OR CHOOSE A GALLERY FOR MORE COUNTERTOP DESIGN IDEAS
          <div className=" absolute  w-1/2   bg-orange-400 h-[2px]  bottom-[-20%] left-[40%] " />
        </h1>
        <div className="flex items-center justify-center  gap-6 flex-wrap">
          <GalleryCard />
          <GalleryCard />
        </div>
      </div>
    </Layout>
  );
};
export default PortfolioPage;
