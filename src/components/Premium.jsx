import premiumImg from "../assets/OBJECTS.png";
import heartImg from "../assets/hearts 1.png";
import jigImg from "../assets/jigsaw 1.png";
import smallImg from "../assets/small.png";

const Premium = () => {
  return (
    <section className="bg-[#FDF8EE] ">
      <div className="container mx-auto px-4 py-6">
        <div className="flex gap-20 md:gap-10 flex-col-reverse lg:flex-row justify-between">
          <div className="flex-1">
            <img
              className=" w-[500px] object-contain"
              src={premiumImg}
              alt=""
            />
          </div>
          <div className="flex-1 my-5 relative">
            <h2 className=" font-extrabold text-3xl md:text-[50px] leading-tight text-center md:text-left">
              Premium <span className="text-amber-600">Learning</span> <br />{" "}
              Experience
            </h2>
            <div className="mt-8 flex items-center gap-4">
              <div className="bg-[#4D2C5E] p-5 rounded-2xl">
                <img src={heartImg} alt="" />
              </div>
              <div>
                <h4 className="font-bold text-xl lg:text-2xl mb-2">
                  Easily Accessible
                </h4>
                <p className="text-gray-500">
                  Learning Will fell Very Comfortable With Courslab.
                </p>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-4">
              <div className="bg-[#4D2C5E] p-5 rounded-2xl">
                <img src={jigImg} alt="" />
              </div>
              <div>
                <h4 className="font-bold text-xl lg:text-2xl mb-2">
                  Fun learning expe
                </h4>
                <p className="text-gray-500">
                  Learning Will fell Very Comfortable With Courslab.
                </p>
              </div>
            </div>
            <img
              className="absolute bottom-[-77px] right-0 md:bottom-0 md:right-0 "
              src={smallImg}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Premium;
