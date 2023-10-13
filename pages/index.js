import Layout from '../components/Layout';
import Full from '../components/header/Full';
import Hero from '../components/home/Hero';
import WhoWeAre from '../components/home/WhoWeAre';

export default function Home() {
  return (
    <Layout title="Home">
      <Hero />
      <WhoWeAre />
    </Layout>
  );
}
