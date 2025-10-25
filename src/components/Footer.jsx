import { FaBook } from "react-icons/fa";
import bookImg from "../assets/logobook.png";

const Footer = () => {
  return (
    <footer className="bg-[#FFF9F0] text-gray-700 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-4 lg:gap-8 text-center justify-center md:text-left">
          <div className="flex flex-col items-center md:items-start md:justify-center">
            <div className="flex gap-2 mb-3 items-center">
              <img src={bookImg} alt="" />
              <h2 className="text-xl font-semibold text-gray-800">
                Book Store
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-gray-600 max-w-xs">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Company</h3>
            <ul className="space-y-2 text-sm f">
              <li>
                <a href="#" className="hover:text-purple-600">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600">
                  How it works
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600">
                  Popular Courses
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600">
                  Service
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Courses</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-purple-600">
                  Categories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600">
                  Offline Course
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600">
                  Video Course
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-purple-600">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600">
                  Career
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600">
                  Privacy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Contact Info</h3>
            <ul className="space-y-2 text-sm">
              <li>📞 +971-547853796</li>
              <li>📧 EduBook@example.com</li>
              <li>🏠 4890 Shoreline Hudson Road, Albany, Dique, QC C5Q-4G6</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-10 pt-5 text-center text-sm text-gray-500">
          © BookStore All Right Reserved 2025
        </div>
      </div>
    </footer>
  );
};

export default Footer;
