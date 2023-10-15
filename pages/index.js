import Layout from '../components/Layout';
import Full from '../components/header/Full';
import Hero from '../components/home/Hero';
import KitchenBaths from '../components/home/KitchenBaths';
import WhoWeAre from '../components/home/WhoWeAre';

export default function Home() {
  return (
    <Layout title="Home">
      <Hero />
      <WhoWeAre />
      <KitchenBaths />
    </Layout>
  );
}
