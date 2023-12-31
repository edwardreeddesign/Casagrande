import Head from 'next/head';
import { motion } from 'framer-motion';
import Full from './header/Full';
import Footer from './footer/Footer';
import Nav from './header/Nav';

const Layout = ({ children, title, description }) => {
  const defaultTitle = 'Casagrande Granite and Marble';
  const defaultDescription =
    'The premiere marble, granite, and quartz artisan in the Windsor, Essex County since 1969.';

  return (
    <>
      <Head>
        <title>{title ? `${title} | ${defaultTitle}` : defaultTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <meta name="description" content={description || defaultDescription} />
      </Head>
      <motion.div>
        <div className="flex justify-between min-h-screen flex-col bg-white w-full pt-[4.5rem] md:pt-[5rem]">
          {/* <Nav /> */}
          <Nav />
          <main>{children}</main>
          <Footer />
        </div>
      </motion.div>
    </>
  );
};
export default Layout;
