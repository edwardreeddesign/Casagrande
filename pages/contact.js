import Layout from '../components/Layout';
import ContactForm from '../components/contact/ContactForm';
import Map from '../components/contact/Map';

const ContactPage = () => {
  return (
    <Layout title="Contact">
      <div className="pt-10 px-2 md:px-8 lg:px-12">
        <h1 className="text-xl  font-thin tracking-widest text-center  ">
          GET IN TOUCH
        </h1>
        <h1 className="text-3xl md:text-4xl font-thin tracking-widest text-center  ">
          CONTACT
        </h1>
        <ContactForm />
        <Map />
      </div>
    </Layout>
  );
};
export default ContactPage;
