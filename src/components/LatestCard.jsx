const LatestCard = ({ latest }) => {
  const { title, des, img } = latest;
  return (
    <div className="flex gap-4 items-center md:items-start">
      <div className=" flex justify-center items-center bg-[#998d995b] px-5 py-2 h-[70px] rounded-xl w-[200px] md:w-[150px]">
        <img className=" object-contain" src={img} alt={title} />
      </div>
      <div>
        <h2 className="text-white font-semibold text-sm md:text-lg mb-2">
          {title}
        </h2>
        <p className="text-gray-300 text-sm">{des}</p>
      </div>
    </div>
  );
};

export default LatestCard;
