import { useEffect, useState } from "react";
import TeacherCard from "./TeacherCard";

const Track = () => {
  const [teacher, setTeacher] = useState([]);
  useEffect(() => {
    fetch("/teacher.json")
      .then((res) => res.json())
      .then((data) => setTeacher(data));
  }, []);
  return (
    <section>
      <div className="container mx-auto  px-4 py-6">
        <h2 className="text-xl lg:text-5xl font-semibold text-center">
          Our Track
        </h2>
        <p className="text-gray-400 text-center">
          Lorem Ipsum is simply dummy text of the printing.
        </p>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap5">
          {teacher.map((teacher) => (
            <TeacherCard key={teacher.id} teacher={teacher}></TeacherCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Track;
