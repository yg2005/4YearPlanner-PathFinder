// src/components/HeroSection.jsx
import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        PathFinder Tailors your 4-Year
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          Rutgers Journey to Success
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Plan your perfect 4-year college journey with our advanced planning tools. Organize courses, manage major requirements, and track progress effortlessly. Get personalized recommendations for courses, professors, and career paths. Start today and turn your academic goals into a structured, achievable plan for success at Rutgers!
      </p>
      <div className="flex justify-center my-10">
        <Link
          to="details" // This should match the id of the target element
          smooth={true}
          duration={500}
          offset={-100} // Adjust this value to position the section correctly relative to the navbar
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md cursor-pointer"
        >
          Start for free
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
