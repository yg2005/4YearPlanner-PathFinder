// src/App.jsx
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Form from "./components/Form"; // Import the new Form component

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <Form /> {/* Add the Form component here */}
        <FeatureSection />
        <Workflow />
        <Testimonials />
        <Pricing />
        <Footer />
      </div>
    </>
  );
};

export default App;
