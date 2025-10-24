import { FaArrowRight } from "react-icons/fa";
const Newsletter = () => {
  return (
    <section className="py-6">
      <div className="container mx-auto bg-[#4D2C5E] relative py-16 ">
        <div className="absolute top-5 left-5 w-20 h-20 border-2 border-white/30 rounded-full"></div>
        <div className="absolute top-10 right-10 w-16 h-16 border-2 border-white/30 rounded-full"></div>
        <div className="absolute bottom-0 lg:bottom-8  left-8 rotate-45 text-orange-400 text-3xl">
          ↩
        </div>
        <div className="absolute bottom-2 lg:bottom-6 right-8 text-yellow-400 text-3xl">
          💡
        </div>

        <div className="container mx-auto px-4 text-center text-white relative z-10">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">
            Subscribe to our newsletter
          </h2>
          <p className="text-sm md:text-base text-white/80 mb-8">
            Lorem Ipsum is simply dummy text of the printing
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="max-w-md mx-auto flex bg-white rounded-full overflow-hidden shadow-md"
          >
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 px-5 py-3 text-gray-700 focus:outline-none text-sm md:text-base"
            />
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 md:px-8 py-3 rounded-full transition-all duration-300 flex items-center gap-2"
            >
              Send <FaArrowRight size={14} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
