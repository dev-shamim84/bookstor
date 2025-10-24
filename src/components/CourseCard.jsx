import { FaStar } from "react-icons/fa";
const CourseCard = ({ course }) => {
  const {
    title,
    category,
    image,
    price,
    rating,
    maxRating,
    duration,
    courseCount,
    sales,
    buttonText,
  } = course;

  return (
    <div className="bg-white rounded-xl shadow-md flex flex-col ">
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="max-w-full rounded-xl object-cover"
      />

      {/* Content */}
      <div className="p-5 ">
        <div className="flex justify-between items-center">
          <div>
            <span className="text-sm text-gray-500 font-medium">
              {category}
            </span>
          </div>
          <div className="flex">
            {[...Array(maxRating)].map((_, index) => (
              <FaStar
                key={index}
                className={
                  index < rating ? "text-yellow-400" : "text-yellow-300"
                }
              />
            ))}
          </div>
        </div>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-xl font-bold text-amber-500">${price}</p>

        {/* Duration & Course Count */}
        <div className="text-sm  relative text-gray-600 flex flex-wrap gap-4 mt-3 pb-4 ">
          <p>
            🕒 {duration.hours}h {duration.minutes}m
          </p>
          <p>📚 {courseCount} Lessons</p>
          <p>🔥 {sales}+ Students</p>
        </div>

        {/* Price & Button */}
      </div>
      <div className="flex  justify-center items-center mt-3">
        <button className="bg-amber-600 absolute text-white px-4 py-2 rounded-lg ">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
