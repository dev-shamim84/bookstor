import { CiSearch } from "react-icons/ci";
import heroImg from "../assets/hero.png";

const Hero = () => {
  return (
    <section className="bg-[#FDF8EE] pb-24 min-h-[80vh] flex items-center">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-6">
          <div className="flex-1 order-2 lg:order-1 text-center lg:text-left">
            <h2 className="text-3xl md:text-[60px] font-bold leading-tight mb-4">
              The <span className="text-amber-600">Smart</span> <br />
              Choice For <span className="text-amber-600">Future</span>
            </h2>

            <p className="text-[#8A8A8A] font-medium  text-[20px] mb-4">
              Elearn is a global training provider based across the UK that
              specialises in accredited and bespoke training courses. We crush
              the...
            </p>

            {/* Search Input Section */}
            <div className="relative flex  items-center justify-between w-full md:w-3/4 mx-auto lg:mx-0 bg-white rounded-full shadow-md">
              <span className="pl-4 text-gray-400 text-xl">
                <CiSearch />
              </span>
              <input
                type="search"
                placeholder="Search for a location..."
                className="flex-1 px-3 py-2 rounded-full bg-transparent outline-none placeholder:text-gray-400 text-sm"
              />
              <button className="absolute right-1 bg-[#4D2C5E] text-white text-sm px-6 py-2 rounded-full transition">
                Continue
              </button>
            </div>
          </div>

          <div className="flex-1 order-2 lg:order-2 justify-center md:justify-end">
            <img src={heroImg} alt="hero" className="w-full object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
