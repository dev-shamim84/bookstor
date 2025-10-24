const TeacherCard = ({ teacher }) => {
  const { name, des, profession, dep, img, linkedIn, instagram } = teacher;
  return (
    <aside className="bg-white shadow rounded-xl px-4 py-3">
      <div>
        <img src={img} alt={name} />
      </div>
      <div>
        <h3 className="font-medium text-[20px]">{name}</h3>
        <p className="text-[#868686]">{profession}</p>
      </div>
      <div className="my-3">
        <p className="text-sm text-[#ACACAC]">{des}</p>
      </div>
      <div className="flex items-center justify-between mb-3">
        <div>
          <p className="text-amber-600">{dep}</p>
        </div>
        <div className="flex gap-3">
          <img src={instagram} alt="" />
          <img src={linkedIn} alt="" />
        </div>
      </div>
    </aside>
  );
};

export default TeacherCard;
