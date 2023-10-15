import Layout from '../components/Layout';

const AboutPage = () => {
  return (
    <Layout title="About">
      <div className="mb-8 md:px-8 lg:px-20">
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-center  tracking-widest font-thin relative mb-8">
          Casagrande Granite and Marble
          <div className=" absolute  w-1/2   bg-orange-400 h-[2px]  bottom-[-20%] left-[40%] " />
        </h1>
        <div className="bg-orange-400/10 p-12 shadow-shadow2">
          <h2 className="text-xl md:text-2xl tracking-wider text-center font-light mb-8">
            ONE STOP SHOP FOR GRANITE, MARBLE AND QUARTZ COUNTERTOPS
          </h2>
          <p className="mb-4">
            Explore the beauty and wonder of natural stone for use in your
            home.Whether you are interested in custom granite, limestone, marble
            and quartz, you can find the countertop option that is right for you
            with the help of our staff. Our showroom has material samples,
            displays and experienced Designers/Project Managers to help inspire
            your design. The skilled craftsman in our shop design and fabricate
            whatever you need, kitchen and bathroom countertops, floors, bars,
            fireplace surrounds, and more.
          </p>
          <p className="mb-4">
            We employ four generations of stone workers each specializing in
            both residential and commercial granite counter top applications for
            new construction or remodelling projects. Choose from hundreds of
            granite, marble and limestone samples.
          </p>
          <p className="mb-4">
            Our Team at Casagrande Granite and Marble is dedicated to helping
            our customers create a vision realized in their dream home. With
            over 34 years experience in fabricating and installing countertops
            for kitchens, bathrooms, fireplace surrounds, outdoor kitchens,
            bars, and more, we are specialists in providing high quality results
            for both natural and man-made stone surface projects.
          </p>
          <h2 className="text-xl md:text-2xl tracking-widest text-center font-normal my-8">
            Crafting Beauty, Carving Excellence: Your Space, Our Stone.
          </h2>
        </div>
      </div>
    </Layout>
  );
};
export default AboutPage;
