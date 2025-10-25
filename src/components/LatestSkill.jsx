import { useEffect, useState } from "react";
import LatestCard from "./LatestCard";

const LatestSkill = () => {
  const [latest, setLatest] = useState([]);
  useEffect(() => {
    fetch("/latest.json")
      .then((res) => res.json())
      .then((data) => setLatest(data));
  }, []);
  return (
    <section className="mt-[-75px] pb-4 py-4 ">
      <div className="max-w-6xl grid grid-cols-1 lg:grid-cols-3 mx-auto gap-5 bg-[#4D2C5E] py-20 px-10 rounded-xl">
        {latest.map((latest) => (
          <LatestCard key={latest.id} latest={latest}></LatestCard>
        ))}
      </div>
    </section>
  );
};

export default LatestSkill;
