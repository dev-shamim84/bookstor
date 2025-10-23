import { useEffect, useState } from "react";
import CourseCard from "./CourseCard";

const OurTrack = () => {
  const [course, setCourse] = useState([]);
  useEffect(() => {
    fetch("/course.json")
      .then((res) => res.json())
      .then((data) => setCourse(data.courses));
  }, []);
  console.log(course);
  return (
    <section className="py-5">
      <div className="container mx-auto px-4 py-6">
        <h2 className="font-bold text-center text-3xl mb-4">Our Tracks</h2>
        <p className="text-center text-gray-500 text-xl mb-4">
          Lorem Ipsum is simply dummy text of the printing.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-5 my-6">
          {course.map((course) => (
            <CourseCard key={course.id} course={course}></CourseCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTrack;
