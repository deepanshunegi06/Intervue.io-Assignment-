import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ResourceCards from '../components/ResourceCards';
import SecuritySection from '../components/SecuritySection';
import Testimonial from '../components/Testimonial';
import Products from '../components/Products';
import FAQs from '../components/FAQs';
import Footer from '../components/Footer';

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ResourceCards />
      <SecuritySection />
      <Testimonial />
      <Products />
      <FAQs />
      <Footer />
    </div>
  );
}
